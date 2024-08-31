import express from 'express'
import { ClassType } from '../models/classModel.js'
import { authenticate, checkMaster } from '../middleware/userAuth.js'

const classTypeRoutes = express.Router()

// CLASS TYPES
// Get all class types
classTypeRoutes.get('/', async (req, res) => {
    try {
        res.status(200).send(await ClassType.find())
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Get class by type
classTypeRoutes.get('/:classtype', async (req, res) => {
    try {
        const searchedClassType = await ClassType.findOne({ "name": req.params.classtype})
        if (!searchedClassType) {
            res.status(404).json({ message: "Class type does not exist" })
        }
        try {
            const resultClasses = await Class.find({ classType: searchedClassType.id }).populate('classType').populate('instructor')
            console.log(resultClasses)
            res.send(resultClasses)
        } catch (err) {
            res.status(500).json({ message: "No classes found for entered class type" })
        }} catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Create new class type
classTypeRoutes.post('/', authenticate, async (req, res) => {
    try {
        const newType = await ClassType.create(req.body)
        res.status(201).send({ message: "Class type created successfully", newType })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

export default classTypeRoutes