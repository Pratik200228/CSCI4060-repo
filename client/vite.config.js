import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'redirect-root-to-login',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/' || req.url === '/index.html') {
            res.writeHead(302, { Location: '/login.html' })
            res.end()
            return
          }
          next()
        })
      },
    },
  ],
  build: {
    rollupOptions: {
      input: 'login.html',
    },
  },
  server: {
    open: '/login.html',
  },
})
