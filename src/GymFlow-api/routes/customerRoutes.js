import express from 'express'
import { Customer } from '../models/customerModel.js'

const customerRoutes = express.Router()

// Create new customer
customerRoutes.post('/', async (req, res) => {  
    try {
        const newCustomer = await Customer.create(req.body)
        res.status(201).send({ message: "Customer created successfully", newCustomer })
    } catch (error) {
        console.error("Create customer error:", error)
        res.status(500).json({ message: "Server error" })
    }
})

// Update customer details
customerRoutes.put('/:id', async (req, res) => {
    try {
        const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {returnDocument: 'after'})
        if (!customer) return res.status(404).send({ message: "Customer not found" })
        res.status(200).send({ message: "Customer updated successfully", customer })
    } catch (err) {
        res.status(404).json({ message: "Customer not found" })
    }
})

// Delete customer
customerRoutes.delete('/:id', async (req, res) => {  // TODO: add auth to ensure only admins can delete
    try {
        const customer = await Customer.findByIdAndDelete(req.params.id)
        if (!customer) return res.status(404).send({ message: "Customer not found" })
        res.send({ message: "Customer deleted successfully" })
    } catch (err) {
        res.status(500).json({ message: "Server error" })
    }
})


export default customerRoutes