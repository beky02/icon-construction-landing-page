# Icon Construction

Marketing site for Icon Construction PLC — a single-page React app ported from
the Claude Design project `Icon Construction.dc.html`.

Vite · React 19 · TypeScript.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + production bundle into dist/
npm run lint
```

## Layout

```
src/
  main.tsx              entry; imports the three stylesheets in order
  App.tsx               section order for the page
  components/           pieces used by more than one section
    Corners.tsx         the four "+" registration marks
    Figure.tsx          drawn stand-in for a photograph
    Kicker.tsx          the "03 · Featured projects" section label
    Reveal.tsx          scroll-into-view fade
    SiteNav.tsx
    SiteFooter.tsx
  sections/             one file per band of the page, top to bottom
  data/
    site.ts             all copy, projects, map sites, stats
    ethiopia.ts         map outline + viewBox projection helper
  styles/
    design-system.css   vendored Industry design system — see below
    theme.css           brand token overrides
    app.css             page styles
```

Stylesheet order in `main.tsx` is load-bearing: the design system defines the
tokens, the theme retunes them, the page styles consume the result.

## The design system

`src/styles/design-system.css` is vendored verbatim from the Claude Design
project (`_ds/industry-2c04cce6-36dc-4f77-b9e2-eb9893960a0c/styles.css`), with
one change: the Google Fonts `@import` was removed and the two faces are
preloaded from `index.html` instead, so the fonts do not wait on a second
stylesheet hop.

Treat that file as upstream — retune the brand in `theme.css` rather than
editing it, so the design system can be re-synced. Colours, type, spacing and
shadows all come from its tokens; the readme in the design project explains the
rules the system expects (`.blueprint` + corner marks on framed objects,
`.duotone` on every photograph, no hard-coded hex values).

## Differences from the design file

Three deliberate departures, each because the design file's approach does not
survive the move to a real app:

- **Scroll reveals** use an IntersectionObserver (`Reveal.tsx`) instead of CSS
  `animation-timeline: view()`, which only Chromium ships. Same effect
  everywhere, and it respects `prefers-reduced-motion`.
- **Project tabs** are a real ARIA tablist with arrow-key navigation and roving
  tabindex. The design file used plain buttons.
- **Map markers** are keyboard-reachable through the city-name buttons; the SVG
  pins are mouse affordances only, so each city is one tab stop rather than two.

Two things were kept faithful even though they look like defects:

- Figures clip their own corner marks (`.figure.duotone { overflow: hidden }` in
  `app.css`) because the design file overrides the design system that way.
  Delete that rule to let the marks sit proud of the frame.
- Grids built from a 1px gap over a tinted container — services, themes, impact
  — show the tint in any cell an odd item count leaves empty. At the 1280px
  design width the rows fill exactly; it only shows at in-between widths.

## Before this goes live

The page carries the placeholders the design was reviewed with. Replace in
`src/data/site.ts` and `src/components/SiteFooter.tsx`:

- impact figures (`40+`, `12+`, `180+`, `25+`, `96+ KM`) — the page says so in
  print, under the impact grid
- project names, locations and statistics
- the office address, phone numbers and `@iconconstruction.example` emails
- every `Figure` renders a caption describing the photograph that belongs in
  that slot; swap the drawn stand-in for an `<img>` inside the same wrapper and
  it inherits the duotone treatment

The "Start a Project" and "Contact" buttons currently link to `#contact`, which
is the section they sit in — they need a real destination (a form, a `mailto:`,
or a contact route).
