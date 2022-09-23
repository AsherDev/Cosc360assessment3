import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

import authHandler from './handler/auth.handler'

import connectDB from './util/connectDB'

dotenv.config()


connectDB()

const app: Express = express()
app.use('/auth', authHandler)

const port = process.env.PORT
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send('hello world...')
})

mongoose.connection.once('connected', () => {
    console.log('[server]: Connected to MongoDB.')
    app.listen(port, () => {
        console.log(`[server]: Server is running at http://localhost:${port}`)
    })
})