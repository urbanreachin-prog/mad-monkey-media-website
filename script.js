(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const WA = '917470637758';
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
  document.documentElement.classList.add('js');

  const yr = $('#year'); if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- preloader (first visit per session only) ---------- */
  const pre = $('.pre');
  let seen = false;
  try { seen = sessionStorage.getItem('mm-seen') === '1'; } catch (e) {}
  const start = () => { document.body.classList.add('ready'); setTimeout(reveal, 150); };
  if (pre && !seen && !reduce) {
    const num = $('.pre-num', pre), bar = $('.pre-bar i', pre);
    let v = 0;
    const t = setInterval(() => {
      v += Math.ceil(Math.random() * 9);
      if (v >= 100) { v = 100; clearInterval(t); setTimeout(() => { pre.classList.add('done'); start(); }, 260); }
      num.textContent = v; bar.style.width = v + '%';
    }, 40);
    try { sessionStorage.setItem('mm-seen', '1'); } catch (e) {}
    setTimeout(() => { pre.classList.add('done'); start(); }, 4200); // failsafe
  } else { if (pre) pre.style.display = 'none'; start(); }

  /* ---------- reveal on scroll ---------- */
  let io;
  function reveal() {
    io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    $$('[data-r], .split').forEach(el => io.observe(el));
    $$('.cnt').forEach(el => co.observe(el));
  }
  // hero split lines get a stagger
  $$('.split').forEach(s => $$('.ln > span', s).forEach((l, i) => l.style.transitionDelay = (i * 0.12) + 's'));

  /* ---------- counters ---------- */
  const run = el => {
    const to = parseFloat(el.dataset.to), dec = +(el.dataset.dec || 0), suf = el.dataset.suf || '', t0 = performance.now(), dur = 1800;
    (function tick(t) {
      const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 4);
      el.textContent = (to * e).toFixed(dec) + suf;
      if (k < 1) requestAnimationFrame(tick);
    })(t0);
  };
  const co = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { run(e.target); co.unobserve(e.target); } }), { threshold: .6 });

  /* ---------- scroll progress + scrubbed statement ---------- */
  const prog = $('.progress');
  const words = [];
  $$('.stmt').forEach(st => {
    const walk = node => {
      [...node.childNodes].forEach(n => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(p => {
            if (!p.trim()) { frag.appendChild(document.createTextNode(p)); return; }
            const s = document.createElement('span'); s.className = 'w'; s.textContent = p; frag.appendChild(s); words.push(s);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1) walk(n);
      });
    };
    walk(st);
  });
  let ticking = false;
  const onScroll = () => {
    if (ticking) return; ticking = true;
    requestAnimationFrame(() => {
      const h = document.documentElement;
      if (prog) prog.style.transform = 'scaleX(' + (h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)) + ')';
      const vh = innerHeight;
      words.forEach(w => {
        const r = w.getBoundingClientRect();
        w.classList.toggle('on', r.top < vh * 0.78);
      });
      ticking = false;
    });
  };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* ---------- cursor ---------- */
  if (fine && !reduce) {
    const ring = $('.cur'), dot = $('.cur-d');
    let x = innerWidth / 2, y = innerHeight / 2, rx = x, ry = y;
    addEventListener('mousemove', e => { x = e.clientX; y = e.clientY; dot.style.transform = `translate(${x}px,${y}px)`; });
    (function loop() { rx += (x - rx) * .16; ry += (y - ry) * .16; ring.style.transform = `translate(${rx}px,${ry}px)`; requestAnimationFrame(loop); })();
    document.addEventListener('mouseover', e => ring.classList.toggle('hot', !!e.target.closest('a,button,.card,.svc,summary,.hdl')));
  }

  /* ---------- magnetic buttons + spotlight cards ---------- */
  if (fine) {
    $$('.btn').forEach(b => {
      b.addEventListener('mousemove', e => { const r = b.getBoundingClientRect(); b.style.setProperty('--mx', ((e.clientX - r.left - r.width / 2) * .22) + 'px'); b.style.setProperty('--my', ((e.clientY - r.top - r.height / 2) * .3) + 'px'); });
      b.addEventListener('mouseleave', () => { b.style.setProperty('--mx', '0px'); b.style.setProperty('--my', '0px'); });
    });
    $$('.svc').forEach(c => c.addEventListener('mousemove', e => { const r = c.getBoundingClientRect(); c.style.setProperty('--mx', (e.clientX - r.left) + 'px'); c.style.setProperty('--my', (e.clientY - r.top) + 'px'); }));
    const stage = $('.stage');
    if (stage) addEventListener('mousemove', e => { stage.style.setProperty('--px', (e.clientX / innerWidth - .5).toFixed(3)); stage.style.setProperty('--py', (e.clientY / innerHeight - .5).toFixed(3)); });
  }

  /* ---------- mobile menu + dropdown ---------- */
  const burger = $('#burger'), links = $('#links');
  if (burger) {
    burger.addEventListener('click', () => burger.setAttribute('aria-expanded', links.classList.toggle('open')));
  }
  const dd = $('.dd');
  if (dd) {
    const b = $('.dd-btn', dd);
    b.addEventListener('click', e => { e.stopPropagation(); b.setAttribute('aria-expanded', dd.classList.toggle('open')); });
    document.addEventListener('click', () => dd.classList.remove('open'));
  }

  /* ---------- page transitions ---------- */
  const cur = $('.curtain');
  $$('a[href]').forEach(a => {
    const h = a.getAttribute('href');
    if (!h || h.startsWith('#') || /^(https?:|tel:|mailto:)/.test(h) || a.target === '_blank') return;
    a.addEventListener('click', e => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || !cur) return;
      e.preventDefault(); cur.classList.add('go');
      try { sessionStorage.setItem('mm-nav', '1'); } catch (x) {}
      setTimeout(() => { location.href = h; }, 260);
    });
  });
  addEventListener('pageshow', e => { if (e.persisted && cur) cur.classList.remove('go'); });
  (function () {
    const root = document.documentElement;
    if (!root.classList.contains('arrive')) return;
    if (!location.hash) scrollTo(0, 0);
    let done = false;
    const open = () => { if (done) return; done = true; if (!location.hash) scrollTo(0, 0); requestAnimationFrame(() => requestAnimationFrame(() => root.classList.remove('arrive'))); };
    if (document.readyState === 'complete') open(); else addEventListener('load', open);
    setTimeout(open, 900);
  })();

  /* ---------- real videos upgrade the animated placeholders ---------- */
  $$('.rl[data-video]').forEach(rl => {
    const v = document.createElement('video');
    // iOS / Android need the real attributes (not only the JS properties) for inline muted autoplay
    v.muted = true; v.defaultMuted = true; v.loop = true; v.playsInline = true;
    v.setAttribute('muted', ''); v.setAttribute('playsinline', ''); v.setAttribute('webkit-playsinline', ''); v.setAttribute('loop', '');
    v.preload = rl.hasAttribute('data-auto') ? 'auto' : 'metadata';
    const th = rl.querySelector('img.th'); if (th) v.poster = th.getAttribute('src');
    // phones often never fire loadeddata until play, so metadata is enough to show the video layer
    const mark = () => v.classList.add('ok');
    v.addEventListener('loadedmetadata', mark, { once: true });
    v.addEventListener('loadeddata', mark, { once: true });
    v.addEventListener('error', () => v.remove(), { once: true });
    v.src = rl.dataset.video;
    rl.appendChild(v);
    const host = rl.closest('.card') || rl.closest('.ph');
    if (host) {
      if (!fine && !host.matches('.pg .card')) host.addEventListener('click', () => { if (v.paused) { $$('.rl video').forEach(o => { if (o !== v && !o.hasAttribute('autoplay') && !o.closest('[data-auto]')) o.pause(); }); v.play().catch(() => {}); } else v.pause(); });
      if (fine) {
        host.addEventListener('mouseenter', () => { if (v.classList.contains('ok')) v.play().catch(() => {}); });
        host.addEventListener('mouseleave', () => { if (v.classList.contains('ok')) v.pause(); });
      }
    }
    if (rl.hasAttribute('data-auto')) {
      // play only while on screen (saves battery / data on phones)
      const io2 = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) v.play().catch(() => {}); else v.pause(); }), { threshold: .25 });
      io2.observe(rl);
    }
  });

  /* ---------- drag rails (work + reviews) ---------- */
  [['rail', 'pv', 'nx'], ['rail2', 'pv2', 'nx2']].forEach(([rid, pid, nid]) => {
    const rail = document.getElementById(rid);
    if (!rail) return;
    let down = false, sx = 0, sl = 0;
    rail.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse') return; down = true; sx = e.clientX; sl = rail.scrollLeft; rail.classList.add('drag'); });
    addEventListener('pointermove', e => { if (down) rail.scrollLeft = sl - (e.clientX - sx); });
    addEventListener('pointerup', () => { down = false; rail.classList.remove('drag'); });
    const step = () => Math.min(rail.clientWidth * .7, 640);
    document.getElementById(nid)?.addEventListener('click', () => rail.scrollBy({ left: step(), behavior: 'smooth' }));
    document.getElementById(pid)?.addEventListener('click', () => rail.scrollBy({ left: -step(), behavior: 'smooth' }));
  });

  /* ---------- before / after ---------- */
  const cmp = $('#cmp');
  if (cmp) {
    const bf = $('.bf', cmp), h = $('.hdl', cmp); let d = false;
    const set = x => { const r = cmp.getBoundingClientRect(); const p = Math.max(0, Math.min(1, (x - r.left) / r.width)) * 100; bf.style.width = p + '%'; h.style.left = p + '%'; };
    cmp.addEventListener('pointerdown', e => { d = true; cmp.setPointerCapture(e.pointerId); set(e.clientX); });
    cmp.addEventListener('pointermove', e => { if (d) set(e.clientX); });
    cmp.addEventListener('pointerup', () => d = false);
    cmp.addEventListener('pointercancel', () => d = false);
    // gentle intro sweep
    if (!reduce) { let t = 0; const ioC = new IntersectionObserver(es => { if (es[0].isIntersecting) { ioC.disconnect(); const a = performance.now(); (function s(n) { const k = Math.min(1, (n - a) / 1800); const p = 50 + Math.sin(k * Math.PI * 2) * 22 * (1 - k); bf.style.width = p + '%'; h.style.left = p + '%'; if (k < 1) requestAnimationFrame(s); })(a); } }, { threshold: .6 }); ioC.observe(cmp); }
  }

  /* ---------- portfolio filters + lightbox ---------- */
  const fbs = $$('.fb2');
  fbs.forEach(b => b.addEventListener('click', () => {
    fbs.forEach(x => x.classList.remove('on')); b.classList.add('on');
    const f = b.dataset.f;
    $$('.pg .card').forEach(c => { const h = f !== 'all' && c.dataset.cat !== f; c.classList.toggle('hide', h); if (!h) { c.style.animation = 'none'; void c.offsetWidth; c.style.animation = ''; } });
  }));
  const lbx = $('#lbx');
  if (lbx) {
    const v = $('video', lbx);
    const close = () => { lbx.classList.remove('open'); v.pause(); v.removeAttribute('src'); v.load(); };
    $$('.pg .card').forEach(c => c.addEventListener('click', () => {
      const src = c.dataset.video;
      v.muted = false; v.setAttribute('playsinline', ''); v.src = src; lbx.classList.add('open'); v.play().catch(() => {});
    }));
    $('button', lbx).addEventListener('click', close);
    lbx.addEventListener('click', e => { if (e.target === lbx) close(); });
    addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }

  /* ---------- forms -> WhatsApp ---------- */
  const qs = new URLSearchParams(location.search);
  $$('form[data-wa]').forEach(f => {
    const pre = qs.get('service');
    const sel = $('[data-prefill]', f);
    if (pre && sel) { const o = [...sel.options].find(o => o.value === pre || o.textContent === pre); if (o) sel.value = o.value; }
    f.addEventListener('submit', e => {
      e.preventDefault();
      const lines = [f.dataset.wa];
      new FormData(f).forEach((v, k) => { if (String(v).trim()) lines.push(k + ': ' + v); });
      window.open('https://wa.me/' + WA + '?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener');
    });
  });
})();
