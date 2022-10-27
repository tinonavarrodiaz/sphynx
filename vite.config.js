import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert';

import { qrcode } from 'vite-plugin-qrcode';
import removeConsole from 'vite-plugin-remove-console';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  server: { https: true },
  plugins: [
    react(),
    removeConsole(),
    qrcode(),
    viteStaticCopy({
      targets: [
        {
          src: 'php/**.*',
          dest: 'php',
        },
      ],
    }),
    mkcert(),
  ],
  // base: '/sphynx/',
});
