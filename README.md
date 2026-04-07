# tejansree21.github.io

Personal portfolio & digital garden built with [Astro](https://astro.build).

## 🚀 Quick Start

```bash
npm install
npm run dev        # Start dev server at localhost:4321
npm run build      # Build for production
npm run preview    # Preview production build
```

## 📁 Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── Header.astro
│   ├── Footer.astro
│   └── ProjectCard.astro
├── content/           # Content collections (Markdown)
│   ├── projects/      # Project write-ups
│   ├── blog/          # Blog posts
│   └── notes/         # Daily notes / digital garden
├── layouts/           # Page layouts
│   └── BaseLayout.astro
├── pages/             # File-based routing
│   ├── index.astro
│   ├── resume.astro
│   ├── contact.astro
│   ├── projects/
│   ├── blog/
│   └── notes/
└── styles/            # Global CSS
    └── global.css
```

## ✍️ Adding Content

### New project
Create `src/content/projects/my-project.md`:
```md
---
title: "My New Project"
description: "A short description of the project."
tags: ["React", "TypeScript"]
featured: false
github: "https://github.com/tejansree21/my-project"
date: 2026-04-07
---

Write about your project here...
```

### New blog post
Create `src/content/blog/my-post.md`:
```md
---
title: "My Blog Post"
description: "What this post is about."
date: 2026-04-07
tags: ["tutorial"]
---

Write your post here...
```

### New daily note
Create `src/content/notes/2026-04-07.md`:
```md
---
title: "Quick summary of what I learned today."
date: 2026-04-07
tags: ["til"]
---

Write your note here...
```

## 🌐 Deployment

Automatically deploys to GitHub Pages via GitHub Actions on every push to `main`.

## 📝 License

MIT
