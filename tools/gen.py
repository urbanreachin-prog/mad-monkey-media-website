import os, sys, json, html
OUT = sys.argv[1]
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
def load(n):
    return json.load(open(os.path.join(ROOT, "content", n + ".json"), encoding="utf-8"))
SITE = load("site")
LDJSON = '<script type="application/ld+json">' + '{"@context": "https://schema.org", "@type": "ProfessionalService", "name": "Mad Monkey Media", "url": "https://themadmonkey.in/", "logo": "https://themadmonkey.in/assets/images/apple-touch-icon.png", "image": "https://themadmonkey.in/assets/images/og.jpg", "description": "Mad Monkey Media is an independent video production and creative studio in Gwalior, Madhya Pradesh, making vertical reels, cinematic commercials and ads for showrooms, brands and creators in India, the USA and Vietnam.", "telephone": "+917470637758", "founder": {"@type": "Person", "name": "Krishna Gupta"}, "address": {"@type": "PostalAddress", "addressLocality": "Gwalior", "addressRegion": "Madhya Pradesh", "addressCountry": "IN"}, "areaServed": ["Gwalior", "India", "United States", "Vietnam"], "knowsAbout": ["Video production", "Instagram Reels", "Brand films", "Meta Ads", "UGC ads", "Colour grading", "Podcast editing"]}' + '</script>'
WA = "https://wa.me/" + SITE["whatsapp"]
CAT = {"showroom": "Showroom", "brand": "Brand", "creator": "Creator", "ads": "Ad"}
def acc(s):  # *word* -> accent word
    return __import__("re").sub(r"\*(.+?)\*", r'<span class="it">\1</span>', s)
def t(s):  # plain text -> safe html with accents
    return acc(html.escape(str(s), quote=False).replace("\u00b7", "&middot;"))
def u(p):  # media path -> relative url
    return (p or "").lstrip("/")
def attr(s):
    return html.escape(str(s), quote=True)

ICONS = {
 "reels": '<rect x="6.5" y="2.5" width="11" height="19" rx="3"/><path d="M10.7 9v5.5l4.3-2.75z"/>',
 "video": '<rect x="3" y="10" width="18" height="10" rx="2"/><path d="M3 10l1.6-4.6 16 3.2.2 1.4M8 6.4l2.6 3.6M13 7.3l2.6 3.2"/>',
 "content": '<path d="M4 8h3l1.5-2.5h7L17 8h3a1 1 0 011 1v9a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1z"/><circle cx="12" cy="13" r="3.6"/>',
 "ads": '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/>',
 "personal": '<circle cx="12" cy="8" r="4"/><path d="M4.5 20.5c.6-3.8 3.7-6 7.5-6s6.9 2.2 7.5 6"/><path d="M19 3v4M17 5h4"/>',
 "ugc": '<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M12 15.8s-2.6-1.7-2.6-3.3a1.5 1.5 0 012.6-.9 1.5 1.5 0 012.6.9c0 1.6-2.6 3.3-2.6 3.3z"/>',
 "podcast": '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11.5a6.5 6.5 0 0013 0M12 18v3.5M9 21.5h6"/>',
 "motion": '<path d="M11 3l1.9 5.1L18 10l-5.1 1.9L11 17l-1.9-5.1L4 10l5.1-1.9z"/><path d="M18.5 15v5M16 17.5h5"/>',
 "bolt": '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
 "users": '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.5-3.5 3-5.5 6.5-5.5s6 2 6.5 5.5"/><path d="M16 4.7a3.5 3.5 0 010 6.6M18 14.8c2 .5 3.2 2.3 3.5 5.2"/>',
 "eye": '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
 "chat": '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9.5h8M8 12.5h5"/>',
 "pin": '<path d="M12 21s7-6.2 7-11.5A7 7 0 005 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
 "phone": '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/>',
}
def sprite():
    return '<svg width="0" height="0" style="position:absolute" aria-hidden="true">' + "".join('<symbol id="i-%s" viewBox="0 0 24 24">%s</symbol>' % (k, v) for k, v in ICONS.items()) + '</svg>'
def ico(n, size=""):
    return '<span class="ico %s"><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-%s"/></svg></span>' % (size, n)


SERVICES = load("services")["items"]
FAQ = SITE["faq"]
STATS = [(s["value"], s["decimals"], s["suffix"], t(s["label"])) for s in SITE["stats"]]

NAV = [("index.html","Home"),("services.html","Services"),("portfolio.html","Portfolio"),("about.html","About"),("careers.html","Careers"),("contact.html","Contact")]

def L(*lines):  # split-line headline
    return "".join('<span class="ln"><span>%s</span></span>' % l for l in lines)

def nav(active):
    h = ""
    for href, name in NAV:
        if name == "Services":
            menu = "".join('<a href="services.html#%s"><b>%s</b><small>%s</small></a>' % (s["id"], s["name"], s["tag"]) for s in SERVICES)
            h += '<div class="dd"><button class="dd-btn%s" aria-expanded="false">Services <i></i></button><div class="dd-menu">%s</div></div>' % (" active" if active == href else "", menu)
        else:
            h += '<a href="%s"%s>%s</a>' % (href, ' class="active"' if href == active else "", name)
    return h

def shell(title, desc, active, body):
    fs = "".join('<li><a href="services.html#%s">%s</a></li>' % (s["id"], s["name"]) for s in SERVICES[:6])
    ticker = "".join("<span>%s</span>" % t for t in ["New projects open", "First cut in 24-48 hours", "Unlimited revisions", "1.3 billion views generated", "Based in New Delhi"]) * 2
    return '''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>%(title)s</title>
<meta name="description" content="%(desc)s">
<link rel="canonical" href="https://themadmonkey.in/%(canon)s">
<link rel="icon" type="image/png" href="assets/images/favicon.png">
<link rel="apple-touch-icon" href="assets/images/apple-touch-icon.png">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Mad Monkey Media">
<meta property="og:title" content="%(title)s">
<meta property="og:description" content="%(desc)s">
<meta property="og:url" content="https://themadmonkey.in/%(canon)s">
<meta property="og:image" content="https://themadmonkey.in/assets/images/og.jpg">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="%(title)s">
<meta name="twitter:description" content="%(desc)s">
<meta name="twitter:image" content="https://themadmonkey.in/assets/images/og.jpg">
%(ld)s
<meta name="theme-color" content="#790B13">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Fraunces:ital,opsz,wght@1,9..144,400;1,9..144,600&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<script>try{history.scrollRestoration="manual"}catch(e){}try{if(sessionStorage.getItem("mm-nav")==="1"){document.documentElement.classList.add("arrive");sessionStorage.removeItem("mm-nav")}}catch(e){}if(!location.hash)scrollTo(0,0)</script>
<link rel="stylesheet" href="styles.css">
</head>
<body>
%(sprite)s
<div class="progress"></div>
<div class="curtain"></div>
<div class="pre"><div class="pre-in"><div class="pre-num">0</div><div class="pre-bar"><i></i></div><small>Mad Monkey Media</small></div></div>
<div class="cur"></div><div class="cur-d"></div>

<header class="nav"><div class="wrap nav-in">
  <a href="index.html" class="brand"><span class="mark"><img src="assets/images/logo.png" alt="" onerror="this.remove()"><b>MM</b></span><span>MAD MONKEY MEDIA</span></a>
  <nav class="links" id="links">%(nav)s</nav>
  <a class="btn btn-i" href="%(wa)s" target="_blank" rel="noopener">Start a project</a>
  <button class="burger" id="burger" aria-label="Menu" aria-expanded="false"><span></span><span></span></button>
</div></header>

<main>
%(body)s
</main>

<footer class="foot"><div class="wrap">
  <div class="ft">
    <div><a href="index.html" class="brand"><span class="mark"><img src="assets/images/logo.png" alt="" onerror="this.remove()"><b>MM</b></span><span>MAD MONKEY MEDIA</span></a><p>A video production studio working with clients in the USA, Vietnam and India. We make reels, brand films and ads that help showrooms, brands and creators get noticed.</p></div>
    <div><h4>Pages</h4><ul><li><a href="index.html">Home</a></li><li><a href="services.html">Services</a></li><li><a href="portfolio.html">Portfolio</a></li><li><a href="about.html">About</a></li><li><a href="careers.html">Careers</a></li><li><a href="contact.html">Contact</a></li></ul></div>
    <div><h4>Services</h4><ul>%(fs)s</ul></div>
    <div><h4>Contact</h4><ul><li><a href="%(wa)s" target="_blank" rel="noopener">WhatsApp us</a></li><li><a href="tel:%(ptel)s">%(pdisp)s</a></li><li><a href="contact.html">USA &middot; Vietnam &middot; India</a></li></ul></div>
  </div>
  <div class="giant" aria-hidden="true">Mad Monkey</div>
</div>
<div class="fb"><div class="wrap" style="display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;width:min(1240px,100%% - 48px)"><span>&copy; <span id="year"></span> Mad Monkey Media. All rights reserved.</span><span>USA &middot; Vietnam &middot; India</span></div></div>
</footer>
<a class="wa" href="%(wa)s" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">Chat on WhatsApp</a>
<script src="script.js"></script>
</body>
</html>
''' % dict(title=title, desc=desc, sprite=sprite(), ticker=ticker, nav=nav(active), wa=WA, ptel=SITE['phone_tel'], pdisp=t(SITE['phone_display']), body=body, fs=fs, canon=('' if active=='index.html' else active), ld=(LDJSON if active=='index.html' else ''))

def reel(cls="", tag="", title="", video=None, auto=False, poster=None):
    v = ' data-video="%s"' % video if video else ""
    a = " data-auto" if auto else ""
    img = '<img class="th" src="%s" alt="" loading="lazy" onerror="this.remove()">' % poster if poster else ""
    return ('<div class="rl %s"%s%s>' % (cls, v, a)) + img + ('<span class="tg">%s</span><span class="eq"><u></u><u></u><u></u><u></u></span><span class="pl"><svg viewBox="0 0 24 24"><path d="M6 4l14 8-14 8z"/></svg></span><div class="cap"><b>%s</b><i></i></div></div>' % (tag, title))

def hero_inner(crumb, h1, lead, extra=""):
    return '<section class="ph-hero"><div class="wrap"><p class="crumb"><a href="index.html">Home</a> / %s</p><h1 class="split">%s</h1><p class="lead" data-r style="--dl:.3s">%s</p>%s</div></section>' % (crumb, h1, lead, extra)

def cta(h, p="Message us on WhatsApp and tell us what you need. We reply fast."):
    return '<section class="cta"><div class="wrap"><h2 class="split">%s</h2><p data-r>%s</p><div class="row" data-r><a class="btn btn-i" href="%s" target="_blank" rel="noopener">Chat on WhatsApp</a><a class="btn btn-o" href="contact.html">Send a message</a></div></div></section>' % (h, p, WA)

def faq(items):
    return '<div class="faq">%s</div>' % "".join('<details data-r><summary>%s</summary><p>%s</p></details>' % x for x in items)

def stats(items):
    return '<div class="stat-g">%s</div>' % "".join('<div data-r style="--dl:%ss"><div class="n cnt" data-to="%s" data-dec="%s" data-suf="%s">0</div><span>%s</span></div>' % (i * .1, to, dec, suf, lab) for i, (to, dec, suf, lab) in enumerate(items))


def write(name, html):
    open(os.path.join(OUT, name), "w", encoding="utf-8").write(html)


def Lx(lines):  # headline lines with *accent* markers
    if isinstance(lines, str):
        lines = [lines]
    return L(*[acc(html.escape(x, quote=False)) for x in lines])

def bullets(items):
    return "".join("<li>%s</li>" % t(x) for x in items)

def dl(i):  # ".1s", ".2s" ...
    return (".%d" % i if i < 10 else "%.1f" % (i * .1)) + "s"

def faq_pick(flag):
    return faq([(t(x["q"]), t(x["a"])) for x in FAQ if x.get(flag)])

def card_list(cards):
    out = []
    for i, c in enumerate(cards):
        out.append('<div class="ac" data-n="%02d" data-r%s><h3>%s</h3><p>%s</p><ul class="checks">%s</ul></div>' % (
            i + 1, (' style="--dl:%s"' % dl(i)) if i else "", t(c["title"]), t(c["text"]), bullets(c["bullets"])))
    return out

def rl(item, cls="", auto=False, tag=None):
    return reel(cls, tag or CAT.get(item.get("category"), ""), t(item["title"]), u(item["video"]), auto, u(item.get("poster")) or None)

def marq(words):
    return '<div class="mq"><div class="mq-t">%s</div></div>' % "".join("<span>%s</span>" % t(w) for w in list(words) * 2)

# ============================== HOME
H = load("home")
svc_cards = "".join('<a class="svc" href="services.html#%s" data-r style="--dl:%ss">%s<h3>%s</h3><p>%s</p><span class="more">Learn more</span></a>' % (s["id"], (i % 4) * .08, ico(s["icon"]), t(s["name"]), t(s["short"])) for i, s in enumerate(SERVICES))
work_cards = "".join('<article class="card">%s</article>' % rl(c) for c in H["work"]["cards"])
stack = "".join('<div class="pstep" style="--i:%d"><div class="big">%s</div><div><h3>%s</h3><p>%s</p></div>%s</div>' % (i, t(s["n"]), t(s["title"]), t(s["text"]), ico(s["icon"], "lg")) for i, s in enumerate(H["process"]["steps"]))
hr = H["hero_reels"]
feats = "".join('<div class="feat" data-r%s>%s<h3>%s</h3><p>%s</p></div>' % ((' style="--dl:.%ds"' % i) if i else "", ico(f["icon"]), t(f["title"]), t(f["text"])) for i, f in enumerate(H["why"]["features"]))
home = '''
<section class="hero">
  <div class="orb o1"></div><div class="orb o2"></div>
  <div class="wrap hero-grid">
    <div>
      <span class="eyebrow" data-r>%(eyebrow)s</span>
      <h1 class="split">%(h1)s</h1>
      <div class="rate" data-r style="--dl:.4s"><span class="stars" aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</span><b>%(score)s</b><i></i><span>%(rlabel)s</span></div>
      <p class="lead" data-r style="--dl:.5s">%(lead)s</p>
      <div class="row" data-r style="--dl:.65s"><a class="btn btn-i" href="%(wa)s" target="_blank" rel="noopener">Start a project</a><a class="btn btn-o" href="portfolio.html">See our work</a></div>
    </div>
    <div class="stage">
      <div class="ph a"><div class="scr">%(r1)s</div></div>
      <div class="ph b"><div class="scr">%(r2)s</div></div>
      %(chips)s
      <div class="badge"><svg viewBox="0 0 150 150"><defs><path id="cp" d="M75 75m-58 0a58 58 0 1 1 116 0a58 58 0 1 1-116 0"/></defs><text><textPath href="#cp">%(ring)s &bull; %(ring)s &bull;</textPath></text></svg><div>%(big)s</div></div>
    </div>
  </div>
  <div class="scroll-cue">Scroll<i></i></div>
</section>

%(mq1)s
%(mq2)s

<section class="sec deep"><div class="wrap">
  <span class="eyebrow" data-r>Who we are</span>
  <p class="stmt" style="margin-top:30px">%(stmt)s</p>
</div></section>

<section class="sec wine" id="services"><div class="wrap">
  <div class="sh"><div><span class="eyebrow" data-r>What we do</span><h2 class="split">%(h_svc)s</h2></div><p class="lead" data-r>%(svc_lead)s</p></div>
  <div class="svc-grid">%(svc)s</div>
</div></section>

<section class="sec deep" id="work" style="padding-bottom:70px"><div class="wrap">
  <div class="sh"><div><span class="eyebrow" data-r>Our work</span><h2 class="split">%(h_work)s</h2></div>
  <div class="arrows" data-r><button id="pv" aria-label="Previous">&larr;</button><button id="nx" aria-label="Next">&rarr;</button></div></div>
</div>
<div class="rail-h" id="rail">%(cards)s</div>
<div class="wrap"><a class="more" href="portfolio.html">View full portfolio</a></div>
</section>

<section class="stats-b"><div class="wrap">%(stats)s</div></section>

<section class="sec wine"><div class="wrap grade">
  <div><span class="eyebrow" data-r>Colour grading</span><h2 class="split" style="margin-top:18px">%(h_gr)s</h2>
    <p data-r>%(gr_text)s</p>
    <ul class="checks" data-r>%(gr_list)s</ul>
    <a class="more" href="services.html#motion" data-r>About colour and motion</a></div>
  <div class="cmp" id="cmp" data-r="s">
    <div class="art"><b>FINAL CUT</b></div>
    <img src="%(after)s" alt="" onerror="this.remove()">
    <div class="bf"><div class="art" style="width:200%%;justify-content:start"><b style="margin-left:calc(25%% - .5em)">RAW</b></div><img src="%(before)s" alt="" onerror="this.remove()"></div>
    <span class="lb r">Raw</span><span class="lb f">Final</span>
    <div class="hdl"><span>&#8646;</span></div>
  </div>
</div></section>

<section class="sec deep" id="process"><div class="wrap">
  <div class="sh"><div><span class="eyebrow" data-r>How it works</span><h2 class="split">%(h_pr)s</h2></div><p class="lead" data-r>%(pr_lead)s</p></div>
  <div class="stack">%(stack)s</div>
</div></section>

<section class="sec wine"><div class="wrap">
  <div class="sh"><div><span class="eyebrow" data-r>Why us</span><h2 class="split">%(h_why)s</h2></div></div>
  <div class="vs">
    <div class="bad" data-r="l"><h3>%(bad_t)s</h3><ul>%(bad)s</ul></div>
    <div class="mid" data-r="s">VS</div>
    <div class="good" data-r="rt"><h3>%(good_t)s</h3><ul>%(good)s</ul></div>
  </div>
  <div class="feats">%(feats)s</div>
</div></section>

<section class="sec light"><div class="wrap">
  <div class="sh"><div><span class="eyebrow" data-r style="color:var(--wine)">Who we work with</span><h2 class="split" style="color:var(--wine)">%(h_aud)s</h2></div><p class="lead" data-r>%(aud_lead)s</p></div>
  <div class="aud">
    %(aud)s
  </div>
</div></section>

<section class="sec deep"><div class="wrap">
  <div class="sh"><div><span class="eyebrow" data-r>FAQ</span><h2 class="split">%(h_faq)s</h2></div></div>
  %(faq)s
</div></section>

%(cta)s
''' % dict(
    eyebrow=t(H["eyebrow"]), h1=Lx(H["h1"]), score=t(H["rating"]["score"]), rlabel=t(H["rating"]["label"]), lead=t(H["lead"]), wa=WA,
    r1=reel("", t(hr[0]["tag"]), t(hr[0]["title"]), u(hr[0]["video"]), True, u(hr[0].get("poster")) or None),
    r2=reel("v2", t(hr[1]["tag"]), t(hr[1]["title"]), u(hr[1]["video"]), True, u(hr[1].get("poster")) or None),
    chips="".join('<span class="chip ch%d">%s</span>' % (i + 1, t(c)) for i, c in enumerate(H["chips"][:2])),
    ring=t(H["badge"]["ring"]), big=t(H["badge"]["big"]),
    mq1=marq(H["marquee_top"]), mq2=marq(H["marquee_mid"]), stmt=t(H["statement"]),
    h_svc=Lx(H["services"]["h"]), svc_lead=t(H["services"]["lead"]), svc=svc_cards,
    h_work=Lx(H["work"]["h"]), cards=work_cards, stats=stats(STATS),
    h_gr=Lx(H["grade"]["h"]), gr_text=t(H["grade"]["text"]), gr_list=bullets(H["grade"]["bullets"]), after=u(H["grade"]["after"]), before=u(H["grade"]["before"]),
    h_pr=Lx(H["process"]["h"]), pr_lead=t(H["process"]["lead"]), stack=stack,
    h_why=Lx(H["why"]["h"]), bad_t=t(H["why"]["bad_title"]), bad=bullets(H["why"]["bad"]), good_t=t(H["why"]["good_title"]), good=bullets(H["why"]["good"]), feats=feats,
    h_aud=Lx(H["audience"]["h"]), aud_lead=t(H["audience"]["lead"]), aud="\n    ".join(card_list(H["audience"]["cards"])),
    h_faq=Lx(H["faq_h"]), faq=faq_pick("home"), cta=cta(Lx(H["cta_h"])))
write("index.html", shell(attr(H["seo"]["title"]), attr(H["seo"]["description"]), "index.html", home))

# ============================== SERVICES
S = load("services")
chips = '<div class="chips" data-r style="--dl:.4s">%s</div>' % "".join('<a href="#%s">%s</a>' % (s["id"], t(s["name"])) for s in SERVICES)
blocks = ""
for i, s in enumerate(SERVICES):
    blocks += '''<article class="sb" id="%s" data-n="0%d" data-r><div>%s%s<h2>%s</h2><p class="tg">%s</p><a class="btn btn-i" href="contact.html?service=%s">Ask about this</a></div>
<div class="body"><p>%s</p><h4>What is included</h4><ul class="checks">%s</ul><h4>Best for</h4><div class="tags">%s</div></div></article>''' % (
        s["id"], i + 1, '<span class="flag">FLAGSHIP</span><br>' if s.get("flag") else "", ico(s["icon"], "lg"), t(s["name"]), t(s["tag"]), s["name"].replace(" ", "%20"),
        t(s["long"]), bullets(s["inc"]), "".join("<span>%s</span>" % t(b) for b in s["best"]))
combos = '<div class="aud">\n' + "\n".join(card_list(S["combos"])) + '</div>'
services = hero_inner("Services", Lx(S["h"]), t(S["lead"]), chips) + \
 '<section class="sec deep" style="padding-top:90px"><div class="wrap">%s</div></section>' % blocks + \
 '<section class="sec light"><div class="wrap"><div class="sh"><div><span class="eyebrow" style="color:var(--wine)">Starting points</span><h2 class="split" style="color:var(--wine)">%s</h2></div><p class="lead" data-r>%s</p></div>%s</div></section>' % (Lx(S["combos_h"]), t(S["combos_lead"]), combos) + \
 cta(Lx(S["cta_h"]), t(S["cta_p"]))
write("services.html", shell(attr(S["seo"]["title"]), attr(S["seo"]["description"]), "services.html", services))

# ============================== PORTFOLIO
PF = load("portfolio")
pcards = "".join('<article class="card" data-cat="%s" data-video="%s">%s</article>' % (attr(it["category"]), attr(u(it["video"])), rl(it)) for it in PF["items"])
portfolio = hero_inner("Portfolio", Lx(PF["h"]), t(PF["lead"])) + '''
<section class="sec deep" style="padding-top:80px"><div class="wrap">
<div class="filters" data-r><button class="fb2 on" data-f="all">All</button><button class="fb2" data-f="showroom">Showrooms</button><button class="fb2" data-f="brand">Brands</button><button class="fb2" data-f="creator">Creators</button><button class="fb2" data-f="ads">Ads</button></div>
<div class="pg">%s</div></div></section>
<section class="stats-b"><div class="wrap">%s</div></section>
%s
<div class="lbx" id="lbx"><button aria-label="Close">&times;</button><video controls playsinline></video></div>
''' % (pcards, stats(STATS), cta(Lx(PF["cta_h"]), t(PF["cta_p"])))
write("portfolio.html", shell(attr(PF["seo"]["title"]), attr(PF["seo"]["description"]), "portfolio.html", portfolio))

# ============================== ABOUT
A = load("about")
about = hero_inner("About", Lx(A["h"]), t(A["lead"])) + '''
<section class="sec light"><div class="wrap two">
<div data-r="l"><h2 style="color:var(--wine);font-size:clamp(40px,5.4vw,78px)">%s</h2></div>
<div data-r="rt">%s</div></div></section>
<section class="stats-b" style="background:var(--wine);color:var(--ivory)"><div class="wrap">%s</div></section>
<section class="sec deep"><div class="wrap"><div class="sh"><div><span class="eyebrow">What we believe</span><h2 class="split">%s</h2></div></div>
<div class="vals" style="--x:0">%s</div></div></section>
<section class="sec wine"><div class="wrap"><div class="sh"><div><span class="eyebrow">Our process</span><h2 class="split">%s</h2></div><p class="lead" data-r>%s</p></div>
<div class="tl">%s</div></div></section>
%s
''' % (t(A["story_h"]), "\n".join("<p>%s</p>" % t(p) for p in A["story"]), stats(STATS), Lx(A["values_h"]),
       "".join('<div class="val" data-r style="--dl:%ss">%s<h3>%s</h3><p>%s</p></div>' % (i * .1, ico(v["icon"]), t(v["title"]), t(v["text"])) for i, v in enumerate(A["values"])),
       Lx(A["process_h"]), t(A["process_lead"]),
       "".join('<div data-r style="--dl:%ss"><b>%s</b><h3>%s</h3><p>%s</p></div>' % ((i % 3) * .1, t(x["n"]), t(x["title"]), t(x["text"])) for i, x in enumerate(A["timeline"])),
       cta(Lx(A["cta_h"]), t(A["cta_p"])))
write("about.html", shell(attr(A["seo"]["title"]), attr(A["seo"]["description"]), "about.html", about))

# ============================== CAREERS
CA = load("careers")
roles = [(r["title"], r["text"]) for r in CA["roles"]]
careers = hero_inner("Careers", Lx(CA["h"]), t(CA["lead"])) + '''
<section class="sec deep"><div class="wrap"><div class="sh"><div><span class="eyebrow">Why join us</span><h2 class="split">%s</h2></div></div><div class="feats">%s</div></div></section>
<section class="sec wine"><div class="wrap"><div class="sh"><div><span class="eyebrow">Open roles</span><h2 class="split">%s</h2></div><p class="lead" data-r>%s</p></div><div class="roles">%s</div></div></section>
<section class="sec deep" id="apply"><div class="wrap cg">
<div data-r="l"><h2 style="font-size:clamp(44px,6vw,90px)">%s</h2><p class="lead" style="margin-top:24px">%s</p></div>
<form class="form" data-wa="Hi Mad Monkey, I would like to apply." data-r="rt"><h2>Apply now</h2><p>Your details open in WhatsApp, ready to send.</p>
<div class="field"><label for="a1">Your name</label><input id="a1" name="Name" required></div>
<div class="r2"><div class="field"><label for="role">Role</label><select id="role" name="Role">%s<option>Other</option></select></div><div class="field"><label for="a3">Experience</label><input id="a3" name="Experience" placeholder="e.g. 2 years"></div></div>
<div class="field"><label for="a4">Portfolio link</label><input id="a4" name="Portfolio" placeholder="Instagram, Drive or YouTube link"></div>
<div class="field"><label for="a5">About you</label><textarea id="a5" name="About me"></textarea></div>
<button class="btn btn-w" type="submit">Send on WhatsApp</button></form></div></section>
''' % (Lx(CA["why_h"]),
       "".join('<div class="feat" data-r style="--dl:%ss">%s<h3>%s</h3><p>%s</p></div>' % (i * .1, ico(w["icon"]), t(w["title"]), t(w["text"])) for i, w in enumerate(CA["why"])),
       Lx(CA["roles_h"]), t(CA["roles_lead"]),
       "".join('<div class="role" data-r><div><h3>%s</h3><p>%s</p></div><a class="btn btn-o" href="#apply" onclick="document.getElementById(\'role\').value=\'%s\'">Apply</a></div>' % (t(r), t(d), html.escape(r, quote=True).replace("&#x27;", "").replace("&quot;", "")) for r, d in roles),
       t(CA["apply_h"]), t(CA["apply_text"]),
       "".join("<option>%s</option>" % t(r) for r, d in roles))
write("careers.html", shell(attr(CA["seo"]["title"]), attr(CA["seo"]["description"]), "careers.html", careers))

# ============================== CONTACT
CO = load("contact")
opts = "".join("<option>%s</option>" % t(s["name"]) for s in SERVICES) + "<option>Not sure yet</option>"
contact = hero_inner("Contact", Lx(CO["h"]), t(CO["lead"])) + '''
<section class="sec deep" style="padding-top:90px"><div class="wrap cg">
<div class="cinfo">
<a class="cbox" href="%(wa)s" target="_blank" rel="noopener" data-r="l">%(i1)s<div><b>WhatsApp</b><span class="s">%(wan)s</span></div></a>
<a class="cbox" href="tel:%(ptel)s" data-r="l" style="--dl:.1s">%(i2)s<div><b>%(pdisp)s</b><span class="s">%(calln)s</span></div></a>
<div class="cbox" data-r="l" style="--dl:.2s">%(i3)s<div><b>%(where)s</b><span class="s">%(wheren)s</span></div></div>
<div class="cbox" style="display:block;--dl:.3s" data-r="l"><b style="margin-bottom:12px">%(nt)s</b><ul class="checks">%(next)s</ul></div>
</div>
<form class="form" data-wa="Hi Mad Monkey, I would like to start a project." data-r="rt"><h2>Start a project</h2><p>Fill this in and it opens in WhatsApp, ready to send.</p>
<div class="r2"><div class="field"><label for="c1">Your name</label><input id="c1" name="Name" required></div><div class="field"><label for="c2">Business name</label><input id="c2" name="Business"></div></div>
<div class="r2"><div class="field"><label for="c3">I am a</label><select id="c3" name="Type"><option>Showroom</option><option>Brand</option><option>Creator</option><option>Other</option></select></div><div class="field"><label for="c4">I need</label><select id="c4" name="Service" data-prefill>%(opts)s</select></div></div>
<div class="field"><label for="c5">Tell us more</label><textarea id="c5" name="Details" placeholder="What do you sell, and what do you want to achieve?"></textarea></div>
<button class="btn btn-w" type="submit">Send on WhatsApp</button></form></div></section>
<section class="sec wine"><div class="wrap"><div class="sh"><div><span class="eyebrow">Before you message</span><h2 class="split">%(h)s</h2></div></div>%(faq)s</div></section>
''' % dict(wa=WA, ptel=SITE["phone_tel"], pdisp=t(SITE["phone_display"]), i1=ico("chat"), i2=ico("phone"), i3=ico("pin"), opts=opts,
              wan=t(CO["whatsapp_note"]), calln=t(CO["call_note"]), where=t(CO["where"]), wheren=t(CO["where_note"]), nt=t(CO["next_title"]), next=bullets(CO["next"]),
              h=Lx(CO["faq_h"]), faq=faq_pick("contact"))
write("contact.html", shell(attr(CO["seo"]["title"]), attr(CO["seo"]["description"]), "contact.html", contact))
print("built")
