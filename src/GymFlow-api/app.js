import express from 'express'
import cors from 'cors'
import customerRoutes from './routes/customerRoutes.js'
import { startConnection } from './config/db.js'

const app = express()

startConnection()

// Middleware 

app.use(cors())

app.use(express.json()) 

app.get('/', (request, response) => response.send({ info: "GymFlow API" }))

// Routers
app.use('/customers', customerRoutes)

export default app