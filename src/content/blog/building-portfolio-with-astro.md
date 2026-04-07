---
title: "Building my portfolio with Astro"
description: "Why I chose Astro for my developer portfolio and how I set it up with content collections, a dark theme, and GitHub Pages deployment."
date: 2026-04-07
tags: ["tutorial", "astro", "web dev"]
---

When I decided to build a proper portfolio site, I had a few requirements: it had to be fast, content-driven, and something I'd actually maintain long-term.

## Why not Next.js?

Don't get me wrong — Next.js is fantastic for web apps. But for a content-heavy portfolio with a blog and daily notes, it felt like overkill. I didn't need server components, API routes, or a Node.js runtime. I needed a static site that loads instantly and lets me write in Markdown.

## Enter Astro

Astro checked every box:

- **Content collections** give me type-safe frontmatter and easy querying
- **Zero JS by default** means my pages are lightning fast
- **Markdown/MDX support** means I can write blog posts and notes in my editor
- **Component islands** let me add interactivity only where I need it

## The setup

The site structure is simple:

```
src/
  content/
    projects/    # .md files for each project
    blog/        # .md files for blog posts
    notes/       # .md files for daily notes
  pages/         # Astro page routes
  components/    # Reusable UI components
  layouts/       # Page layouts
  styles/        # Global CSS
```

Each content type has its own collection with a typed schema. Adding a new blog post is literally just creating a new `.md` file.

## What's next

I'll be adding more projects, writing about things I learn, and eventually hooking up a custom domain. For now, GitHub Pages does the job perfectly.
