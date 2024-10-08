import mongoose from 'mongoose'

const bookingSchema = new mongoose.Schema({
    customer: { type: mongoose.ObjectId, ref: 'Customer', required: true },
    class: { type: mongoose.ObjectId, ref: 'Class', required: true },
    status: { type: String, enum: ['confirmed', 'cancelled'], default: 'confirmed' }
})

const Booking = mongoose.model('Booking', bookingSchema) 

export { Booking }