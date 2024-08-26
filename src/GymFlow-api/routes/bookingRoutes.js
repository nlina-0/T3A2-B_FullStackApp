import express from 'express'
import { Booking } from '../models/bookingModel.js'
import { authenticate } from '../middleware/userAuth.js'

const bookingRoutes = express.Router()

bookingRoutes.use(authenticate) // authentication required on all booking routes

// Create new booking
bookingRoutes.post('/', async (req, res) => {
    try {
        const newBooking =  await Booking.create(req.body)
        res.status(201).send({ message: "Booking created successfully", newBooking })
    } catch (err) {
        res.status(500).json({ message: error.message })
    }
})

// Update booking
bookingRoutes.put('/:id', async (req, res) => {
    try {
        const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, req.body, {returnDocument: 'after'})
        res.status(200).json({ message: "Booking updated successfully" }, updatedBooking)
    } catch (err) {
        res.status(404).json({ message: "Booking not found" })
    }
})

export default bookingRoutes