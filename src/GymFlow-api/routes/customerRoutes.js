import express from 'express'
import { Customer } from '../models/customerModel.js'
import { authenticate, checkMaster } from '../middleware/authMasterUser.js'

const customerRoutes = express.Router()

// Create new customer
customerRoutes.post('/', authenticate, async (req, res) => {  
    try {
        const newCustomer = await Customer.create(req.body)
        res.status(201).send({ message: "Customer created successfully", newCustomer })
    } catch (err) {
        console.error("Create customer error:", err)
        res.status(500).json({ message: err.message })
    }
})

// Update customer details
customerRoutes.put('/:id', authenticate, async (req, res) => {
    try {
        const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {returnDocument: 'after'})
        if (!customer) return res.status(404).send({ message: "Customer not found" })
        res.status(200).send({ message: "Customer updated successfully", customer })
    } catch (err) {
        res.status(404).json({ message: "Customer not found" })
    }
})

// Delete customer
customerRoutes.delete('/:id', authenticate, checkMaster, async (req, res) => {  // TODO: add auth to ensure only admins can delete
    try {
        const customer = await Customer.findById(req.params.id)
        if (!customer) {
            return res.status(404).send({ message: "Customer not found" })
        }
        await Customer.findByIdAndDelete(req.params.id)
        res.json({ message: "Customer deleted successfully" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

export default customerRoutes