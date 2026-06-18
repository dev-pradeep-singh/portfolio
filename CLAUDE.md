# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

This is Pradeep Singh's personal portfolio website (Senior Embedded Software Developer). It is a static, single-page site: plain HTML/CSS/vanilla JavaScript with **no build step, no package manager, and no backend**. It was originally scaffolded as a React (CRA/CRACO) frontend + FastAPI/MongoDB backend via Emergent AI, but was converted to a dependency-free static site to remove the install burden of an unused backend (broken: pinned an unpublished `emergentintegrations` package and a version-mismatched `pymongo`) and a ~900-package frontend `node_modules` tree, neither of which the actual portfolio content depended on.

## Running it

No install step. Either:
```bash
open index.html                  # works directly via file://
python3 -m http.server 8000      # or serve it, then visit localhost:8000
```
There is no test suite, linter, or build command — there's nothing to compile.

## Architecture

**`assets/js/data.js` is the single source of truth for all content** (profile info, about/highlights, work experience, projects, skills, floating hero icons). To change *what the site says*, edit that file — never hardcode content into `index.html` or `main.js`.

**`assets/js/main.js` renders `data.js` into the DOM on `DOMContentLoaded`** and owns all interactivity: scroll-spy nav highlighting, the fixed-nav background-on-scroll toggle, the mobile hamburger menu, smooth-scroll-to-section, and the hero's word-cycling typewriter effect. Icons are inline SVG strings in the `icons` object at the top of the file — add new ones there rather than pulling in an icon library.

**`index.html` only contains structural containers** (`<nav id="nav">`, `<section id="home">` … `<section id="connect">`, `<footer id="footer">`) — each section's actual markup is injected by the corresponding `render*()` function in `main.js`. If a section looks empty when viewing page source, that's expected; it's populated at runtime.

**`assets/css/style.css` uses plain hex colors and hand-written component classes** (`.card`, `.badge`, `.btn-*`, per-section classes like `.timeline-card`, `.skill-badge`) rather than a utility framework — there's no Tailwind/PostCSS pipeline anymore. Breakpoints are hand-written `@media` queries mirroring Tailwind's old `sm`/`md`/`lg` (640px/768px/1024px) for visual continuity with the original design.

**Skill icons** are fetched live from `https://skillicons.dev/icons?i=<name>` (no local icon assets); profile photo and resume PDF are likewise external URLs hosted on `customer-assets.emergentagent.com` from the original Emergent-scaffolded project — not local files.

