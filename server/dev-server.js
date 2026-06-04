import 'dotenv/config'
import { createDevApiApp } from './createApp.js'

const PORT = process.env.API_PORT || 3001
const app = createDevApiApp()

app.listen(PORT, () => {
  console.log(`API jeisson.pro → http://localhost:${PORT}`)
})
