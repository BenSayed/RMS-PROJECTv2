// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
    proxy: {
      '/api': {
        target: 'http://flavorhaven.runasp.net',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/orderHub': {
        target: 'http://flavorhaven.runasp.net',
        ws: true,
        changeOrigin: true,
      },
    },
  },
})
