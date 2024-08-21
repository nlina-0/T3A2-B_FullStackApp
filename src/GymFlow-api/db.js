import dotenv from 'dotenv'
import mongoose from 'mongoose'

// TBC: To move mongoose connection code here

// Models
// Staff
const staffSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true, match: [/.+@.+\..+/, 'Please enter a valid email address']},
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false }
})

const Staff = mongoose.model('Staff', staffSchema) 

// Customer
const customerSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    bookings: [{ type: mongoose.ObjectId, ref: 'Booking' }]
})

const Customer = mongoose.model('Customer', customerSchema) 

// Instructor
const instructorSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    classes: [{ type: mongoose.ObjectId, ref: 'Class' }]
})

const Instructor = mongoose.model('Instructor', instructorSchema) 

// Class type
const ClassType = mongoose.model('ClassType', {
    name: { type: String, required: true }
})

// Class
const classSchema = new mongoose.Schema({
    name: { type: String, required: true },
    classType: { type: mongoose.ObjectId, ref: 'ClassType' },
    time: { type: Date, required: true },
    duration: { type: Number, required: true }, // in minutes
    instructor: { type: mongoose.ObjectId, ref: 'Instructor', required: true },
    capacity: { type: Number, required: true },
    bookings: [{ type: mongoose.ObjectId, ref: 'Booking' }]
})

const Class = mongoose.model('Class', classSchema) 

// Bookings
const bookingSchema = new mongoose.Schema({
    customer: { type: mongoose.ObjectId, ref: 'Customer', required: true },
    class: { type: mongoose.ObjectId, ref: 'Class', required: true },
    status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' }
})

const Booking = mongoose.model('Booking', bookingSchema) 

export { Staff, Customer, Instructor, ClassType, Class, Booking } 

