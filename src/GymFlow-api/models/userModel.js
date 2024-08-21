import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']},
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false }
})

const User = mongoose.model('User', userSchema) 

export { User }