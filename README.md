# SView360 Marketing Website

Static enterprise marketing site for **SView360** — a Cloud Video Management System (VMS) and AI Video Analytics platform by **SEPLE NovaEdge Pvt. Ltd.**

Built with plain **HTML + CSS + Vanilla JavaScript** — no frameworks, no build step.

---

## Project Structure

```
sview360-website/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
└── README.md
```

## Local Development

No build tooling required. Simply open the file in a browser:

```bash
open index.html
```

Or serve it locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deployment — GitHub Pages

This site is served by **GitHub Pages** directly from the repository.

- **Source:** `master` branch, root folder (`/`)
- **Build:** none — static HTML served as-is
- **Repo Pages URL:** https://gaurav9433.github.io/sview360-website/
- Enable/verify under **Settings → Pages** (Source: *Deploy from a branch* → `master` / `/root`).

### Custom Domain

- Production: **sview360.seple.in**
- The `CNAME` file in the repo root pins the custom domain for GitHub Pages.
- Configure DNS via GoDaddy: add a **CNAME** record pointing `sview360` to **`gaurav9433.github.io`**.
  (For an apex/root domain you would instead use GitHub Pages `A`/`AAAA` records; this is a subdomain, so a CNAME is correct.)
- After DNS propagates, enable **Enforce HTTPS** in Settings → Pages.

### Login Target

The Login / Access Platform buttons point to:

```
https://app.sview360.seple.in/login
```

---

## Sections

Sticky navbar · Hero with VMS dashboard mockup · Metrics strip · Platform features ·
SInsight AI analytics · Security & governance · Deployment models · Use cases ·
Cloud-native architecture diagram · Final CTA · Footer.

## Notes

- All icons are inline SVG; all mockups are CSS/SVG — no external images.
- Fonts: Inter (Google Fonts).
- Marketing claims use "designed for" / "ready for" language; no certifications are asserted.
- Metrics shown represent platform design targets, not guaranteed deployment values.

© 2026 SEPLE NovaEdge Pvt. Ltd. All rights reserved.
