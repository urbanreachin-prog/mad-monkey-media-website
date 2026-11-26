"""Builds the site into dist/. Vercel runs this on every deploy:  python3 tools/build.py
Pages are generated from content/*.json by tools/gen.py. Static files are copied as they are."""
import os, shutil, subprocess, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIST = os.path.join(ROOT, "dist")
shutil.rmtree(DIST, ignore_errors=True)
os.makedirs(DIST)
for name in ["assets", "admin"]:
    shutil.copytree(os.path.join(ROOT, name), os.path.join(DIST, name))
for name in ["styles.css", "script.js", "robots.txt", "sitemap.xml"]:
    shutil.copy(os.path.join(ROOT, name), os.path.join(DIST, name))
shutil.copy(os.path.join(ROOT, "tools", "gen.py"), os.path.join(DIST, "admin", "gen.py"))  # the editor runs the same generator in the browser for the live preview
subprocess.check_call([sys.executable, "-I", os.path.join(ROOT, "tools", "gen.py"), DIST])
pages = [p for p in os.listdir(DIST) if p.endswith(".html")]
assert len(pages) == 6, "expected 6 pages, found %s" % pages
print("dist ready:", sorted(pages))
