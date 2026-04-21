# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Next.js dev server.
- `npm run build` — production build (Next.js 15).
- `npm start` — run the production build.
- `npm run lint` — run `next lint`.

No test runner is configured in this repo.

## Architecture

This is a small personal blog ("Sher 的博客" / "Teamo 博客") built with the **Next.js 15 App Router**, React 19, and TypeScript. The rendering model is effectively static: pages are server components that read from an in-memory content source and `generateStaticParams` is used for post routes.

Key pieces to know before editing:

- **Content source — `lib/posts.ts`**: All blog posts live as a hand-authored `POSTS: Post[]` array with `slug`, `title`, `date`, `tags`, `excerpt`, and pre-rendered `contentHTML`. There is no MDX / filesystem / CMS pipeline — adding a post means adding an entry to this array. `getAllPosts()` returns posts sorted by `date` descending; `getPostBySlug()` does a linear find.
- **Routing — `app/`**:
  - `app/page.tsx` renders the home page (hero + post list from `getAllPosts()`).
  - `app/posts/[slug]/page.tsx` is a dynamic server component. `params` is a `Promise` (Next 15 convention) and must be `await`ed. It exports `generateStaticParams` (iterating `POSTS`) and `generateMetadata`, and injects `post.contentHTML` via `dangerouslySetInnerHTML` — post HTML in `lib/posts.ts` is therefore trusted input.
  - `app/about/page.tsx` is a static page.
- **Layout & theming — `app/layout.tsx` + `app/components/`**: `RootLayout` wraps every page with `Header` / `Footer` and injects `ThemeScript` in `<head>`. `ThemeScript` is a server-rendered inline script that reads `localStorage.theme` and sets `document.documentElement.dataset.theme` *before* hydration to avoid a flash. `ThemeToggle` is the only `'use client'` component and keeps `data-theme` in sync with `localStorage`. All styling is CSS variables driven by `[data-theme='light'|'dark']` selectors in `app/globals.css`.
- **Path alias**: `tsconfig.json` maps `@/*` to repo root, so imports use `@/lib/posts` rather than relative paths.

## Conventions

- When adding a post, pre-render the body to HTML and store it inline in `lib/posts.ts` (the renderer does not sanitize or transform markdown).
- Keep new pages as server components by default; only opt into `'use client'` when a component needs browser APIs (as `ThemeToggle` does for `localStorage`).
- Dynamic route handlers must treat `params` as a `Promise<...>` and `await` it — matches the Next 15 App Router signature already used in `app/posts/[slug]/page.tsx`.
