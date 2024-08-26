import mongoose from 'mongoose'

const classSchema = new mongoose.Schema({
    name: { type: String, required: true },
    classType: { type: mongoose.ObjectId, ref: 'ClassType', required: true }, //id of class type
    time: { type: Date, required: true }, // eg 2019-02-03T06:48:07
    duration: { type: Number, required: true }, // in minutes
    instructor: { type: mongoose.ObjectId, ref: 'Instructor', required: true }, //id of instructor
    capacity: { type: Number, required: true },
    bookings: [{ type: mongoose.ObjectId, ref: 'Booking' }]
})

const Class = mongoose.model('Class', classSchema)

const ClassType = mongoose.model('ClassType', {
    name: { type: String, unique: true, required: true }
})

export { Class, ClassType }