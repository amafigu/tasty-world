import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'


const envFile =
  process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development'
dotenv.config({ path: envFile })
const app = express()
app.use(
  cors({
    origin: process.env.API_URL
  })
)
app.use(express.json())

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at PORT: ${process.env.PORT}`)
  })
}

export default app