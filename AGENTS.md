<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# shongbadpotro

Bengali-language news reader (Next.js App Router) that renders BBC Bangla articles from a public JSON API. Single package; no monorepo, tests, CI, or env vars.

## Commands

- `npm run dev` — dev server on :3000 (Turbopack).
- `npm run build` — production build. **Requires network**: `/` is statically prerendered and fetches the external API at build time, so home content only updates after a rebuild.
- `npx tsc --noEmit` — typecheck (no `typecheck` script).
- `npm run lint` — ESLint over the repo. It currently fails on `src/app/newsDetails/[newsid]/page.tsx:46` (`@typescript-eslint/no-explicit-any`), so don't assume a clean baseline.
- No test runner exists; verify with `tsc` and a build. Treat lint as a diff check against the known failure, not a gate.

## Data and routing

- All data comes from `https://news-api-v2.vercel.app/api/...`, fetched directly in async Server Components. No route handlers, DB, auth, or env config.
- Responses are `{ data: ... }` and untyped upstream; hand-written shapes live in `src/types/HomeDataType.tsx`. The home page assumes `sections[0]` exists, filters to `type === "article"`, and drops empty sections; lists filter out `isLive` items.
- `src/app/category/[categoryId]` receives a category **slug**, while `src/app/newsDetails/[newsid]` receives an article id. Link paths are case-sensitive (`newsDetails`).
- Next 16 route props are async (`await params`); `LayoutProps<"/">` is a global generated type, not an import.
- Article detail data is deeply nested: summary at `description.blocks[0].model.blocks[0].model.text`, then `body[]` blocks typed `text` / `subheading` / `image`. Fields can be absent, so guard new accesses (`body?.map`).

## Styling

- Tailwind v4 + daisyUI v5 via PostCSS; there is no `tailwind.config.*`. Theme tokens live in `src/app/globals.css` under `@theme` — e.g. `--color-brand: #c60201` enables `text-brand` / `bg-brand` / `border-brand`.
- UI copy, `bn-BD` date formatting, and the Noto Serif Bengali font are intentional; keep new user-facing text in Bengali.
- `--font-oswald-next` is misnamed (it holds Quicksand) and is mapped to `--font-primaryEng`; rename both sides together.
- `next/image` only whitelists `ichef.bbci.co.uk`; add new remote hosts to `images.remotePatterns` in `next.config.ts`. Detail-page body images intentionally use plain `<img>`, so that lint warning is expected.
- React Compiler is enabled (`reactCompiler: true` plus `babel-plugin-react-compiler`); no separate Babel config.

## Notes

- `CLAUDE.md` just imports this file.
- Keep the `BEGIN:nextjs-agent-rules` block above — `next dev` re-adds it if removed. For unfamiliar Next APIs, read the bundled docs in `node_modules/next/dist/docs/`; this is Next 16, not the version in your training data.
