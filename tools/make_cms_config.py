"""Writes admin/config.yml (the field layout of the admin panel). Run: python3 tools/make_cms_config.py"""
import os, yaml
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ICONS = ["reels", "video", "content", "ads", "personal", "ugc", "podcast", "motion", "bolt", "users", "eye", "chat", "pin", "phone"]
HEAD = "Headline lines. Put a word between *stars* to make it italic, for example: *scroll* past."

def f(name, label, widget="string", **kw):
    d = {"label": label, "name": name, "widget": widget}
    d.update(kw)
    return d
def s(name, label, hint=None, req=True): return f(name, label, "string", **({"hint": hint} if hint else {}), **({} if req else {"required": False}))
def tx(name, label, hint=None): return f(name, label, "text", **({"hint": hint} if hint else {}))
def b(name, label, default=False, hint=None): return f(name, label, "boolean", default=default, **({"hint": hint} if hint else {}))
def sel(name, label, opts): return f(name, label, "select", options=opts, default=opts[0] if isinstance(opts[0], str) else opts[0]["value"])
def icon(name="icon"): return sel(name, "Icon", ICONS)
def vid(name="video", label="Video"): return f(name, label, "file", hint="Upload an .mp4 (720p or smaller, under about 20 MB) or pick one already uploaded.")
def img(name, label, req=False, hint=None): return f(name, label, "image", required=req, **({"hint": hint} if hint else {}))
def obj(name, label, fields, **kw): return f(name, label, "object", fields=fields, **kw)
def lst(name, label, fields, summary=None, **kw):
    d = f(name, label, "list", fields=fields, **kw)
    if summary: d["summary"] = summary
    return d
def strs(name, label, hint=None, **kw): return f(name, label, "list", field=f("item", "Item"), **({"hint": hint} if hint else {}), **kw)
def lines(name="h", label="Headline"): return strs(name, label, HEAD)
CAT = [{"label": "Showroom", "value": "showroom"}, {"label": "Brand", "value": "brand"}, {"label": "Creator", "value": "creator"}, {"label": "Ad", "value": "ads"}]
seo = obj("seo", "Search and tab title", [s("title", "Page title (browser tab and Google)"), tx("description", "Description (shown under the title on Google)")])

def reels(name, label, **kw):
    return lst(name, label, [s("title", "Title"), sel("category", "Category", CAT), vid(), img("poster", "Cover image (optional)", hint="Optional. If empty, the first frame of the video is used.")], summary="{{fields.title}}", **kw)

files = []
def page(label, name, fields):
    files.append({"label": label, "name": name, "file": "content/%s.json" % name, "fields": fields})

page("Home page", "home", [
 s("eyebrow", "Small text above the headline"), lines("h1", "Main headline"),
 obj("rating", "Rating pill", [s("score", "Score"), s("label", "Text")]),
 tx("lead", "Intro paragraph"),
 lst("hero_reels", "Hero phones (the 2 phones at the top)", [s("tag", "Small label on the phone"), s("title", "Title on the phone"), vid(), img("poster", "Cover image (optional)")], summary="{{fields.title}}", min=2, max=2),
 strs("chips", "Floating labels near the phones", max=2),
 obj("badge", "Round badge", [s("big", "Big text, e.g. 1.3B"), s("ring", "Text that rotates around it")]),
 strs("marquee_top", "Scrolling words, line 1"), strs("marquee_mid", "Scrolling words, line 2"),
 tx("statement", "Big statement paragraph", "Put a word between *stars* to make it italic."),
 obj("services", "Services section", [lines(), tx("lead", "Intro text")]),
 obj("work", "Work slider on the home page", [lines(), reels("cards", "Videos (drag to reorder)")]),
 obj("grade", "Colour grading section", [lines(), tx("text", "Paragraph"), strs("bullets", "Bullet points"), img("before", "Before image"), img("after", "After image")]),
 obj("process", "How it works", [lines(), tx("lead", "Intro text"), lst("steps", "Steps", [s("n", "Number"), s("title", "Title"), tx("text", "Text"), icon()], summary="{{fields.title}}")]),
 obj("why", "Why us", [lines(), s("bad_title", "Left box title"), strs("bad", "Left box points"), s("good_title", "Right box title"), strs("good", "Right box points"),
                       lst("features", "Three feature cards", [s("title", "Title"), tx("text", "Text"), icon()], summary="{{fields.title}}")]),
 obj("audience", "Who we work with", [lines(), tx("lead", "Intro text"), lst("cards", "Cards", [s("title", "Title"), tx("text", "Text"), strs("bullets", "Bullet points")], summary="{{fields.title}}")]),
 lines("faq_h", "FAQ headline"), lines("cta_h", "Bottom call-to-action headline"), seo])

page("Portfolio page", "portfolio", [lines(), tx("lead", "Intro text"), reels("items", "Videos (drag to reorder, the top one shows first)"), lines("cta_h", "Bottom headline"), tx("cta_p", "Bottom text"), seo])

page("Services page", "services", [lines(), tx("lead", "Intro text"),
 lst("items", "Services (drag to reorder)", [s("id", "ID (used in links, avoid changing)"), s("name", "Name"), icon(), b("flag", "Show FLAGSHIP badge"), s("tag", "One-line tagline"), tx("short", "Short description (home page card)"), tx("long", "Long description"), strs("inc", "What is included"), strs("best", "Best for")], summary="{{fields.name}}"),
 lines("combos_h", "Starting points headline"), tx("combos_lead", "Starting points intro"),
 lst("combos", "Starting point cards", [s("title", "Title"), tx("text", "Text"), strs("bullets", "Bullet points")], summary="{{fields.title}}"),
 lines("cta_h", "Bottom headline"), tx("cta_p", "Bottom text"), seo])

page("About page", "about", [lines(), tx("lead", "Intro text"), s("story_h", "Story headline", "Put a word between *stars* to make it italic."), strs("story", "Story paragraphs (drag to reorder)", widget_hint=None) if False else f("story", "Story paragraphs (drag to reorder)", "list", field=f("item", "Paragraph", "text")),
 lines("values_h", "Values headline"), lst("values", "Values", [icon(), s("title", "Title"), tx("text", "Text")], summary="{{fields.title}}"),
 lines("process_h", "Process headline"), tx("process_lead", "Process intro"), lst("timeline", "Process steps", [s("n", "Number"), s("title", "Title"), tx("text", "Text")], summary="{{fields.title}}"),
 lines("cta_h", "Bottom headline"), tx("cta_p", "Bottom text"), seo])

page("Careers page", "careers", [lines(), tx("lead", "Intro text"), lines("why_h", "Why join us headline"),
 lst("why", "Why join us cards", [icon(), s("title", "Title"), tx("text", "Text")], summary="{{fields.title}}"),
 lines("roles_h", "Open roles headline"), tx("roles_lead", "Open roles intro"), lst("roles", "Open roles", [s("title", "Role"), tx("text", "Description")], summary="{{fields.title}}"),
 s("apply_h", "Apply headline", "Put a word between *stars* to make it italic."), tx("apply_text", "Apply text"), seo])

page("Contact page", "contact", [lines(), tx("lead", "Intro text"), s("whatsapp_note", "WhatsApp box note"), s("call_note", "Call box note"), s("where", "Locations text"), s("where_note", "Locations note"),
 s("next_title", "What happens next, title"), strs("next", "What happens next, points"), lines("faq_h", "FAQ headline"), seo])

page("Site settings (phone, stats, FAQ)", "site", [
 s("whatsapp", "WhatsApp number", "Digits only with country code, for example 917470637758"), s("phone_display", "Phone number as shown on the site"), s("phone_tel", "Phone number for the call link", "For example +917470637758"),
 lst("stats", "Numbers (views, partners, ...)", [f("value", "Value", "number", value_type="float"), f("decimals", "Decimals shown", "number", value_type="int", default=0), s("suffix", "Suffix, e.g. B, +, h"), s("label", "Label")], summary="{{fields.label}}"),
 lst("faq", "FAQ (drag to reorder)", [s("q", "Question"), tx("a", "Answer"), b("home", "Show on the home page", True), b("contact", "Show on the contact page")], summary="{{fields.q}}")])

cfg = {
 "backend": {"name": "github", "repo": "urbanreachin-prog/mad-monkey-media-website", "branch": "main"},
 "media_folder": "assets/uploads", "public_folder": "/assets/uploads",
 "site_url": "https://themadmonkey.in", "display_url": "https://themadmonkey.in", "locale": "en",
 "collections": [{"name": "site", "label": "Website content", "files": files}],
}
open(os.path.join(ROOT, "admin", "config.yml"), "w").write("# Generated by tools/make_cms_config.py. Edit the script, not this file.\n" + yaml.safe_dump(cfg, sort_keys=False, allow_unicode=True, width=1000))
print("config written")
