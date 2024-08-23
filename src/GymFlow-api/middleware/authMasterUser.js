import jwt from 'jsonwebtoken';
import { Master } from '../models/masterModel';

const JWT_SECRET = process.env.JWT_SECRET || 'jwt token insert';

//Authentication and add user info to the request
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

//middleware that checks the role of the user
export const checkRole = (role) => (req, res, next) => {
    if (req.user.role !== role) {
        return res.status(403).json({ message: 'Forbidden' });
    }
    next();
};