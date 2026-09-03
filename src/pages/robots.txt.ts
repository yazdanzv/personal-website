import type { APIRoute } from 'astro';

import { profile } from '../config/profile';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = new URL(`${import.meta.env.BASE_URL}sitemap-index.xml`, site ?? profile.seo.siteUrl).href;

  return new Response(
    `User-agent: *
Allow: /
Disallow: ${import.meta.env.BASE_URL}admin/
Sitemap: ${sitemapUrl}
`,
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    },
  );
};
