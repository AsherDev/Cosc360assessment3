import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

import authHandler from './handler/auth.handler'

import connectDB from './util/connectDB'

dotenv.config()


connectDB()

const app: Express = express()
const port = process.env.PORT
app.use(express.json())

app.use('/api/auth', authHandler)

mongoose.connection.once('connected', () => {
    console.log('[server]: Connected to MongoDB.')
    app.listen(port, () => {
        console.log(`[server]: Server is running at http://localhost:${port}`)
    })
})

export default app