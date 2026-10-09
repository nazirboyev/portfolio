import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataFilePath = path.resolve(__dirname, 'data', 'portfolio-data.json')

function dataApiPlugin() {
  return {
    name: 'portfolio-data-api',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        // GET /api/data
        if (req.url === '/api/data' && req.method === 'GET') {
          res.setHeader('Content-Type', 'application/json')
          try {
            if (!fs.existsSync(dataFilePath)) {
              fs.mkdirSync(path.dirname(dataFilePath), { recursive: true })
              fs.writeFileSync(dataFilePath, JSON.stringify({ projects: [], avatar: '', messages: [] }), 'utf-8')
            }
            const data = fs.readFileSync(dataFilePath, 'utf-8')
            res.end(data)
          } catch (err) {
            res.statusCode = 500
            res.end(JSON.stringify({ error: err.message }))
          }
          return
        }

        // POST /api/save
        if (req.url === '/api/save' && req.method === 'POST') {
          let body = ''
          req.on('data', chunk => { body += chunk })
          req.on('end', () => {
            res.setHeader('Content-Type', 'application/json')
            try {
              const parsed = JSON.parse(body)
              fs.writeFileSync(dataFilePath, JSON.stringify(parsed, null, 2), 'utf-8')
              res.end(JSON.stringify({ success: true, message: 'Ma\'lumotlar diskka saqlandi' }))
            } catch (err) {
              res.statusCode = 500
              res.end(JSON.stringify({ error: err.message }))
            }
          })
          return
        }

        next()
      })
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dataApiPlugin()],
  server: {
    host: true, // Telefonda ham ochish uchun tarmoqqa ruxsat berish
    port: 5173
  }
})
