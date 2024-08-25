import express from 'express'
import cors from 'cors'
import classRoutes from './routes/classRoutes.js'
import customerRoutes from './routes/customerRoutes.js'
import { startConnection } from './config/db.js'
import loginRoutes from './routes/loginRoutes.js'
import userRoutes from './routes/userRoutes.js'

const app = express()

startConnection()

// Middleware 

app.use(cors())

app.use(express.json()) 

app.get('/', (request, response) => response.send({ info: "GymFlow API" }))

// Routers
app.use('/customers', customerRoutes)
app.use('/classes', classRoutes)
app.use('/login', loginRoutes )
app.use('/users', userRoutes)

export default app