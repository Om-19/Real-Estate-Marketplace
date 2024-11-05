import express from 'express'
import mongoose, { mongo } from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();
import userRouter from './routes/user.route.js'

const app = express()
mongoose.connect(process.env.MONGO)
.then(() => {
    console.log('Connected to DB')
})
.catch((err) => {
    console.log(err)
})

app.listen(3000, () => {
    console.log('Server is running...')
})

app.use("/api/user", userRouter) 