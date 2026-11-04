# ScaleX Ads

Custom websites and Meta advertising for contractors and local service businesses. A responsive, buildless HTML/CSS/JavaScript site for GitHub Pages.

## Files

- `index.html` — page structure and default English copy.
- `styles.css` — responsive layouts, motion, and reduced-motion handling.
- `app.js` — Spanish copy, language and motion preferences, service tabs, native dialogs, and responsive concept previews.
- `assets/` — local WebP photography and SVG favicon.

Serve the repository root with a static web server to preview. GitHub Pages can serve the root directly; no package install or build is required.

## Content and behavior

The main offers are custom websites and Meta advertising for Facebook and Instagram. Scope, pricing, advertising budget, and ongoing support are discussed before work begins. The existing Calendly and social profile destinations are retained.

The FORM and FIELDWORK presentations are illustrative design concepts, with original AI-generated architectural and landscape imagery. They are explicitly labelled and must not be presented as completed client projects or campaign results. The site itself demonstrates the typography, responsive design, animation, and interactions.

English copy is read from the HTML once during initialization. Matching Spanish copy lives in `translations.es` in `app.js`. Keep translation keys aligned when editing. Language and optional motion preferences are stored locally when browser storage is available; the site also works when storage is blocked.

Decorative motion uses CSS transforms and one-shot IntersectionObserver reveals. Scroll handling is scheduled with requestAnimationFrame. There is no scroll interception or animation library. Visitors can pause decorative motion; operating-system reduced-motion preferences disable it automatically. A hidden browser tab pauses ongoing CSS animations.

Concept previews use a native modal dialog and a script-disabled, same-origin sandboxed iframe. Preview links remain within the illustrative page. Desktop/mobile controls change the actual iframe width. The full site remains usable without JavaScript, with the primary call and social links available and both service descriptions visible.

## Verification

JavaScript syntax, local asset paths, unique IDs, internal anchor destinations, and English/Spanish translation-key parity were checked. Browser QA covered desktop and narrow phone/tablet widths, language switching, native menu/dialog controls, concept images and internal anchors, mobile preview sizing, and service switching with decorative motion paused. Additional OS/browser combinations and actual lead/booking completion were not tested.
