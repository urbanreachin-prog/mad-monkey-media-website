/* Mad Monkey Media Site Editor
   Left: pages and sections. Centre: live preview of the real site. Right: fields.
   Publishing commits the changed content files (and uploads) to GitHub in one commit; Vercel then deploys. */
(() => {
'use strict';
const $ = (s, r = document) => r.querySelector(s);
const el = (tag, attrs = {}, ...kids) => {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (v === false || v == null) continue;
    if (k === 'class') n.className = v;
    else if (k === 'text') n.textContent = v;
    else if (k.startsWith('on')) n.addEventListener(k.slice(2), v);
    else n.setAttribute(k, v === true ? '' : v);
  }
  for (const c of kids.flat()) if (c != null) n.append(c.nodeType ? c : document.createTextNode(c));
  return n;
};

const DEMO = new URLSearchParams(location.search).has('demo');   // local testing only
const ORIGIN = location.origin + '/';
const state = { schema: null, data: {}, orig: {}, sha: {}, pending: {}, page: 'home', sec: {}, device: 'phone', token: null, busy: false };
let engine = null, previewTimer = null, previewRunning = false, previewAgain = false, pendingScroll = null, lastScroll = 0;

/* ---------- GitHub ---------- */
async function gh(path, opts = {}) {
  const r = await fetch('https://api.github.com/repos/' + state.schema.repo + path, Object.assign({}, opts, {
    headers: { Authorization: 'Bearer ' + state.token, Accept: 'application/vnd.github+json', 'Content-Type': 'application/json' }
  }));
  if (!r.ok) { const t = await r.text().catch(() => ''); const e = new Error('GitHub ' + r.status + ' ' + t.slice(0, 160)); e.status = r.status; throw e; }
  return r.json();
}
const b64dec = s => new TextDecoder().decode(Uint8Array.from(atob(s.replace(/\n/g, '')), c => c.charCodeAt(0)));
const pretty = o => JSON.stringify(o, null, 2) + '\n';

/* ---------- preview engine (runs the real site generator in the browser) ---------- */
const PYODIDE = 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/';
function loadScript(src) { return new Promise((ok, no) => { const s = document.createElement('script'); s.src = src; s.onload = ok; s.onerror = () => no(new Error('Could not load ' + src)); document.head.append(s); }); }
const PyEngine = {
  py: null,
  async init() {
    await loadScript(PYODIDE + 'pyodide.js');
    this.py = await loadPyodide({ indexURL: PYODIDE });
    const gen = await (await fetch('/admin/gen.py', { cache: 'no-store' })).text();
    const FS = this.py.FS;
    ['/app', '/app/tools', '/app/content', '/out'].forEach(d => { try { FS.mkdir(d); } catch (e) {} });
    FS.writeFile('/app/tools/gen.py', gen);
  },
  async render(all) {
    const FS = this.py.FS;
    for (const [n, obj] of Object.entries(all)) FS.writeFile('/app/content/' + n + '.json', pretty(obj));
    this.py.runPython("import sys, runpy\nsys.argv=['gen.py','/out']\nrunpy.run_path('/app/tools/gen.py', run_name='__main__')");
    const out = {};
    for (const p of ['index', 'services', 'portfolio', 'about', 'careers', 'contact']) out[p + '.html'] = FS.readFile('/out/' + p + '.html', { encoding: 'utf8' });
    return out;
  }
};
const DemoEngine = {   // used only by the local test harness
  async init() {},
  async render(all) { return (await fetch('/__render', { method: 'POST', body: JSON.stringify(all) })).json(); }
};

const FRAME_JS = `<script>
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href]');if(!a)return;var h=a.getAttribute('href')||'';
var m=h.match(/^(index|services|portfolio|about|careers|contact)\\.html/);
if(m){e.preventDefault();e.stopImmediatePropagation();parent.postMessage({mmPage:m[1]+'.html'},'*');return}
if(h.charAt(0)==='#')return;e.preventDefault();e.stopImmediatePropagation()},true);
document.addEventListener('submit',function(e){e.preventDefault()},true);
<\/script>`;
function prepPreview(html) {
  let out = html.replace('<head>', '<head><base href="' + ORIGIN + '"><style>.pre,.curtain,.wa{display:none!important}</style>');
  out = out.replace('</body>', FRAME_JS + '</body>');
  for (const [path, p] of Object.entries(state.pending)) out = out.split(path).join(p.url);
  return out;
}

/* ---------- preview control ---------- */
function allData() { return state.data; }
function schedulePreview(delay = 350) { clearTimeout(previewTimer); previewTimer = setTimeout(runPreview, delay); }
async function runPreview() {
  if (!engine) { try { $('#pv').src = ORIGIN + pageDef().preview; } catch (e) {} return; }
  if (previewRunning) { previewAgain = true; return; }
  previewRunning = true;
  const note = $('#pv-note');
  try {
    const pages = await engine.render(allData());
    const file = pageDef().preview;
    const frame = $('#pv');
    try { lastScroll = frame.contentWindow.scrollY || 0; } catch (e) {}
    frame.addEventListener('load', () => {
      try { frame.contentWindow.scrollTo(0, pendingScroll ? 0 : lastScroll); } catch (e) {}
      if (pendingScroll) { const s = pendingScroll; pendingScroll = null; setTimeout(() => scrollPreviewTo(s), 250); }
    }, { once: true });
    frame.srcdoc = prepPreview(pages[file]);
    note.textContent = '';
  } catch (e) {
    note.textContent = 'Preview could not update: ' + e.message;
  }
  previewRunning = false;
  if (previewAgain) { previewAgain = false; runPreview(); }
}
function scrollPreviewTo(sel) {
  try {
    const d = $('#pv').contentWindow.document;
    const t = d.querySelector(sel);
    if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } catch (e) {}
}

/* ---------- schema helpers ---------- */
const pageDef = () => state.schema.pages.find(p => p.name === state.page);
function defaultFor(d) {
  switch (d.widget) {
    case 'boolean': return d.default != null ? d.default : false;
    case 'number': return d.default != null ? d.default : 0;
    case 'select': { const o = d.options[0]; return d.default != null ? d.default : (o && o.value != null ? o.value : o); }
    case 'object': return Object.fromEntries(d.fields.map(f => [f.name, defaultFor(f)]));
    case 'list': return [];
    default: return d.default != null ? d.default : '';
  }
}
function summaryOf(d, item) {
  if (!d.summary) return '';
  return d.summary.replace(/\{\{fields\.(\w+)\}\}/g, (_, k) => (item && item[k] != null ? item[k] : '')) || '';
}

/* ---------- dirty tracking ---------- */
const pageDirty = n => pretty(state.data[n]) !== pretty(state.orig[n]);
const dirtyPages = () => state.schema.pages.filter(p => pageDirty(p.name)).map(p => p.name);
function refreshStatus() {
  const dp = dirtyPages(), np = Object.keys(state.pending).length;
  const dirty = dp.length > 0 || np > 0;
  const s = $('#status');
  if (!state.busy) { s.className = 'status' + (dirty ? ' dirty' : ''); s.textContent = dirty ? 'Unsaved changes' : 'All changes published'; }
  $('#publish').disabled = !dirty || state.busy;
  $('#discard').disabled = !dirty || state.busy;
  document.querySelectorAll('#pages button').forEach(b => { const i = b.querySelector('i'); if (i) i.hidden = !dp.includes(b.dataset.p); });
}
function touch() { refreshStatus(); schedulePreview(); }

/* ---------- form fields ---------- */
function pickFile(accept, cb) { const i = el('input', { type: 'file', accept }); i.onchange = () => i.files[0] && cb(i.files[0]); i.click(); }
const readB64 = f => new Promise(res => { const r = new FileReader(); r.onload = () => res(r.result.split(',')[1]); r.readAsDataURL(f); });
const mediaUrl = v => { const key = (v || '').replace(/^\//, ''); return state.pending[key] ? state.pending[key].url : (v ? ORIGIN + key : ''); };

const put = (n, ...k) => k.forEach(c => c != null && n.append(c));
function renderField(d, holder, key, ctx = {}) {
  const wrap = el('div', { class: 'f f-' + d.widget });
  const lab = (suffix) => el('label', {}, d.label, d.required === false ? el('small', { text: ' (optional)' }) : '', suffix || '');
  const hint = () => d.hint ? el('p', { class: 'hint', text: d.hint }) : null;

  if (d.widget === 'string' || d.widget === 'number') {
    const inp = el('input', { type: d.widget === 'number' ? 'number' : 'text', step: d.widget === 'number' ? 'any' : false });
    inp.value = holder[key] == null ? '' : holder[key];
    inp.addEventListener('input', () => { holder[key] = d.widget === 'number' ? (inp.value === '' ? 0 : Number(inp.value)) : inp.value; touch(); });
    if (!ctx.bare) put(wrap, lab());
    put(wrap, inp, hint());
  } else if (d.widget === 'text') {
    const ta = el('textarea'); ta.value = holder[key] || '';
    const fit = () => { ta.style.height = 'auto'; ta.style.height = Math.max(70, ta.scrollHeight + 2) + 'px'; };
    ta.addEventListener('input', () => { holder[key] = ta.value; fit(); touch(); });
    if (!ctx.bare) put(wrap, lab());
    put(wrap, ta, hint());
    setTimeout(fit, 0);
  } else if (d.widget === 'boolean') {
    const cb = el('input', { type: 'checkbox' }); cb.checked = !!holder[key];
    cb.addEventListener('change', () => { holder[key] = cb.checked; touch(); });
    put(wrap, el('label', {}, cb, d.label), hint());
  } else if (d.widget === 'select') {
    const sl = el('select');
    d.options.forEach(o => { const v = o.value != null ? o.value : o, l = o.label != null ? o.label : o; sl.append(el('option', { value: v, text: l })); });
    sl.value = holder[key];
    sl.addEventListener('change', () => { holder[key] = sl.value; touch(); });
    put(wrap, lab(), sl);
  } else if (d.widget === 'file' || d.widget === 'image') {
    put(wrap, lab(), renderMedia(d, holder, key), hint());
  } else if (d.widget === 'object') {
    put(wrap, lab());
    d.fields.forEach(f => put(wrap, renderField(f, holder[key], f.name)));
  } else if (d.widget === 'list') {
    put(wrap, lab(), hint(), renderList(d, holder, key));
  }
  return wrap;
}

function renderMedia(d, holder, key) {
  const box = el('div', { class: 'media' });
  const draw = () => {
    box.innerHTML = '';
    const v = holder[key];
    const isVid = d.widget === 'file';
    const thumb = el('div', { class: 'thumb' });
    if (v && !isVid) thumb.append(el('img', { class: 'thumb', src: mediaUrl(v), alt: '' }));
    else if (v && isVid) { const vd = el('video', { class: 'thumb', muted: true, preload: 'metadata', src: mediaUrl(v) + '#t=0.1' }); thumb.append(vd); }
    else thumb.textContent = isVid ? 'video' : 'image';
    const pend = state.pending[(v || '').replace(/^\//, '')];
    box.append(thumb, el('div', { class: 'name' }, v ? v.split('/').pop() : 'Nothing selected', pend ? el('span', { class: 'badge-new', text: '  (new, not published yet)' }) : ''));
    box.append(el('button', { class: 'btn', type: 'button', text: v ? 'Replace' : 'Upload', onclick: () => pickFile(isVid ? 'video/mp4,video/*' : 'image/*', async f => {
      const mb = f.size / 1048576;
      if (mb > 60) return alert('This file is ' + mb.toFixed(0) + ' MB. Please compress it to under 20 MB first (720p is enough), then upload again.');
      if (mb > 20 && !confirm('This file is ' + mb.toFixed(0) + ' MB, which will make the site slower. Upload anyway?')) return;
      const name = Date.now().toString(36) + '-' + f.name.replace(/[^a-zA-Z0-9._-]+/g, '-');
      const path = 'assets/uploads/' + name;
      state.pending[path] = { b64: await readB64(f), url: URL.createObjectURL(f), size: f.size };
      holder[key] = '/' + path; draw(); touch();
    }) }));
    if (v && d.required === false) box.append(el('button', { class: 'btn', type: 'button', text: 'Remove', onclick: () => { holder[key] = ''; draw(); touch(); } }));
  };
  draw();
  return box;
}

function renderList(d, holder, key) {
  const box = el('div', { class: 'list' });
  const simple = !!d.field;
  const arr = () => holder[key];
  const min = d.min || 0, max = d.max || 1e9;
  let dragIdx = null;
  const draw = () => {
    box.innerHTML = '';
    arr().forEach((item, i) => box.append(renderItem(i)));
    const add = el('button', { class: 'btn addrow', type: 'button', text: '+ Add', disabled: arr().length >= max, onclick: () => {
      arr().push(simple ? defaultFor(d.field) : defaultFor({ widget: 'object', fields: d.fields }));
      draw(); touch();
    }});
    box.append(add);
  };
  const move = (i, j) => { const a = arr(); if (j < 0 || j >= a.length) return; a.splice(j, 0, a.splice(i, 1)[0]); draw(); touch(); };
  function renderItem(i) {
    const a = arr();
    const li = el('div', { class: 'li' + (simple ? ' simple' : '') });
    const handle = el('span', { class: 'handle', title: 'Drag to reorder', text: '⠿' });
    handle.addEventListener('mousedown', () => li.draggable = true);
    li.addEventListener('dragend', () => { li.draggable = false; li.classList.remove('drag'); box.querySelectorAll('.over').forEach(x => x.classList.remove('over')); });
    li.addEventListener('dragstart', e => { dragIdx = i; li.classList.add('drag'); e.dataTransfer.effectAllowed = 'move'; try { e.dataTransfer.setData('text/plain', String(i)); } catch (x) {} });
    li.addEventListener('dragover', e => { if (dragIdx == null) return; e.preventDefault(); li.classList.add('over'); });
    li.addEventListener('dragleave', () => li.classList.remove('over'));
    li.addEventListener('drop', e => { e.preventDefault(); if (dragIdx == null || dragIdx === i) return; const from = dragIdx; dragIdx = null; move(from, i); });
    const ctrls = [
      el('button', { class: 'mini', type: 'button', title: 'Move up', text: '↑', disabled: i === 0, onclick: () => move(i, i - 1) }),
      el('button', { class: 'mini', type: 'button', title: 'Move down', text: '↓', disabled: i === a.length - 1, onclick: () => move(i, i + 1) }),
      el('button', { class: 'mini del', type: 'button', title: 'Remove', text: '✕', disabled: a.length <= min, onclick: () => { if (confirm('Remove this item?')) { a.splice(i, 1); draw(); touch(); } } })
    ];
    if (simple) {
      const f = renderField(d.field, a, i, { bare: true });
      f.className = 'grow'; f.style.margin = '0';
      li.append(handle, f, ...ctrls);
      return li;
    }
    const sum = el('span', { class: 'sum', text: summaryOf(d, a[i]) || ('Item ' + (i + 1)) });
    const body = el('div', { class: 'li-b' }); body.hidden = true;
    d.fields.forEach(f => body.append(renderField(f, a[i], f.name)));
    body.addEventListener('input', () => { sum.textContent = summaryOf(d, a[i]) || ('Item ' + (i + 1)); });
    sum.addEventListener('click', () => { body.hidden = !body.hidden; });
    li.append(el('div', { class: 'li-h' }, handle, el('span', { class: 'num', text: String(i + 1) }), sum, ...ctrls), body);
    return li;
  }
  draw();
  return box;
}

/* ---------- panels ---------- */
function drawPages() {
  const nav = $('#pages'); nav.innerHTML = '';
  state.schema.pages.forEach(p => nav.append(el('button', { 'data-p': p.name, class: p.name === state.page ? 'on' : '', onclick: () => selectPage(p.name) }, p.label, el('i', { hidden: true, title: 'Unpublished changes' }))));
  refreshStatus();
}
function drawSections() {
  const nav = $('#sections'); nav.innerHTML = '';
  pageDef().sections.forEach((s, i) => nav.append(el('button', { class: i === (state.sec[state.page] || 0) ? 'on' : '', onclick: () => selectSection(i) }, s.label)));
}
function drawEditor() {
  const ed = $('#editor'); ed.innerHTML = '';
  const p = pageDef(), s = p.sections[state.sec[p.name] || 0];
  ed.append(el('h2', { text: s.label }), el('p', { class: 'sub', text: p.label }));
  s.keys.forEach(k => { const d = p.fields.find(f => f.name === k); ed.append(renderField(d, state.data[p.name], k)); });
  ed.parentElement.scrollTop = 0;
}
function selectPage(name) {
  state.page = name; pendingScroll = null; lastScroll = 0;
  drawPages(); drawSections(); drawEditor();
  const s = pageDef().sections[state.sec[name] || 0];
  if (s.sel) pendingScroll = s.sel;
  runPreview();
}
function selectSection(i) {
  state.sec[state.page] = i;
  drawSections(); drawEditor();
  const s = pageDef().sections[i];
  if (s.sel) scrollPreviewTo(s.sel);
}

/* ---------- device frame ---------- */
function fitDevice() {
  const dev = $('#device'), stage = $('#stage');
  if (state.device === 'phone') { dev.className = 'device phone'; dev.style.cssText = ''; return; }
  dev.className = 'device desktop';
  const aw = stage.clientWidth - 32, ah = stage.clientHeight - 32, W = 1280;
  const sc = Math.min(1, aw / W);
  dev.style.width = W + 'px'; dev.style.height = (ah / sc) + 'px'; dev.style.transform = 'scale(' + sc + ')';
}

/* ---------- publish ---------- */
async function publish() {
  const changed = dirtyPages();
  if (!changed.length && !Object.keys(state.pending).length) return;
  state.busy = true; refreshStatus();
  const st = $('#status'); st.className = 'status'; st.textContent = 'Publishing…';
  try {
    // refuse to overwrite edits made somewhere else since this page was opened
    for (const n of changed) {
      const f = state.schema.pages.find(p => p.name === n).file;
      const cur = await gh('/contents/' + f + '?ref=' + state.schema.branch);
      if (cur.sha !== state.sha[n] && !confirm('"' + n + '" was changed elsewhere since you opened this editor. Publishing will overwrite that change. Continue?')) { state.busy = false; refreshStatus(); return; }
    }
    const ref = await gh('/git/ref/heads/' + state.schema.branch);
    const base = await gh('/git/commits/' + ref.object.sha);
    const tree = [];
    for (const n of changed) {
      const f = state.schema.pages.find(p => p.name === n).file;
      const blob = await gh('/git/blobs', { method: 'POST', body: JSON.stringify({ content: pretty(state.data[n]), encoding: 'utf-8' }) });
      tree.push({ path: f, mode: '100644', type: 'blob', sha: blob.sha });
    }
    const used = JSON.stringify(state.data);
    for (const [path, p] of Object.entries(state.pending)) {
      if (!used.includes(path)) continue;   // uploaded but no longer used
      const blob = await gh('/git/blobs', { method: 'POST', body: JSON.stringify({ content: p.b64, encoding: 'base64' }) });
      tree.push({ path, mode: '100644', type: 'blob', sha: blob.sha });
    }
    const nt = await gh('/git/trees', { method: 'POST', body: JSON.stringify({ base_tree: base.tree.sha, tree }) });
    const msg = 'Site editor: update ' + (changed.join(', ') || 'media');
    const c = await gh('/git/commits', { method: 'POST', body: JSON.stringify({ message: msg, tree: nt.sha, parents: [ref.object.sha] }) });
    await gh('/git/refs/heads/' + state.schema.branch, { method: 'PATCH', body: JSON.stringify({ sha: c.sha }) });
    for (const n of changed) { state.orig[n] = JSON.parse(JSON.stringify(state.data[n])); try { state.sha[n] = (await gh('/contents/' + state.schema.pages.find(p => p.name === n).file + '?ref=' + state.schema.branch)).sha; } catch (e) {} }
    state.busy = false; refreshStatus();
    st.className = 'status ok'; st.textContent = 'Published. Going live in 1-2 minutes…';
    pollDeploy(c.sha);
  } catch (e) {
    state.busy = false; refreshStatus();
    st.className = 'status bad'; st.textContent = 'Could not publish: ' + e.message;
  }
}
async function pollDeploy(sha) {
  const st = $('#status');
  for (let i = 0; i < 40; i++) {
    await new Promise(r => setTimeout(r, 6000));
    try {
      const s = await gh('/commits/' + sha + '/status');
      if (s.state === 'success') { if (!state.busy && !dirtyPages().length) { st.className = 'status ok'; st.textContent = 'Live on the website ✓'; } return; }
      if (s.state === 'failure' || s.state === 'error') { st.className = 'status bad'; st.textContent = 'Deploy failed. The old site is still live. Tell Claude.'; return; }
    } catch (e) {}
  }
}
function discard() {
  if (!confirm('Throw away all unpublished changes?')) return;
  for (const n of Object.keys(state.orig)) state.data[n] = JSON.parse(JSON.stringify(state.orig[n]));
  state.pending = {};
  drawPages(); drawEditor(); refreshStatus(); runPreview();
}

/* ---------- start ---------- */
async function loadAll() {
  for (const p of state.schema.pages) {
    let text, sha = '';
    if (DEMO) text = await (await fetch('/content/' + p.name + '.json')).text();
    else { const r = await gh('/contents/' + p.file + '?ref=' + state.schema.branch); text = b64dec(r.content); sha = r.sha; }
    state.data[p.name] = JSON.parse(text); state.orig[p.name] = JSON.parse(text); state.sha[p.name] = sha;
  }
}
async function boot() {
  $('#login').hidden = true; $('#app').hidden = false;
  try { sessionStorage.setItem('mm-seen', '1'); } catch (e) {}
  $('#status').textContent = 'Loading your content…';
  await loadAll();
  drawPages(); drawSections(); drawEditor(); fitDevice();
  $('#status').textContent = 'Starting the live preview (first time takes a few seconds)…';
  try { engine = DEMO ? DemoEngine : PyEngine; await engine.init(); }
  catch (e) { engine = null; $('#pv-note').textContent = 'Live preview could not start (' + e.message + '). You can still edit and publish.'; }
  refreshStatus();
  const s = pageDef().sections[0];
  if (s.sel) pendingScroll = null;
  await runPreview();
}
async function login() {
  const msg = $('#login-msg'); msg.textContent = '';
  const tok = $('#tok').value.trim();
  if (!tok && !DEMO) { msg.textContent = 'Please paste your token.'; return; }
  state.token = tok;
  try {
    if (!DEMO) {
      const r = await gh('');
      if (!r.permissions || !r.permissions.push) { msg.textContent = 'This token can read the site but cannot change it. Create it again with Contents: Read and write.'; return; }
      localStorage.setItem('mm_token', tok);
    }
    await boot();
  } catch (e) {
    $('#login').hidden = false; $('#app').hidden = true;
    msg.textContent = e.status === 401 ? 'GitHub did not accept this token.' : 'Could not sign in: ' + e.message;
  }
}

async function init() {
  state.schema = await (await fetch('/admin/schema.json', { cache: 'no-store' })).json();
  $('#login-btn').onclick = login;
  $('#tok').addEventListener('keydown', e => { if (e.key === 'Enter') login(); });
  $('#publish').onclick = publish; $('#discard').onclick = discard;
  $('#menu-btn').onclick = () => { const m = $('#menu'); m.hidden = !m.hidden; };
  document.addEventListener('click', e => { if (!e.target.closest('#menu-btn') && !e.target.closest('#menu')) $('#menu').hidden = true; });
  $('#signout').onclick = () => { localStorage.removeItem('mm_token'); location.reload(); };
  document.querySelectorAll('#device-seg button').forEach(b => b.onclick = () => {
    state.device = b.dataset.d; document.querySelectorAll('#device-seg button').forEach(x => x.classList.toggle('on', x === b)); fitDevice(); runPreview();
  });
  addEventListener('resize', fitDevice);
  addEventListener('message', e => { if (e.data && e.data.mmPage) { const m = { 'index.html': 'home', 'services.html': 'services', 'portfolio.html': 'portfolio', 'about.html': 'about', 'careers.html': 'careers', 'contact.html': 'contact' }; if (m[e.data.mmPage]) selectPage(m[e.data.mmPage]); } });
  addEventListener('beforeunload', e => { if (dirtyPages().length || Object.keys(state.pending).length) { e.preventDefault(); e.returnValue = ''; } });
  const saved = localStorage.getItem('mm_token');
  if (DEMO) { $('#tok').value = 'demo'; login(); }
  else if (saved) { $('#tok').value = saved; login(); }
}
init();
})();
