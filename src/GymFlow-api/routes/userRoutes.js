import bcrypt from 'bcrypt'
import express from 'express'
import { authenticate, checkMaster } from '../middleware/userAuth.js'
import { User } from '../models/userModel.js'

const userRoutes = express.Router()

userRoutes.use(authenticate) // authentication required on all user routes

// Get all users
userRoutes.get('/', async (req, res) => {
    try {
        res.status(200).send(await User.find() )
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Get user by id
userRoutes.get('/:id', async (req, res) => {
    try {
        res.status(200).send(await User.findById(req.params.id) )
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Create new user
userRoutes.post('/', checkMaster, async (req, res) => {  
    const { email } = req.body
    try {
        // Check if user already exists
        const userExists = await User.findOne({ email })
        
        if (userExists) {
            return res.status(400).json({ message: "User already exists" })
        }
        
        const newUser = await User.create(req.body)
        res.status(201).send({ message: "User created successfully", newUser })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }}
)

export default userRoutes