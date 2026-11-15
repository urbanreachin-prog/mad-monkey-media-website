import os, sys
OUT = sys.argv[1]
LDJSON = '<script type="application/ld+json">' + '{"@context": "https://schema.org", "@type": "ProfessionalService", "name": "Mad Monkey Media", "url": "https://themadmonkey.in/", "logo": "https://themadmonkey.in/assets/images/apple-touch-icon.png", "image": "https://themadmonkey.in/assets/images/og.jpg", "description": "Mad Monkey Media is an independent video production and creative studio in Gwalior, Madhya Pradesh, making vertical reels, cinematic commercials and ads for showrooms, brands and creators in India, the USA and Vietnam.", "telephone": "+917470637758", "founder": {"@type": "Person", "name": "Krishna Gupta"}, "address": {"@type": "PostalAddress", "addressLocality": "Gwalior", "addressRegion": "Madhya Pradesh", "addressCountry": "IN"}, "areaServed": ["Gwalior", "India", "United States", "Vietnam"], "knowsAbout": ["Video production", "Instagram Reels", "Brand films", "Meta Ads", "UGC ads", "Colour grading", "Podcast editing"]}' + '</script>'
WA = "https://wa.me/917470637758"

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

SERVICES = [
 dict(id="reels", name="Reels Production", icon="reels", flag=True, tag="Short videos made to hold attention.",
  short="Vertical 4K reels with a strong hook, clean sound and a pace that keeps people watching.",
  long="Short videos are often the first time a customer meets your brand. We plan the hook, shoot in vertical 4K from more than one angle, and edit for pace, so people stay till the last second and remember who you are.",
  inc=["Hook and script written for vertical formats", "Multi-angle 4K vertical filming with close-up detail shots", "Editing with captions, music and sound effects", "First cut in 24-48 hours, unlimited revisions, 9:16 final files"], best=["Showrooms", "Brands", "Creators"]),
 dict(id="video", name="Video Production", icon="video", tag="Brand films and commercials with a cinematic look.",
  short="Brand films, commercials and walkthroughs shot with proper lighting and smooth movement.",
  long="When your story needs more depth, we produce brand films, product commercials and walkthroughs of showrooms, homes and buildings. Everything is planned before the shoot, so the day runs smoothly and the final film looks premium.",
  inc=["Storyboard, location scouting and shoot schedule", "Cinema camera, lighting and stabilised movement", "Editing, custom sound design and colour grading"], best=["Brands", "Showrooms", "Real estate"]),
 dict(id="content", name="Content Production", icon="content", tag="Photos and visuals shot around your brand.",
  short="Product and lifestyle photography, planned with a shot list and shot in studio or on location.",
  long="A strong library of photos and visuals keeps every post, ad and web page looking consistent. We plan the shots first, then shoot your products and lifestyle scenes on location or in a studio.",
  inc=["Creative concept and shot list", "Product and lifestyle photography, on location or in studio", "Campaign visuals for posts, ads and your website"], best=["Brands", "Showrooms"]),
 dict(id="ads", name="Meta Ads", icon="ads", tag="Ads that bring enquiries, not just views.",
  short="Ad creatives and campaign setup so your best content reaches the right people.",
  long="Good ads start with good creative. We make the videos and images, then set up your Meta campaigns so the right audience sees them. We keep testing different creatives to find what brings you the best response.",
  inc=["Ad creatives: video hooks, static and carousel versions", "Campaign structure and audience setup", "Creative testing to see what works best"], best=["Brands", "Showrooms", "Online stores"]),
 dict(id="personal", name="Personal Branding", icon="personal", tag="Content that makes founders and experts stand out.",
  short="Positioning, scripts and batch filming for founders, creators and industry experts.",
  long="People trust people. We help founders, creators and industry experts show their knowledge on camera with confidence, without spending every week on content. We plan what to say, film in batches and edit it with authority.",
  inc=["Brand positioning and content pillar mapping", "Topic research and conversational script outlines", "Batch filming sessions at a studio or your office"], best=["Founders", "Creators", "Experts"]),
 dict(id="ugc", name="UGC Ads", icon="ugc", tag="Creator-style videos that feel real and convert.",
  short="Natural, creator-style ad videos built for Instagram and Facebook.",
  long="Ads that look like a real person's recommendation often work better than polished ones. We script, shoot and edit UGC-style videos built for Instagram and Facebook, with several versions to test.",
  inc=["Creator-style scripts and hooks", "Multiple variations of the same ad for testing", "Edits sized for Reels, Stories and feed ads"], best=["Brands", "Online stores", "Showrooms"]),
 dict(id="podcast", name="Podcast and YouTube", icon="podcast", tag="Long conversations turned into watchable content.",
  short="Multi-camera podcast edits, YouTube cuts and short clips pulled from long recordings.",
  long="We edit multi-camera podcasts and YouTube videos, then pull the best moments out as short clips for Reels and Shorts. One recording can feed a whole week of content.",
  inc=["Multi-camera podcast editing", "Short clips for Reels and Shorts", "YouTube long-form cuts with clean pacing and sound"], best=["Creators", "Founders"]),
 dict(id="motion", name="Motion and Colour", icon="motion", tag="Titles, animation and film-style colour.",
  short="Animated graphics and film-style colour grading that lift ordinary footage.",
  long="Motion graphics, animated text and careful colour grading make footage look finished. We add them to our own shoots or to videos you already have.",
  inc=["Animated titles, text and graphics", "Film-style colour grading with natural skin tones", "Sound clean-up and sound design"], best=["Everyone"]),
]
FAQ = [
 ("What is Mad Monkey Media?", "Mad Monkey Media (themadmonkey.in) is an independent video production and creative studio based in Gwalior, Madhya Pradesh, founded by Krishna Gupta. We make vertical reels, cinematic commercials and digital content systems for showrooms, brands and creators across India, the USA and Vietnam. We are not affiliated with other businesses that use a similar name."),
 ("Where is Mad Monkey Media based?", "We are based in Gwalior, Madhya Pradesh, India, and work with clients in India, the USA and Vietnam."),
 ("How fast do I get the first video?", "Usually within 24-48 hours of receiving your footage or brief."),
 ("Can I ask for changes?", "Yes. Revisions are unlimited until you are happy with the video."),
 ("Do you shoot too, or only edit?", "Both. We can shoot at your showroom or studio, or edit footage you already have."),
 ("What do I need to get started?", "Just a message on WhatsApp telling us about your business and what you want to achieve. We take it from there."),
 ("Which formats do you deliver?", "Vertical 9:16 for Reels and Stories, plus widescreen versions for YouTube and your website."),
 ("How much does it cost?", "It depends on what you need, how many videos and whether we shoot. Message us and we will share a clear quote."),
]
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
    <div><h4>Contact</h4><ul><li><a href="%(wa)s" target="_blank" rel="noopener">WhatsApp us</a></li><li><a href="tel:+917470637758">+91 74706 37758</a></li><li><a href="contact.html">USA &middot; Vietnam &middot; India</a></li></ul></div>
  </div>
  <div class="giant" aria-hidden="true">Mad Monkey</div>
</div>
<div class="fb"><div class="wrap" style="display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;width:min(1240px,100%% - 48px)"><span>&copy; <span id="year"></span> Mad Monkey Media. All rights reserved.</span><span>USA &middot; Vietnam &middot; India</span></div></div>
</footer>
<a class="wa" href="%(wa)s" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">Chat on WhatsApp</a>
<script src="script.js"></script>
</body>
</html>
''' % dict(title=title, desc=desc, sprite=sprite(), ticker=ticker, nav=nav(active), wa=WA, body=body, fs=fs, canon=('' if active=='index.html' else active), ld=(LDJSON if active=='index.html' else ''))

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

STATS = [(1.3, 1, "B", "Views generated"), (80, 0, "+", "Brand partners"), (24, 0, "h", "First cut turnaround"), (4.9, 1, "/5", "Client rating")]

def write(name, html):
    open(os.path.join(OUT, name), "w", encoding="utf-8").write(html)


# ---- CLIENT REVIEWS ----------------------------------------------------
# Only add REAL reviews here (text in the client's own words, with their OK).
# text=None shows a clearly marked placeholder card until the real review is added.
REVIEWS = [
 dict(name="Jinendra Jain", role="Jewellery business owner", co="Super Jewellers", text=None),
 dict(name="CA Vaibhav Jain", role="Finance creator, 800k+ followers", co="", text=None),
 dict(name="Nischal Jain", role="Founder", co="Gehna ERP, jewellery billing software", text=None),
]
def review_cards():
    out = ""
    for r in REVIEWS:
        ini = "".join(w[0] for w in r["name"].replace("CA ", "").split()[:2]).upper()
        body = ('<p class="q">%s</p>' % r["text"]) if r.get("text") else '<p class="q todo">Review coming soon. Add %s&rsquo;s real words here.</p>' % r["name"].replace("CA ", "").split()[0]
        who = r["role"] + (" &middot; " + r["co"] if r["co"] else "")
        out += '<article class="rv"><span class="qm">&ldquo;</span>%s<div class="by"><span class="av">%s</span><div><b>%s</b><small>%s</small></div></div></article>' % (body, ini, r["name"], who)
    return out

# ============================== HOME
svc_cards = "".join('<a class="svc" href="services.html#%s" data-r style="--dl:%ss">%s<h3>%s</h3><p>%s</p><span class="more">Learn more</span></a>' % (s["id"], (i % 4) * .08, ico(s["icon"]), s["name"], s["short"], ) for i, s in enumerate(SERVICES))
cards = [("Showroom", "3M Car Care", "showroom"), ("Brand", "Brand story", "brand"), ("Creator", "Creator edit", "creator"), ("Ad", "TVS promo", "ads"), ("Showroom", "Jewellery trend", "showroom"), ("Brand", "Growth campaign", "brand")]
work_cards = "".join('<article class="card">%s</article>' % reel("", t, n, "assets/reels/reel-%d.mp4" % (i + 1), False, "assets/images/reel-%d.jpg" % (i + 1)) for i, (t, n, c) in enumerate(cards))
steps = [("01", "Share your idea", "Tell us about your business, your goal and who you want to reach. A WhatsApp message is enough to begin.", "bolt"),
         ("02", "We plan and shoot", "We write the hook and script, plan every shot and film at your location or in our setup with proper lighting.", "content"),
         ("03", "You review", "You get the first cut in 24-48 hours. Ask for changes as many times as you need. Revisions are unlimited.", "eye"),
         ("04", "Post and grow", "We send final files in the right sizes. Post them as reels, run them as ads, or both.", "reels")]
stack = "".join('<div class="pstep" style="--i:%d"><div class="big">%s</div><div><h3>%s</h3><p>%s</p></div>%s</div>' % (i, n, t, p, ico(ic, "lg")) for i, (n, t, p, ic) in enumerate(steps))

home = '''
<section class="hero">
  <div class="orb o1"></div><div class="orb o2"></div>
  <div class="wrap hero-grid">
    <div>
      <span class="eyebrow" data-r>Video studio &middot; USA &middot; Vietnam &middot; India</span>
      <h1 class="split">%(h1)s</h1>
      <div class="rate" data-r style="--dl:.4s"><span class="stars" aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</span><b>4.9</b><i></i><span>Loved by 650+ customers</span></div>
      <p class="lead" data-r style="--dl:.5s">Mad Monkey Media makes reels, brand films and ads for showrooms, brands and creators, so more people notice you, trust you and get in touch.</p>
      <div class="row" data-r style="--dl:.65s"><a class="btn btn-i" href="%(wa)s" target="_blank" rel="noopener">Start a project</a><a class="btn btn-o" href="portfolio.html">See our work</a></div>
    </div>
    <div class="stage">
      <div class="ph a"><div class="scr">%(r1)s</div></div>
      <div class="ph b"><div class="scr">%(r2)s</div></div>
      <span class="chip ch1">Reels</span><span class="chip ch2">Brand films</span>
      <div class="badge"><svg viewBox="0 0 150 150"><defs><path id="cp" d="M75 75m-58 0a58 58 0 1 1 116 0a58 58 0 1 1-116 0"/></defs><text><textPath href="#cp">1.3 billion views generated &bull; 1.3 billion views generated &bull;</textPath></text></svg><div>1.3B</div></div>
    </div>
  </div>
  <div class="scroll-cue">Scroll<i></i></div>
</section>

<div class="mq"><div class="mq-t"><span>Reels</span><span>Brand films</span><span>Meta ads</span><span>UGC</span><span>Colour grading</span><span>Podcast edits</span><span>Reels</span><span>Brand films</span><span>Meta ads</span><span>UGC</span><span>Colour grading</span><span>Podcast edits</span></div></div>
<div class="mq"><div class="mq-t"><span>Hook</span><span>Shoot</span><span>Edit</span><span>Grade</span><span>Post</span><span>Repeat</span><span>Hook</span><span>Shoot</span><span>Edit</span><span>Grade</span><span>Post</span><span>Repeat</span></div></div>

<section class="sec deep"><div class="wrap">
  <span class="eyebrow" data-r>Who we are</span>
  <p class="stmt" style="margin-top:30px">We are a video studio that turns <span class="it">ordinary</span> businesses into brands people <span class="it">remember.</span> One team plans, shoots, edits and runs your ads, so you get more views, more trust and more enquiries.</p>
</div></section>

<section class="sec wine" id="services"><div class="wrap">
  <div class="sh"><div><span class="eyebrow" data-r>What we do</span><h2 class="split">%(h_svc)s</h2></div><p class="lead" data-r>From the first idea to the final file, one team handles planning, shooting, editing and ads. Pick one service or combine a few.</p></div>
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
    <p data-r>Raw footage looks flat. Colour grading gives it mood, natural skin tones and a soft, film-like finish. Drag the line to see the difference.</p>
    <ul class="checks" data-r><li>Natural, healthy skin tones</li><li>One consistent look across all your videos</li><li>Clean sound with no dead air</li></ul>
    <a class="more" href="services.html#motion" data-r>About colour and motion</a></div>
  <div class="cmp" id="cmp" data-r="s">
    <div class="art"><b>FINAL CUT</b></div>
    <img src="assets/images/after.jpg" alt="" onerror="this.remove()">
    <div class="bf"><div class="art" style="width:200%%;justify-content:start"><b style="margin-left:calc(25%% - .5em)">RAW</b></div><img src="assets/images/before.jpg" alt="" onerror="this.remove()"></div>
    <span class="lb r">Raw</span><span class="lb f">Final</span>
    <div class="hdl"><span>&#8646;</span></div>
  </div>
</div></section>

<section class="sec deep" id="process"><div class="wrap">
  <div class="sh"><div><span class="eyebrow" data-r>How it works</span><h2 class="split">%(h_pr)s</h2></div><p class="lead" data-r>Simple, clear and quick. You always know what happens next.</p></div>
  <div class="stack">%(stack)s</div>
</div></section>

<section class="sec wine"><div class="wrap">
  <div class="sh"><div><span class="eyebrow" data-r>Why us</span><h2 class="split">%(h_why)s</h2></div></div>
  <div class="vs">
    <div class="bad" data-r="l"><h3>A random freelancer</h3><ul><li>Slow replies and missed deadlines</li><li>One person doing everything</li><li>Quality changes from video to video</li></ul></div>
    <div class="mid" data-r="s">VS</div>
    <div class="good" data-r="rt"><h3>Mad Monkey</h3><ul><li>First cut in 24-48 hours</li><li>A full team on your project</li><li>The same premium look, every time</li></ul></div>
  </div>
  <div class="feats">
    <div class="feat" data-r>%(f1)s<h3>Quick turnaround</h3><p>You do not wait weeks. Your first cut reaches you in 24-48 hours.</p></div>
    <div class="feat" data-r style="--dl:.1s">%(f2)s<h3>A real team</h3><p>Senior editors, camera crew and a person you can always reach.</p></div>
    <div class="feat" data-r style="--dl:.2s">%(f3)s<h3>Detail in every frame</h3><p>We check colour, sound and pacing on every video before it reaches you.</p></div>
  </div>
</div></section>

<section class="sec light"><div class="wrap">
  <div class="sh"><div><span class="eyebrow" data-r style="color:var(--wine)">Who we work with</span><h2 class="split" style="color:var(--wine)">%(h_aud)s</h2></div><p class="lead" data-r>Different goals need different videos. Here is how we help each kind of client.</p></div>
  <div class="aud">
    <div class="ac" data-n="01" data-r><h3>Showrooms</h3><p>Show your space and products so more people walk in and ask.</p><ul class="checks"><li>Walkthrough reels</li><li>Offer and festival videos</li><li>Product close-ups</li></ul></div>
    <div class="ac" data-n="02" data-r style="--dl:.1s"><h3>Brands</h3><p>Look premium and consistent across reels, ads and your website.</p><ul class="checks"><li>Brand films</li><li>Ad creatives</li><li>Photo and video library</li></ul></div>
    <div class="ac" data-n="03" data-r style="--dl:.2s"><h3>Creators</h3><p>Edits that keep viewers watching and help your channel grow.</p><ul class="checks"><li>Reels and Shorts</li><li>Podcast and YouTube edits</li><li>Personal branding</li></ul></div>
  </div>
</div></section>

<section class="sec deep"><div class="wrap">
  <div class="sh"><div><span class="eyebrow" data-r>FAQ</span><h2 class="split">%(h_faq)s</h2></div></div>
  %(faq)s
</div></section>

%(cta)s
''' % dict(
    h1=L("We make brands", '<span class="it">impossible</span> to', "scroll past."), wa=WA,
    r1=reel("", "Showreel", "Real estate showreel", "assets/reels/reel-9.mp4", True, "assets/images/reel-9.jpg"), r2=reel("v2", "Brand", "Brand story", "assets/reels/reel-2.mp4", True, "assets/images/reel-2.jpg"), r3="",
    h_svc=L("Everything your", 'videos <span class="it">need</span>'), svc=svc_cards,
    h_work=L("Reels that stop", 'the <span class="it">scroll</span>'), cards=work_cards, stats=stats(STATS),
    h_gr=L("Every frame,", '<span class="it">graded</span>'), h_pr=L("How it", '<span class="it">works</span>'), stack=stack,
    h_why=L("Why", '<span class="it">Mad Monkey</span>'), f1=ico("bolt"), f2=ico("users"), f3=ico("eye"),
    h_rev=L('Loved by', '<span class="it">650+ customers</span>'), reviews=review_cards(),
    h_aud=L("Who we", '<span class="it">work with</span>'), h_faq=L("Questions we", '<span class="it">often hear</span>'),
    faq=faq(FAQ[:5]), cta=cta(L("Let's make your", '<span class="it">next video</span>')))
write("index.html", shell("Mad Monkey Media | Video Production Studio in Gwalior", "Mad Monkey Media is a video production studio in Gwalior, serving brands in India, the USA and Vietnam. Reels, brand films and ads for showrooms, brands and creators.", "index.html", home))

# ============================== SERVICES
chips = '<div class="chips" data-r style="--dl:.4s">%s</div>' % "".join('<a href="#%s">%s</a>' % (s["id"], s["name"]) for s in SERVICES)
blocks = ""
for i, s in enumerate(SERVICES):
    blocks += '''<article class="sb" id="%s" data-n="0%d" data-r><div>%s%s<h2>%s</h2><p class="tg">%s</p><a class="btn btn-i" href="contact.html?service=%s">Ask about this</a></div>
<div class="body"><p>%s</p><h4>What is included</h4><ul class="checks">%s</ul><h4>Best for</h4><div class="tags">%s</div></div></article>''' % (
        s["id"], i + 1, '<span class="flag">FLAGSHIP</span><br>' if s.get("flag") else "", ico(s["icon"], "lg"), s["name"], s["tag"], s["name"].replace(" ", "%20"),
        s["long"], "".join("<li>%s</li>" % x for x in s["inc"]), "".join("<span>%s</span>" % b for b in s["best"]))
combos = '''<div class="aud">
<div class="ac" data-n="01" data-r><h3>For showrooms</h3><p>A good starting mix to bring in walk-ins.</p><ul class="checks"><li>Reels Production</li><li>Meta Ads</li><li>Content Production</li></ul></div>
<div class="ac" data-n="02" data-r style="--dl:.1s"><h3>For brands</h3><p>Build a premium look and then push it with ads.</p><ul class="checks"><li>Video Production</li><li>UGC Ads</li><li>Motion and Colour</li></ul></div>
<div class="ac" data-n="03" data-r style="--dl:.2s"><h3>For creators</h3><p>Turn one recording into a full week of posts.</p><ul class="checks"><li>Podcast and YouTube</li><li>Reels Production</li><li>Personal Branding</li></ul></div></div>'''
services = hero_inner("Services", L("Eight ways we", 'help you <span class="it">get noticed</span>'), "Every service is built around one goal: more attention and more enquiries for you. Choose what you need now, add more later.", chips) + \
 '<section class="sec deep" style="padding-top:90px"><div class="wrap">%s</div></section>' % blocks + \
 '<section class="sec light"><div class="wrap"><div class="sh"><div><span class="eyebrow" style="color:var(--wine)">Starting points</span><h2 class="split" style="color:var(--wine)">%s</h2></div><p class="lead" data-r>These combinations work well for most clients. We adjust them to your budget and goals.</p></div>%s</div></section>' % (L("Not sure", '<span class="it">where to start?</span>'), combos) + \
 cta(L("Tell us what you", '<span class="it">need</span>'), "Share your idea and we will suggest the right mix of services.")
write("services.html", shell("Services | Mad Monkey Media", "Reels, brand films, content production, Meta ads, UGC ads, personal branding, podcast edits and motion graphics from Mad Monkey Media.", "services.html", services))

# ============================== PORTFOLIO
# Portfolio order (as chosen by Krishna), then the rest. Filters still work by category.
items = [("Creator","Trending editing style","creator",11),("Brand","Brand story","brand",2),("Brand","Real estate edit","brand",10),
 ("Creator","Podcast trailer","creator",7),("Ad","Healthcare","ads",8),("Ad","TVS promo","ads",4),
 ("Brand","Real estate showreel","brand",9),("Showroom","3M Car Care","showroom",1),("Showroom","Jewellery trend","showroom",5),
 ("Brand","Growth campaign","brand",6),("Creator","Creator edit","creator",3)]
pcards = "".join('<article class="card" data-cat="%s" data-video="assets/reels/reel-%d.mp4">%s</article>' % (c, n, reel("", t, ti, "assets/reels/reel-%d.mp4" % n, False, "assets/images/reel-%d.jpg" % n)) for (t, ti, c, n) in items)
portfolio = hero_inner("Portfolio", L("Work we are", '<span class="it">proud of</span>'), "A selection of reels, brand videos and ads we have made. Click any video to watch it full size.") + '''
<section class="sec deep" style="padding-top:80px"><div class="wrap">
<div class="filters" data-r><button class="fb2 on" data-f="all">All</button><button class="fb2" data-f="showroom">Showrooms</button><button class="fb2" data-f="brand">Brands</button><button class="fb2" data-f="creator">Creators</button><button class="fb2" data-f="ads">Ads</button></div>
<div class="pg">%s</div></div></section>
<section class="stats-b"><div class="wrap">%s</div></section>
%s
<div class="lbx" id="lbx"><button aria-label="Close">&times;</button><video controls playsinline></video></div>
''' % (pcards, stats(STATS), cta(L("Want results like", '<span class="it">these?</span>'), "Tell us about your business and we will plan your first videos."))
write("portfolio.html", shell("Portfolio | Mad Monkey Media", "Reels, brand films and ads made by Mad Monkey Media for showrooms, brands and creators.", "portfolio.html", portfolio))

# ============================== ABOUT
vals = [("ads", "Hook first", "The first three seconds decide whether anyone keeps watching, so we design them before anything else."), ("eye", "Every frame matters", "Colour, sound and pacing are checked on every video. Small details make a brand look premium."),
        ("bolt", "Speed, not shortcuts", "Fast does not mean careless. You get your first cut in 24-48 hours, made properly."), ("chat", "Plain talk", "No heavy jargon. We explain what we are doing and why, in words you can use.")]
tl = [("01","Brief","You tell us about your business, goals and the people you want to reach."),("02","Plan","We write the hook, script and shot list, and agree the plan with you."),("03","Shoot","Our crew films at your location or in our setup with proper lighting."),
      ("04","Edit","Editing, sound and colour come together into your first cut."),("05","Review","You watch the cut and ask for changes. Revisions are unlimited."),("06","Deliver","You get final files in the right formats, ready to post or run as ads.")]
about = hero_inner("About", L("A video studio built", 'around <span class="it">attention</span>'), "We help local showrooms, growing brands and creators look better on screen and get more people to take action.") + '''
<section class="sec light"><div class="wrap two">
<div data-r="l"><h2 style="color:var(--wine);font-size:clamp(40px,5.4vw,78px)">Built in Gwalior. Driven by a <span class="it">bigger vision.</span></h2></div>
<div data-r="rt"><p>Mad Monkey Media started in Gwalior, Madhya Pradesh, eight years ago with a simple belief: every brand has a story worth telling, and every story deserves to be told right.</p>
<p>Founded by Krishna Gupta, what began as a creative vision has grown into an independent video production and creative studio, working with brands across India, the USA and Vietnam.</p>
<p>Over the years, we've worked on countless projects, collaborated with different businesses, and helped brands turn their ideas into stories that connect with people. Every project has taught us something, and every client has been a part of our journey.</p>
<p>Today, we create vertical reels, cinematic commercials and digital content systems for brands that want to stand out and grow.</p>
<p>We're still rooted in Gwalior, but our vision has always been bigger than a location.</p>
<p>Behind every project is a team that cares about the details, takes ownership of the work, and believes in doing things properly.</p>
<p>If you have a story to tell, we'd love to be a part of it.</p></div></div></section>
<section class="stats-b" style="background:var(--wine);color:var(--ivory)"><div class="wrap">%s</div></section>
<section class="sec deep"><div class="wrap"><div class="sh"><div><span class="eyebrow">What we believe</span><h2 class="split">%s</h2></div></div>
<div class="vals" style="--x:0">%s</div></div></section>
<section class="sec wine"><div class="wrap"><div class="sh"><div><span class="eyebrow">Our process</span><h2 class="split">%s</h2></div><p class="lead" data-r>Six clear steps from the first message to the final file.</p></div>
<div class="tl">%s</div></div></section>
%s
''' % (stats(STATS), L("What we", '<span class="it">believe</span>'),
       "".join('<div class="val" data-r style="--dl:%ss">%s<h3>%s</h3><p>%s</p></div>' % (i * .1, ico(ic), t, p) for i, (ic, t, p) in enumerate(vals)),
       L("How a project", '<span class="it">runs</span>'),
       "".join('<div data-r style="--dl:%ss"><b>%s</b><h3>%s</h3><p>%s</p></div>' % ((i % 3) * .1, n, t, p) for i, (n, t, p) in enumerate(tl)),
       cta(L("Let's work", '<span class="it">together</span>'), "Tell us about your business and we will plan the right videos for you."))
write("about.html", shell("About | Mad Monkey Media", "Mad Monkey Media is an independent video production studio serving the USA, Vietnam and India making reels, commercials and digital media for brands.", "about.html", about))

# ============================== CAREERS
why = [("bolt", "Real work, real reach", "Your edits and shoots go live for real showrooms, brands and creators."), ("users", "Learn from seniors", "Work alongside senior editors and get feedback that helps you improve."), ("reels", "Fast-moving team", "Short turnaround means you see your work published quickly.")]
roles = [("Video Editor", "Reels, brand films and ads. Strong sense of pace and sound."), ("Videographer", "Vertical and cinematic shooting, lighting and camera movement."), ("Motion Designer", "Animated titles, graphics and clean visual polish."), ("Meta Ads Executive", "Campaign setup, audience testing and creative reporting.")]
careers = hero_inner("Careers", L("Build videos people", '<span class="it">cannot scroll past</span>'), "We are always happy to meet talented editors, camera people, designers and marketers. Send us your work and tell us what you love doing.") + '''
<section class="sec deep"><div class="wrap"><div class="sh"><div><span class="eyebrow">Why join us</span><h2 class="split">%s</h2></div></div><div class="feats">%s</div></div></section>
<section class="sec wine"><div class="wrap"><div class="sh"><div><span class="eyebrow">Open roles</span><h2 class="split">%s</h2></div><p class="lead" data-r>Do not see your role? Apply anyway and tell us how you can help.</p></div><div class="roles">%s</div></div></section>
<section class="sec deep" id="apply"><div class="wrap cg">
<div data-r="l"><h2 style="font-size:clamp(44px,6vw,90px)">Send your work, <span class="it">we will take a look.</span></h2><p class="lead" style="margin-top:24px">Share a link to your portfolio, showreel or best edits. We read every application.</p></div>
<form class="form" data-wa="Hi Mad Monkey, I would like to apply." data-r="rt"><h2>Apply now</h2><p>Your details open in WhatsApp, ready to send.</p>
<div class="field"><label for="a1">Your name</label><input id="a1" name="Name" required></div>
<div class="r2"><div class="field"><label for="role">Role</label><select id="role" name="Role">%s<option>Other</option></select></div><div class="field"><label for="a3">Experience</label><input id="a3" name="Experience" placeholder="e.g. 2 years"></div></div>
<div class="field"><label for="a4">Portfolio link</label><input id="a4" name="Portfolio" placeholder="Instagram, Drive or YouTube link"></div>
<div class="field"><label for="a5">About you</label><textarea id="a5" name="About me"></textarea></div>
<button class="btn btn-w" type="submit">Send on WhatsApp</button></form></div></section>
''' % (L("Why join", '<span class="it">us</span>'),
       "".join('<div class="feat" data-r style="--dl:%ss">%s<h3>%s</h3><p>%s</p></div>' % (i * .1, ico(ic), t, p) for i, (ic, t, p) in enumerate(why)),
       L("Roles we", '<span class="it">look for</span>'),
       "".join('<div class="role" data-r><div><h3>%s</h3><p>%s</p></div><a class="btn btn-o" href="#apply" onclick="document.getElementById(\'role\').value=\'%s\'">Apply</a></div>' % (r, d, r) for r, d in roles),
       "".join("<option>%s</option>" % r for r, d in roles))
write("careers.html", shell("Careers | Mad Monkey Media", "Join Mad Monkey Media, a video production studio serving the USA, Vietnam and India. Editors, videographers, designers and marketers welcome.", "careers.html", careers))

# ============================== CONTACT
opts = "".join("<option>%s</option>" % s["name"] for s in SERVICES) + "<option>Not sure yet</option>"
contact = hero_inner("Contact", L("Let's talk about", 'your <span class="it">next video</span>'), "Tell us what you do and what you want to achieve. We will reply with ideas and a clear plan.") + '''
<section class="sec deep" style="padding-top:90px"><div class="wrap cg">
<div class="cinfo">
<a class="cbox" href="%(wa)s" target="_blank" rel="noopener" data-r="l">%(i1)s<div><b>WhatsApp</b><span class="s">Fastest way to reach us</span></div></a>
<a class="cbox" href="tel:+917470637758" data-r="l" style="--dl:.1s">%(i2)s<div><b>+91 74706 37758</b><span class="s">Call us</span></div></a>
<div class="cbox" data-r="l" style="--dl:.2s">%(i3)s<div><b>USA &middot; Vietnam &middot; India</b><span class="s">Where we work with clients</span></div></div>
<div class="cbox" style="display:block;--dl:.3s" data-r="l"><b style="margin-bottom:12px">What happens next</b><ul class="checks"><li>We read your message and reply on WhatsApp</li><li>We understand your goal and suggest a plan</li><li>You approve and we start. First cut in 24-48 hours.</li></ul></div>
</div>
<form class="form" data-wa="Hi Mad Monkey, I would like to start a project." data-r="rt"><h2>Start a project</h2><p>Fill this in and it opens in WhatsApp, ready to send.</p>
<div class="r2"><div class="field"><label for="c1">Your name</label><input id="c1" name="Name" required></div><div class="field"><label for="c2">Business name</label><input id="c2" name="Business"></div></div>
<div class="r2"><div class="field"><label for="c3">I am a</label><select id="c3" name="Type"><option>Showroom</option><option>Brand</option><option>Creator</option><option>Other</option></select></div><div class="field"><label for="c4">I need</label><select id="c4" name="Service" data-prefill>%(opts)s</select></div></div>
<div class="field"><label for="c5">Tell us more</label><textarea id="c5" name="Details" placeholder="What do you sell, and what do you want to achieve?"></textarea></div>
<button class="btn btn-w" type="submit">Send on WhatsApp</button></form></div></section>
<section class="sec wine"><div class="wrap"><div class="sh"><div><span class="eyebrow">Before you message</span><h2 class="split">%(h)s</h2></div></div>%(faq)s</div></section>
''' % dict(wa=WA, i1=ico("chat"), i2=ico("phone"), i3=ico("pin"), opts=opts, h=L("Quick", '<span class="it">answers</span>'), faq=faq([FAQ[0], FAQ[3], FAQ[5]]))
write("contact.html", shell("Contact | Mad Monkey Media", "Contact Mad Monkey Media on WhatsApp or by phone to start your next video project.", "contact.html", contact))
print("built")
