import express from 'express'
import { Customer } from '../models/customerModel.js'

const customerRoutes = express.Router()

// Create new customer
customerRoutes.post('/', async (req, res) => {    
    try {
        const newCustomer = await Customer.create(req.body)
        res.status(201).send({ message: "Customer created successfully", newCustomer })
    } catch (error) {
        console.error('Create customer error:', error)
        res.status(500).json({ message: 'Server error' })
    }
})

export default customerRoutes