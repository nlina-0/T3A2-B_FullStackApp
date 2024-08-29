 import dotenv from 'dotenv'
import jwt from 'jsonwebtoken';
import { User } from '../models/userModel.js';

// const JWT_SECRET = process.env.JWT_SECRET || 'jwt token insert'; // Removed this and inserted directly in parameter as was causing error

//Authentication and add user info to the request
const authenticate = async (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    // const token = req.headers.authorization
    if (!token) {
        return res.status(401).json({ message: 'No authentication provided' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.userId = await User.findById(decoded.id);
        console.log(req.userId)
        next();
    } catch (error) {
        console.log(error)
        res.status(401).json({ message: 'Invalid Authentication' });
    }
};

//middleware that checks if user is Master
const checkMaster = async (req, res, next) => {
    try {
        const user = await User.findById(req.userId) // userId was set by the auth middleware
        
        if (!user.master) {
            return res.status(403).json({ message: 'Unauthorized' }); // User is not authorized to access this route
        }

        // If user is admin, proceed to next middleware/route
        next()
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }}

export { authenticate, checkMaster }