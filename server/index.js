import 'dotenv/config'
import { createApp } from './createApp.js'

const PORT = process.env.PORT || 3000
const app = createApp()

app.listen(PORT, () => {
  console.log(`jeisson.pro → http://localhost:${PORT}`)
})
