// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  vite: {
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          if (
            warning.code === 'UNUSED_EXTERNAL_IMPORT' &&
            warning.exporter === 'tinacms/dist/client'
          ) {
            return;
          }
          warn(warning);
        },
      },
    },
  },
});
