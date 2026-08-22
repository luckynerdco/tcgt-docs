# TCGTracking Docs

Documentation site for [tcgt.help](https://tcgt.help), built with
[Starlight](https://starlight.astro.build) (Astro) and themed to match the
tcgt.help redesign — OKLCH single-blue accent (`#4f8ef7`), dark elevation off
`#1a1d23`, a ⌘K command palette, and a segmented-control / active-bar sidebar.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # outputs static site to ./dist
npm run preview  # serve the built site locally
```

## Project layout

| Path | What it is |
| --- | --- |
| `src/content/docs/` | Your guides. `.md` for prose, `.mdx` when a page uses components (Tabs, Steps, Cards). |
| `src/styles/tcgt.css` | **The theme.** All the color/type/command-bar styling lives here. |
| `astro.config.mjs` | Site title, sidebar structure, social links. |
| `public/` | Static assets (favicon, images). |

## Writing guides

- Prose-only page → `.md`.
- Page using `<Tabs>`, `<Steps>`, `<Card>`, etc. → **must be `.mdx`** and import
  the components at the top:
  ```mdx
  import { Steps } from '@astrojs/starlight/components';
  ```
- Add the page to the sidebar in `astro.config.mjs`.
- Asides work in plain `.md`: `:::note`, `:::tip`, `:::caution`, `:::danger`.

## Contribution workflow (the whole point)

1. Contributor edits/adds a Markdown file and opens a **pull request**.
2. You (or anyone) review and comment on the PR before it goes live.
3. Merge to `main` → GitHub Action builds and deploys to CT 102.

## Deploy to the homelab

`.github/workflows/deploy.yml` builds on every PR (so reviewers see it compiles)
and deploys **only on merge to `main`**. It rsyncs `dist/` to CT 102 over your
tailnet. Set these repo secrets:

| Secret | Value |
| --- | --- |
| `TS_AUTHKEY` | A Headscale/Tailscale auth key for the CI runner |
| `DEPLOY_HOST` | CT 102's tailnet IP/hostname |
| `DEPLOY_USER` | SSH user on CT 102 |
| `DEPLOY_SSH_KEY` | Private key authorized on CT 102 |

Point your existing Nginx server block's root at `/var/www/tcgt.help/` (the rsync
target), keep the Cloudflare Tunnel ingress rule you already use, and you're done.
Cloudflare terminates TLS, same as your other services — no Let's Encrypt on the
origin.

> If you'd rather not give CI access to the homelab, drop the `deploy` job and
> instead: `npm run build`, then upload `dist/` via Filebrowser at
> `files.tcgt.help`. The PR-review flow still works either way.

## Notes

- Fonts (Geist / Geist Mono) are bundled via `@fontsource-variable/*` — **no
  Google Fonts CDN**, so the build is fully self-contained (matches your
  vendored-assets preference).
- Search (⌘K) is Pagefind, built at compile time — no external service.
