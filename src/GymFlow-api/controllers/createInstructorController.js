import { Instructor } from '../models/instructorModel'; 
import { Master } from '../models/masterModel'; 

export const createInstructor = async (req, res) => {
    const { firstName, lastName, age, email, phone, password } = req.body;
    const { masterId } = req.user; // Assuming you get the logged-in master ID from middleware

    try {
        // Check if the requesting user is a Master
        const master = await Master.findById(masterId);
        if (!master || master.role !== 'master') {
            return res.status(403).json({ message: 'Unauthorized' });
        }

        // Check if instructor with this email already exists
        const existingInstructor = await Instructor.findOne({ email });
        if (existingInstructor) {
            return res.status(400).json({ message: 'Instructor with this email already exists' });
        }

        // Create and save the new instructor
        const instructor = new Instructor({ firstName, lastName, age, email, phone, password });
        await instructor.save();

        res.status(201).json({ message: 'Instructor created successfully', instructor });
    } catch (error) {
        console.error('Create instructor error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};