import { Master } from '../models/masterModel'; 
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'jwttoken insert here';

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const master = await Master.findOne({ email });
        if (!master) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const isMatch = await master.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign(
            { id: master._id, email: master.email, role: master.role },
            JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({ token });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};