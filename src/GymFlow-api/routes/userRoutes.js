import bcrypt from 'bcrypt'
import express from 'express'
import { authenticate } from '../middleware/userAuth.js'
import { User } from '../models/userModel.js'

const userRoutes = express.Router()

userRoutes.use(authenticate) // authentication required on all user routes

// Create new user
userRoutes.post('/', async (req, res) => {  
    const { email, password, master } = req.body
    try {
        // Check if user already exists
        const userExists = await User.findOne({ email })
        
        if (userExists) {
            return res.status(400).json({ message: "User already exists" })
        }
        
        const newUser = new User({ email, password, master })
        newUser.save()

        res.status(201).send({ message: "User created successfully", newUser })
        } catch (error) {
        console.error("Create customer error:", error)
        res.status(500).json({ message: error.message })
    }}
)

export default userRoutes