# Active Orbit Inc — Company Website

The official website for [Active Orbit INC](https://activeorbita-web.vercel.app), built with Next.js and deployed on Vercel.

**Live site: [activeorbita-web.vercel.app](https://activeorbita-web.vercel.app)**

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) for styling
- [Supabase](https://supabase.com) for backend data
- [Resend](https://resend.com) for contact form email delivery
- [lucide-react](https://lucide.dev) icons

## Pages

- `/` — landing
- `/about` — company overview
- `/services` — service offerings
- `/products` — product catalog (sourced from `docs/product-catalog.md`)
- `/contact` — contact form

## Getting started

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Checks

```bash
npm run lint   # ESLint
npm run build  # production build
```

## Deployment

The site deploys to Vercel from the `main` branch of this repository. Environment variables for Supabase and Resend are configured in the Vercel project settings and are never committed.
