# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **no-build, zero-dependency roofing company website template** maintained by Ironsight Digital for client demos.

To run: open `index.html` directly in a browser. No npm install, no build step, no server required.

## File Structure

```
ironsight-demo/
├── index.html          — Home page
├── services.html       — Services detail page
├── how-it-works.html   — Lead automation demo page (Ironsight pitch)
├── contact.html        — Contact / free inspection form
├── assets/
│   ├── css/
│   │   └── style.css   — All styles (design system, layout, components)
│   └── js/
│       └── main.js     — All JavaScript (scroll reveal, stat counters, FAQ, SMS demo, contact form)
```

## Architecture

- **CSS** (`assets/css/style.css`): Design system using CSS custom properties (`--bg`, `--steel`, `--white`, `--gray`), Barlow/Barlow Condensed fonts from Google Fonts, responsive breakpoints at 860px and 580px.
- **HTML** (four separate pages): Real multi-page navigation via `<a href>` links. Each page includes the shared nav and mobile sticky CTA. Active nav link gets `class="active"`.
- **JavaScript** (`assets/js/main.js`): IntersectionObserver scroll-reveal, animated stat counters, FAQ accordion, interactive SMS journey demo, contact form handler.

## Customization Points

Each file contains inline `<!-- CUSTOMIZE: -->` comments marking client-specific values.

| What | Where |
|------|-------|
| Business name, meta tags, OG tags | `<head>` of each HTML file |
| Hero headline + subheadline | `index.html` hero section |
| Phone number | `index.html`, `contact.html`, all mobile sticky CTAs |
| Google Tag Manager ID | `<head>` of each HTML file (commented out) |
| Form submission handler (Formspree/webhook/CRM) | `contact.html` form + `assets/js/main.js` `handleContactSubmit()` |
| schema.org structured data (name, address, phone, URL) | `index.html` head section |
| Service photos | `services.html` `.svc-visual` divs (swap SVG placeholder for `<img>`) |
| Footer tagline and certifications | `index.html` footer |

## Deployment

Upload the entire directory to any static web host. All asset paths are relative so no configuration is needed.
