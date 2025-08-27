import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://familiarchoice.com',
  integrations: [tailwind({ applyBaseStyles: false })],
});