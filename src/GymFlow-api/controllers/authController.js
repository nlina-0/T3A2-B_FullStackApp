import { Instructor } from '../models/instructorModel'; 
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET|| 'can take admin JWT here'; // needs specifying of JWT in env

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const instructor = await Instructor.findOne({ email });
        if (!instructor) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const isMatch = await instructor.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign(
            { id: instructor._id, email: instructor.email },
            JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({ token });
    } catch (error) {
        console.error('Login error:', error); // logs the error for debugging
        res.status(500).json({ message: 'Server error' });
    }
};