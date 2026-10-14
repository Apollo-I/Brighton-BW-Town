# Brighton Community Development Partnership — website

A multipage static website for the **proposed** Brighton Community Development
Partnership in Brighton, Alabama. Built with Next.js 15 (static export), no
database, no admin login, no tracking.

> This is a community partnership project website. It is **not** an official
> City of Brighton website, and the partnership must not be presented as
> approved or established until that status is documented.

## Run it

```bash
npm install
npm run dev        # local preview at http://localhost:3000
npm run build      # production export into out/ (every route is real HTML)
npm run typecheck
```

> **Note:** `npm run build` overwrites the dev server's shared `.next` working
> directory. If a dev server was running during a build, restart it after
> clearing `.next` (`rm -rf .next && npm run dev`) — otherwise pages keep
> referencing dev CSS paths that 404 and the preview renders unstyled.

The export in `out/` can be hosted on any static host. Unknown paths serve the
designed `out/404.html` (Cloudflare Pages, Netlify, and GitHub Pages all do
this automatically).

### Deploying on Cloudflare Workers

The repo ships a `wrangler.jsonc` that publishes `./out` as static Worker
assets — no OpenNext/SSR adapter (this site is a static export; OpenNext
cannot package one and fails looking for `.next/standalone`). In Workers
Builds (Git integration) set the build command to `npm run build` and the
deploy command to `npx wrangler deploy`; unknown paths serve `out/404.html`
via `not_found_handling`.

## Routes

`/` · `/projects/` · `/projects/[slug]/` · `/leadership/` · `/partnership/` ·
`/funding/` · `/impact/` · `/resources/` · `/get-involved/` · `/privacy/`

## Content architecture (section 14 of the brief)

All public content lives in structured records under `src/content/`. Pages
never hardcode facts; they query the public helpers in `src/content/index.ts`,
which filter every record on `publish`.

| Record type | File | Publish switch |
| --- | --- | --- |
| Person | `src/content/people.ts` | `publish` |
| Project | `src/content/projects.ts` | `publish` |
| Program area (not a project) | `src/content/projects.ts` | always public, labeled “Under consideration” |
| Funding record | `src/content/funding.ts` | `publish` |
| Document | `src/content/documents.ts` | `publish` |
| Update | `src/content/documents.ts` | `publish` |

### Editorial rules enforced by the data layer

- **Three evidence states** on every record: `verified-public-fact`,
  `planning-proposal`, `awaiting-confirmation`.
- **`publish: false` is the research register.** Unresolved council research,
  the reported state blight-removal allocation, and any unconfirmed record
  stay in source data and can never reach a public page.
- **Public office ≠ partnership role.** Separate fields
  (`publicOffice` / `partnershipRole` / `participationConfirmed`).
- **Unknown money is `null`, never `0`.** Null renders as “Figures being
  confirmed”. Commitments, received cash, in-kind, and allocations are
  separate fields.
- **`verifiedAt` is the date facts were checked** — set it by hand; it is
  never derived from “today”.
- **Portraits** render only when `portrait: <url>` and
  `portraitPermissionStatus: 'approved'`; otherwise a dignified initials
  placeholder appears.

### Publishing the first Brighton project

Add a record to `projects` in `src/content/projects.ts` with `publish: true`
and a unique `slug`. The detail page, home-page card, and SEO metadata are
generated automatically from the template in
`src/app/projects/[slug]/page.tsx`. Do not assign `Funded` or `In Progress`
without evidence, and leave unknown figures `null`.

### Activating the Get Involved form

The inquiry form in `src/components/PreviewInquiryForm.tsx` is intentionally
non-submitting. Point it at a real, monitored destination and update the
`formActive` flag on `src/app/get-involved/page.tsx` together with the privacy
page — only ever show a success state when delivery is real.

## Accessibility and design

- Palette: navy `#102B3F`, green `#25634F`, ivory `#F6F4ED`, gold `#C8A45D`,
  text `#20313A`. Gold used sparingly; `--gold-ink` keeps text contrast
  passing on ivory.
- Manrope (headings) + Open Sans (body) via Google Fonts with full system-font
  fallbacks if fonts cannot load.
- Skip link, landmarks, one `h1` per page, visible focus rings, 44–48px tap
  targets, keyboard-operable mobile menu, `prefers-reduced-motion` support,
  and responsive tables with horizontal scroll instead of page overflow.
- Hero/location art is abstract and map-inspired; the county graphic is a
  labeled **illustrative diagram**, not an official map or photograph.

## Before public launch

See the “content still needed” list in the project handoff. Nothing on this
site may be upgraded from “proposed” to “confirmed” without the supporting
document on file in `src/content/documents.ts`.
