import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = __dirname

const apiTarget = process.env.API_URL || 'http://localhost:3001'

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: 'cv-dev', dest: '.' },
        { src: 'cv-creativo', dest: '.' },
      ],
    }),
  ],
  server: {
    port: 5173,
    open: true,
    proxy: {
      '/api': { target: apiTarget, changeOrigin: true },
      '/cv-dev': { target: apiTarget, changeOrigin: true },
      '/cv-creativo': { target: apiTarget, changeOrigin: true },
    },
  },
  preview: {
    port: 4173,
    proxy: {
      '/api': { target: apiTarget, changeOrigin: true },
      '/cv-dev': { target: apiTarget, changeOrigin: true },
      '/cv-creativo': { target: apiTarget, changeOrigin: true },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('swiper')) return 'vendor-swiper'
          if (id.includes('framer-motion')) return 'vendor-motion'
          if (
            id.includes('react-router') ||
            id.includes('react-dom') ||
            id.includes('/react/')
          ) {
            return 'vendor-react'
          }
        },
      },
    },
  },
})
