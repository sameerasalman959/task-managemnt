import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import config from './config'
import cors from 'cors'
import userRouter from './src/user.router'
import { connect } from './utils/db'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended:true }))
app.use(morgan(dev))

app.use('/api/user', userRouter)
export const start = async () => {
  try {
    await connect()
    app.listen(config.port, () => {

    })
  }
}