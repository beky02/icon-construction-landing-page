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
    site.ts             all copy, projects, stats — see "Projects" below
    ethiopia.ts         map outline + viewBox projection helper
  styles/
    design-system.css   vendored Industry design system — see below
    theme.css           brand token overrides
    app.css             page styles
```

Stylesheet order in `main.tsx` is load-bearing: the design system defines the
tokens, the theme retunes them, the page styles consume the result.

## Projects

Sections 3 and 4 both show projects, and they read from one array in
`src/data/site.ts` so they cannot drift apart:

- **§3 "Featured projects"** — `featuredProjects`, the entries flagged
  `featured: true`. The rich treatment: body copy and stat tiles. Keep this to
  about three; the tab strip is built for one row and wraps raggedly past four.
- **§4 "Our footprint"** — every project, on the map with a numbered key.

A project's `pins` array places it on the map. Usually one; the Assosa–Banbasi
corridor has two, so it contributes two markers that share its number and
select the same project. To add a project, add one entry — it appears on the
map automatically, and in §3 too if you flag it.

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

Copy, projects, map sites, impact figures and the footer contact block are all
real company data now. Three things are still outstanding:

- **Photography.** Every section renders drawn stand-ins rather than photographs.
  Each `Figure` carries a caption describing the shot that belongs in that slot
  (`photo` in `src/data/site.ts`); drop an `<img>` inside the same wrapper and it
  inherits the design system's duotone treatment.
- **The call-to-action buttons go nowhere.** "Start a Project" and "Contact"
  link to `#contact`, the section they already sit in. They need a real
  destination — a form, a `mailto:`, or a contact route.
- **Map pin placement.** `mapSites` coordinates are in the viewBox declared in
  `src/data/ethiopia.ts`, not latitude/longitude. The map is roughly
  equirectangular at ~67px per degree anchored on Addis Ababa at
  `(390.5, 408.7)` = 38.74°E, 9.03°N, so a town at `(lon, lat)` lands near
  `x = 390.5 + (lon - 38.74) × 67.2`, `y = 408.7 - (lat - 9.03) × 67.4`.

  Assosa and Bambasi check out against that. **Ura Woreda, Baro and Buldigilu
  have not been verified** — Ura Woreda in particular plots near 37.8°E, which
  is east of Benishangul-Gumuz. Worth confirming against the actual sites.
