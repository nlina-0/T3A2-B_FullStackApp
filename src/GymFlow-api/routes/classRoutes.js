import express from 'express'
import { Class } from '../models/classModel.js'

const classRoutes = express.Router()

// Create new class
classRoutes.post('/', async (req, res) => {
    try {
        const newClass =  await Class.create(req.body)
        res.status(201).send({ message: "Class created successfully", newClass })
    } catch (err) {
        res.status(500).json({ message: error.message })
    }
})

// Update class
classRoutes.put('/:id', async (req, res) => {
    try {
        const updatedClass = await Class.findByIdAndUpdate(req.params.id, req.body, {returnDocument: 'after'})
        res.status(200).json({ message: "Class updated successfully" }, updatedClass)
    } catch (err) {
        res.status(404).json({ message: "Class not found" })
    }
})