import express from 'express'
import dotenv from 'dotenv'
import route from './routes'
import cors from 'cors'
import mongoose from 'mongoose'
import path from 'path'

dotenv.config()

const app = express()

mongoose.connect(process.env.DATABASE_CONNECTION)

app.use(express.json())
app.use(cors())
app.use('/', route)

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))

const { PORT } = process.env

app.listen(PORT, () => {
  console.log(`API Running on Port: ${PORT}`)
})

export default app
