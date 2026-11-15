# Mad Monkey Media website

Static site (HTML, CSS, JS). No build step. Deploys as-is on Vercel.

Pages: index, services, portfolio, about, careers, contact.
The previous Next.js version is preserved on the `main` history before this change.

## Editing
`tools/gen.py` generates the six HTML pages. Run `python3 tools/gen.py .` from the repo root, then commit. `styles.css` and `script.js` are edited directly. `tools/` is excluded from the deploy via `.vercelignore`.
