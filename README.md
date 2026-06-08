# SView360 Marketing Website

Static enterprise marketing site for **SView360** — an Enterprise Cloud Video Management & AI Video Intelligence platform by **SEPLE NovaEdge Pvt. Ltd.**

Built with plain **HTML + CSS + Vanilla JavaScript** — no frameworks, no build step.

---

## Project Structure

```
sview360-website/
├── index.html
├── CNAME
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
└── README.md
```

## Local Development

No build tooling required:

```bash
open index.html
```

Or serve locally:

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```

## Sections

Sticky navbar · Hero with Command dashboard mockup · Enterprise value strip ·
Platform overview · SInsight AI-assisted analytics · Command-center workflow ·
Banking / PSU / Enterprise solutions · Security & governance · Deployment models ·
Integrator program · Camera compatibility · INR pricing · Final CTA · Footer.

## Deployment — GitHub Pages

This site is served by **GitHub Pages** directly from the repository.

- **Source:** `master` branch, root folder (`/`)
- **Build:** none — static HTML served as-is
- **Repo Pages URL:** https://gaurav9433.github.io/sview360-website/

### Custom Domain

- Production: **sview360.seple.in**
- The `CNAME` file in the repo root pins the custom domain for GitHub Pages.
- Configure DNS via GoDaddy: add a **CNAME** record pointing `sview360` to **`gaurav9433.github.io`**.
- After DNS propagates, enable **Enforce HTTPS** in Settings → Pages.

### Login Target

The Login / Access Platform buttons point to:

```
https://app.sview360.seple.in/login
```

## Content & Compliance Notes

- All icons are inline SVG; all mockups are CSS/SVG — no external images.
- Fonts: Inter (Google Fonts).
- AI is described as **AI-assisted** (operator verification), never autonomous.
- No certifications are claimed; governance copy uses "designed for" / "ready for" / "supports".
- Fire/smoke analytics are explicitly stated **not** to replace certified life-safety systems.
- All pricing is **indicative**, exclusive of GST.
- No internal technology stack, infrastructure, or trade-secret details are exposed in visible copy.

© 2026 SEPLE NovaEdge Pvt. Ltd. All rights reserved.
