# Eslam Ayman — Full-Stack Developer Portfolio

Modern responsive portfolio built with React, Vite, Tailwind CSS, Framer Motion, React Router, tsParticles, and Lucide/React Icons.

## Refactor highlights

- Single-page home experience with dedicated URL routes for every major section.
- Shared animated shell with route transitions, sticky navigation, scroll progress, scroll-to-top, particles, and theme persistence.
- Responsive navigation with active route state and animated mobile menu.
- Stronger project cards with filtering, hover motion, technology chips, source/live actions, and consistent spacing.
- Profile presentation with animated glow, orbit rings, particles, shine, and restrained 3D hover motion.
- Contact section refactored into reusable data-driven items and accessible CTA actions.
- Theme initialization is performed before React mounts to reduce light/dark flash.
- Particles are reduced/disabled when the user prefers reduced motion and run at a lower FPS for better performance.
- Removed unused GitHub stats component and stale hash navigation.
- Removed obsolete source comments and stale portfolio-domain references.

## Routes

- `/` — full portfolio landing page
- `/about` — hero + about
- `/skills` — technical skills
- `/projects` — selected projects
- `/experience` — development experience
- `/education` — education
- `/contact` — contact and CV actions

Unknown routes redirect to `/` and Vercel SPA rewrites are configured in `vercel.json`.

## Run locally

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
```
