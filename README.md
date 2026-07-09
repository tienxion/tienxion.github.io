# arnav blog

A minimal Astro blog based on `astro-erudite`, trimmed to a home page and blog.

## Routes

- `/` - personal home page
- `/blog` - blog index
- `/blog/[slug]` - individual posts

The project still includes RSS, sitemap, robots.txt, and a 404 page for normal
site behavior, but there are no public projects, authors, or tag pages.

## Commands

```bash
npm install
npm run dev
npm run build
```

## Editing

- Home page: `src/pages/index.astro`
- Site title, nav, and social links: `src/consts.ts`
- Blog posts: `src/content/blog/*.md`

Blog post frontmatter:

```yaml
---
title: "Post title"
description: "Short summary for metadata and the blog index."
date: 2026-07-08
tags:
  - notes
---
```
