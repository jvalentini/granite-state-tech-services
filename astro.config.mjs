import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://granitestatetechservices.com',
  output: 'static',
  integrations: [
    sitemap()
  ],
  build: {
    format: 'directory'
  }
});
