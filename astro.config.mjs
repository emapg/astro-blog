import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://your-blog-domain.com',
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    react(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true
    }
  },
  experimental: {
    viewTransitions: true
  }
});