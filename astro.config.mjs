// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://pxmpxmpurin.github.io/portfolio/',
  base: '/portfolio/',
  vite: {
    plugins: [tailwindcss()],
  },
});
