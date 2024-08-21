import mongoose from 'mongoose'

const ClassType = mongoose.model('ClassType', {
    name: { type: String, required: true }
})

export { ClassType }