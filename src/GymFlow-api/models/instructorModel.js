import mongoose from 'mongoose'

const instructorSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']},
    phone: { type: String, required: true, unique: true },
    classes: [{ type: mongoose.ObjectId, ref: 'Class' }]
})

const Instructor = mongoose.model('Instructor', instructorSchema)

export { Instructor }