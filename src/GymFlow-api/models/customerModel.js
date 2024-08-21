import mongoose from 'mongoose'

const customerSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']},
    phone: { type: String, required: true, unique: true },
    bookings: [{ type: mongoose.ObjectId, ref: 'Booking' }]
})

const Customer = mongoose.model('Customer', customerSchema) 

export { Customer }