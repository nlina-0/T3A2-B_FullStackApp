import express from 'express'
import { Class, ClassType } from '../models/classModel.js'
import { authenticate, checkMaster } from '../middleware/userAuth.js'

const classRoutes = express.Router()

// CLASSES
// View all classes
classRoutes.get('/', async (req, res) => {
    try {
        res.status(200).send(await Class.find().populate('classType').populate('instructor'))
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// View class by id
classRoutes.get('/:id', async (req, res) => {
    try {
        const searchedClass = await Class.findById(req.params.id).populate('classType').populate('instructor')
        if (!searchedClass) {
            res.status(404).json({ message: "Class not found" })
            
        }
        res.send(searchedClass)
        } catch (error) {
            res.status(500).json({ message: error.message })
    }
})

// View class by type
classRoutes.get('/type/:classtype', async (req, res) => {
    try {
        const searchedClassType = await ClassType.findOne({ "name": req.params.classtype})
        if (!searchedClassType) {
            res.status(404).json({ message: "Class type does not exist" })
        }
        try {
            const resultClasses = await Class.find({ classType: searchedClassType.id }).populate('classType').populate('instructor')
            console.log(resultClasses)
            res.send(resultClasses)
        } catch (error) {
            res.status(500).json({ message: "No classes found for entered class type" })
        }} catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Create new class
classRoutes.post('/', authenticate, async (req, res) => {
    try {
        const newClass =  await Class.create(req.body)
        res.status(201).send({ message: "Class created successfully", newClass })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Update class
classRoutes.put('/:id', authenticate, async (req, res) => {
    try {
        const updatedClass = await Class.findByIdAndUpdate(req.params.id, req.body, {returnDocument: 'after'})
        res.status(200).json({ message: "Class updated successfully" }, updatedClass)
    } catch (error) {
        res.status(404).json({ message: "Class not found" })
    }
})

// Delete class (Master access required)
classRoutes.delete('/:id', authenticate, checkMaster, async (req, res) => {  
    try {
        const classToDelete = await Class.findById(req.params.id)
        if (!classToDelete) {
            return res.status(404).send({ message: "Class not found" })
        }
        await Class.findByIdAndDelete(req.params.id)
        res.json({ message: "Class deleted successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// CLASS TYPES
// Create new class type
classRoutes.post('/types', authenticate, async (req, res) => {
    try {
        const newType = await ClassType.create(req.body)
        res.status(201).send({ message: "Class type created successfully", newType })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Get all class type
classRoutes.get('/types', async (req, res) => {
    try {
        res.status(201).send(await ClassType.find())
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

export default classRoutes