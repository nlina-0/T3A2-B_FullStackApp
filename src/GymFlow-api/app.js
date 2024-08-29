import express from 'express'
import cors from 'cors'
import { startConnection } from './config/db.js'
import classRoutes from './routes/classRoutes.js'
import customerRoutes from './routes/customerRoutes.js'
import loginRoutes from './routes/loginRoutes.js'
import userRoutes from './routes/userRoutes.js'
import instructorRoutes from './routes/instructorRoute.js'
import bookingRoutes from './routes/bookingRoutes.js'

const app = express()

// startConnection() 

// Middleware 

app.use(cors())

app.use(express.json()) 

app.get('/', (request, response) => response.send({ info: "GymFlow API" }))

// Routers
app.use('/customers', customerRoutes)
app.use('/classes', classRoutes)
app.use('/login', loginRoutes )
app.use('/users', userRoutes)
app.use('/instructors', instructorRoutes)
app.use('/bookings', bookingRoutes)

export default app