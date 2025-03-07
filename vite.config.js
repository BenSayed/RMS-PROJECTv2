import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['axios']
  } ,
  server: {
    proxy: {
      '/api': {
        target: 'http://flavorhaven.runasp.net',
        changeOrigin: true,
        secure: false,
      }
    }
  }

});