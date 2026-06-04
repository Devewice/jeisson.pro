import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const dist = path.join(root, 'dist')
const PORT = process.env.PORT || 3000

const app = express()

app.use('/cv-dev', express.static(path.join(root, 'cv-dev')))
app.use('/cv-creativo', express.static(path.join(root, 'cv-creativo')))
app.use(express.static(dist))

app.get('/{*splat}', (_req, res) => {
  res.sendFile(path.join(dist, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`jeisson.pro → http://localhost:${PORT}`)
})
