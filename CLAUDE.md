# The Slow Dispatch — Agent Guide

## Project Overview

Static blog built with Astro 5. Content is written as Markdown files using content collections. Deployed via GitHub → Netlify.

## Repository

- **GitHub:** https://github.com/Netsoft24/B-Personal-Blog
- **Branch:** `master`

## Tech Stack

- **Framework:** Astro 5 (static output, no SSR adapter)
- **Styling:** Scoped `<style>` blocks per component/page + `src/styles/global.css` for shared tokens
- **Content:** Markdown files in `src/content/posts/` with Zod schema in `src/content/config.ts`
- **Fonts:** Google Fonts (Playfair Display, Inter, JetBrains Mono)

## Deployment

- **Host:** Netlify
- **Config file:** `netlify.toml` (build command and publish dir are defined here)
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Deploys automatically** on push to `master`

To deploy manually or trigger a redeploy, push to `master`:
```
git add -A && git commit -m "your message" && git push origin master
```

## Key Files

| File | Purpose |
|------|---------|
| `src/styles/global.css` | CSS reset, design tokens, nav, footer styles |
| `src/layouts/BaseLayout.astro` | HTML shell shared by all pages |
| `src/layouts/BlogPostLayout.astro` | Article layout with hero, toolbar, tags, author card |
| `src/content/config.ts` | Zod schema defining post frontmatter |
| `src/pages/index.astro` | Homepage — queries content collection, renders post grid |
| `src/pages/posts/[...slug].astro` | Dynamic route for blog posts |
| `DESIGN_GUIDELINES.md` | Visual design system reference (tokens, spacing, typography) |

## Adding a New Post

1. Create a `.md` file in `src/content/posts/`
2. Include all frontmatter fields defined in `src/content/config.ts` (title, titleHtml, subtitle, category, date, readTime, thumbnail, heroImage, tags, author)
3. Push to `master` — Netlify will build and deploy automatically

## Code Blocks in Posts

Code blocks use raw HTML (`<div class="code-block">`) inside Markdown — not fenced code blocks. Avoid blank lines inside `<pre>` tags as Markdown will inject `<p>` tags.

## Design System

Read `DESIGN_GUIDELINES.md` before making any visual changes. It documents the 8-point grid, color tokens, typography scale, component specs, and responsive breakpoint (720px).
