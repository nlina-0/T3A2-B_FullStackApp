import mongoose from 'mongoose'

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

export { Class }