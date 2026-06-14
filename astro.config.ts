import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

import { profile } from './src/config/profile';

const siteUrl = process.env.SITE_URL ?? profile.seo.siteUrl;
const basePath = process.env.BASE_PATH ?? (process.env.NODE_ENV === 'production' ? '/personal-website/' : '/');

export default defineConfig({
  site: siteUrl,
  base: basePath,
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/admin/'),
    }),
  ],
});
