import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sirv from 'sirv'
import { viteStaticCopy } from 'vite-plugin-static-copy'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = __dirname

function serveCvStatic() {
  const mount = (server, dir, urlPath) => {
    server.middlewares.use(
      urlPath,
      sirv(path.join(root, dir), { dev: true, single: false })
    )
  }

  return {
    name: 'serve-cv-templates',
    configureServer(server) {
      mount(server, 'cv-dev', '/cv-dev')
      mount(server, 'cv-creativo', '/cv-creativo')
    },
    configurePreviewServer(server) {
      mount(server, 'cv-dev', '/cv-dev')
      mount(server, 'cv-creativo', '/cv-creativo')
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    serveCvStatic(),
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
  },
  preview: {
    port: 4173,
  },
})
