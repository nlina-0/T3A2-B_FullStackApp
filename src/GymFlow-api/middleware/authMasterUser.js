import jwt from 'jsonwebtoken';
import { Master } from '../models/masterModel';

const JWT_SECRET = process.env.JWT_SECRET || 'jwt token insert';

export const authenticate = async (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No authentication provided' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = await Master.findById(decoded.id);
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid Authentication' });
    }
};