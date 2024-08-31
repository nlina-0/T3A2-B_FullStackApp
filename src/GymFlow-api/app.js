import express from 'express'
import cors from 'cors'
import { startConnection } from './config/db.js'
import classRoutes from './routes/classRoutes.js'
import customerRoutes from './routes/customerRoutes.js'
import loginRoutes from './routes/loginRoutes.js'
import userRoutes from './routes/userRoutes.js'
import instructorRoutes from './routes/instructorRoute.js'
import bookingRoutes from './routes/bookingRoutes.js'
import classTypeRoutes from './routes/classTypeRoutes.js'

const app = express()

startConnection()

// Middleware 

app.use(cors({
    origin: 'https://main--gymflow101.netlify.app', // replace with your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
}))

app.use(express.json()) 

app.get('/', (request, response) => response.send({ info: "GymFlow API" }))

// Routers
app.use('/customers', customerRoutes)
app.use('/classes', classRoutes)
app.use('/classtypes', classTypeRoutes)
app.use('/login', loginRoutes )
app.use('/users', userRoutes)
app.use('/instructors', instructorRoutes)
app.use('/bookings', bookingRoutes)

export default app