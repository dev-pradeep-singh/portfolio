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

**`assets/js/main.js` renders `data.js` into the DOM on `DOMContentLoaded`** and owns all interactivity: scroll-spy nav highlighting, the mobile hamburger menu, smooth-scroll-to-section, a character-by-character typewriter effect with a blinking cursor, an `IntersectionObserver`-driven scroll-reveal (`reveal()` helper — adds `.reveal`/`.is-visible`, used by every section), and a subtle mousemove parallax on the hero's background orbs. Icons are inline SVG strings in the `icons` object at the top of the file — add new ones there rather than pulling in an icon library. Color-rotation palettes (`highlightGradients`, `techBadgePalette`, `categoryIcons`, `connectBrand`) assign varied accent colors to about-highlight icons, project tech badges, skill-category icons, and connect-card brand colors respectively — cycle through these by index rather than hardcoding a single color per item.

**`index.html` only contains structural containers** (`<nav id="nav">`, `<section id="home">` … `<section id="connect">`, `<footer id="footer">`) — each section's actual markup is injected by the corresponding `render*()` function in `main.js`. If a section looks empty when viewing page source, that's expected; it's populated at runtime.

**`assets/css/style.css` uses plain hex colors and hand-written component classes** (`.card`, `.btn-*`, per-section classes like `.timeline-card`, `.skill-badge`) rather than a utility framework — there's no Tailwind/PostCSS pipeline anymore. The visual design system (dark `gray-900`/`800`/`700` backgrounds, `emerald-400`→`blue-500` gradient accents, native system font stack with no webfont request, `ui-monospace` for the nav logo brackets, scroll-reveal/typewriter/gradient-border animation style) was deliberately adapted from [praveengongada.com](https://praveengongada.com) at the user's request — see the `.reveal`, `.typewriter-cursor`, `.connect-border`/`gradient-border-spin` rules for the animation primitives, and don't reintroduce the old teal/slate palette when touching this file.

**Skill icons** are fetched live from `https://skillicons.dev/icons?i=<name>`; the hero's floating icon cluster uses real brand-colored logos from `https://cdn.simpleicons.org/<slug>/<hex>` for Python/Docker and hand-drawn generic SVGs (tinted via inline `color`) for embedded-specific items with no published brand icon (AUTOSAR, CAN, RTOS, etc. — see `floatingIconGlyph` in `main.js`). Profile photo and resume PDF are external URLs hosted on `customer-assets.emergentagent.com` from the original Emergent-scaffolded project — not local files.

