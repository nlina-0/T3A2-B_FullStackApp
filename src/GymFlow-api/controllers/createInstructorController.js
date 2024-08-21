import { Instructor } from '../models/instructorModel'; 

export const createInstructor = async (req, res) => {
    const { firstName, lastName, age, email, phone, password } = req.body;

    try {
        const existingInstructor = await Instructor.findOne({ email });
        if (existingInstructor) {
            return res.status(400).json({ message: 'Instructor with this email already exists' });
        }

        const instructor = new Instructor({ firstName, lastName, age, email, phone, password });
        await instructor.save();

        res.status(201).json({ message: 'Instructor created successfully', instructor });
    } catch (error) {
        console.error('Create instructor error:', error); // logs the error for debugging
        res.status(500).json({ message: 'Server error' });
    }
};