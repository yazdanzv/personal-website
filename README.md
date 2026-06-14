# Yazdan Zandiye Vakili Portfolio

Premium personal portfolio site built with Astro, Tailwind CSS v4, and TypeScript.

## Features

- Dark, AI-lab inspired visual design
- Animated particle network and moving grid background
- Glassmorphism cards and premium hover states
- SEO metadata, Open Graph, Twitter cards, structured data, sitemap, and robots.txt
- Generated CV download endpoint
- Floating chat widget with persistent message storage via Supabase
- Private inbox page for reviewing submitted messages
- GitHub Pages deployment workflow

## Content Source

All personal information lives in `src/config/profile.ts`.

Update that file first when changing bio text, social links, education, experience, publications, or skills.

## Local Development

```bash
npm install
npm run dev
```

Then open the local Astro dev server shown in the terminal.

## Build

```bash
npm run build
```

## CV Download

The hero button points to `/cv.pdf`, which is the uploaded academic CV in `public/cv.pdf`.

## Private Inbox Setup

The floating chat widget stores submissions in Supabase, and the private inbox lives at `/admin/messages`.

1. Create a Supabase project.
2. Run the SQL in `supabase/schema.sql` in the Supabase SQL editor.
3. Create and confirm an email/password Supabase Auth user with the admin email you want to use.
4. Set these public build variables in your local environment and GitHub repository variables:
   - `PUBLIC_SUPABASE_URL`
   - `PUBLIC_SUPABASE_ANON_KEY`
5. Open `/admin/messages`, sign in with the admin account, and review the stored messages.

The site will still build without the variables, but the chat widget will show a setup notice until Supabase is configured.

## GitHub Pages Deployment

The repository includes `.github/workflows/deploy.yml` using Astro's official GitHub Pages action.

If you deploy this as a project site instead of a user site, update the site URL in `src/config/profile.ts` and the `site`/`base` configuration in `astro.config.ts`.

For a standard user site on GitHub Pages, the current defaults are already aligned with `https://yazdanzv.github.io`.
