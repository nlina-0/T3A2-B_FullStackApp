import express from 'express';
import { Instructor } from '../models/instructorModel.js';
import { authenticate, checkMaster } from '../middleware/userAuth.js'; 

const instructorRoutes = express.Router();

// auth middleware to all routes
instructorRoutes.use(authenticate); // Ensure all routes require authentication

// create a new instructor (only accessible by Masters/admin)
instructorRoutes.post('/', checkMaster, async (req, res) => {  
    try {
        const newInstructor = await Instructor.create(req.body); // Create a new instructor
        res.status(201).send({ message: "Instructor created successfully", newInstructor });
    } catch (error) {
        console.error("Create instructor error:", error);
        res.status(500).json({ message: error.message }); // handle errors
    }
});

// Delete instructor (Master access required)
instructorRoutes.delete('/:id', async (req, res) => {  
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

export default instructorRoutes;