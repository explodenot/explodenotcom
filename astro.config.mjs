import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import legacy from '@vitejs/plugin-legacy';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      legacy({
        targets: ['defaults', 'not IE 11', 'chrome 58', 'firefox 57', 'safari 11', 'edge 16'],
      }),
    ],
  },
});
