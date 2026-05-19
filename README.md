# Oluwatobi Akinola — Portfolio

Personal portfolio website for Oluwatobi Akinola, a Full Stack Engineer specialising in production-grade Node.js/TypeScript backends, cloud-native architectures (AWS & Azure), and responsive React interfaces across fintech, healthtech, and SaaS.

**Live site:** [oluwatobiakinola-v1.onrender.com](https://oluwatobiakinola-v1.onrender.com)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS |
| Routing | React Router v6 |
| Charts | Recharts |
| Icons | React Icons |
| Notifications | React Hot Toast |
| SEO | React Helmet |

---

## Project Structure

```
src/
├── components/
│   ├── dashboard/       # Section components (Hero, About, Experience, Projects, etc.)
│   └── shared/          # Reusable UI (Button, ProjectCard, Modal, TypewriterEffect, etc.)
├── context/             # Global app state (theme, appInfo)
├── data/
│   └── data.json        # All portfolio content (title, work, projects, about, certifications)
├── hooks/               # Custom hooks (useAppContext, intersectionObserver, useLogout)
├── layout/              # AppLayout, OG meta tags
└── pages/               # Dashboard (home), Projects
```

All portfolio content — work history, projects, skills, certifications, and bio — lives in `src/data/data.json`. Update that file to change what's displayed on the site.

---

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Type-check and build for production
npm run build

# Preview the production build
npm run preview

# Lint
npm run lint
```

---

## Updating Content

Edit [src/data/data.json](src/data/data.json) to update:

- **`title`** — Hero headline
- **`workDetails`** — Work experience entries
- **`projects`** — Featured projects (shown on the homepage)
- **`moreProjects`** — Additional projects
- **`aboutMe`** — Bio paragraphs, technologies list, and activity updates
- **`certifications`** — Certifications with links and thumbnails
- **`whatNextOpenStatus`** — Availability/contact messaging variants

---

## License

This project is personal and not open for reuse or redistribution.
