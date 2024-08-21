import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

app.use(express.json()) 

app.get('/', (request, response) => response.send({ info: 'GymFlow API' }))

export default app