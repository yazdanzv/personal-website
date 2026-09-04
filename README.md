# Yazdan Zandiye Vakili Portfolio

Research-led personal portfolio built with Astro, Tailwind CSS, and TypeScript.

## Features

- Restrained editorial design built around Yazdan's research and engineering work
- System-aware light and dark themes with a manual theme switch
- Authentic professional photography and responsive layouts
- A primary publication case study backed by public venue, DOI, and citation evidence
- Concise engineering notes focused on enterprise modernization and distributed systems
- SEO metadata, Open Graph, Twitter cards, structured data, sitemap, and robots.txt
- Current software-engineering résumé download
- Contact form with persistent message storage via Supabase
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

The hero button points to `/cv.pdf`, which is the current software-engineering résumé in `public/cv.pdf`.

## Private Inbox Setup

The contact form stores submissions in Supabase, and the private inbox lives at `/admin/messages`.

1. Create a Supabase project.
2. Run the SQL in `supabase/schema.sql` in the Supabase SQL editor.
3. Create and confirm an email/password Supabase Auth user with the admin email you want to use.
4. Set these public build variables in your local environment and GitHub repository variables:
   - `PUBLIC_SUPABASE_URL` (`https://cjtjvhtubrdomvjikcfa.supabase.co` for the current project)
   - `PUBLIC_SUPABASE_ANON_KEY`
5. Open `/admin/messages`, sign in with the admin account, and review the stored messages.

The site will still build without the variables, but the contact form will show a setup notice until Supabase is configured. Never commit a service-role key or copy an anon key from another project.

## GitHub Pages Deployment

The repository includes `.github/workflows/deploy.yml` using Astro's official GitHub Pages action.

If you deploy this as a project site instead of a user site, update the site URL in `src/config/profile.ts` and the `site`/`base` configuration in `astro.config.ts`.

For a standard user site on GitHub Pages, the current defaults are already aligned with `https://yazdanzv.github.io`.
