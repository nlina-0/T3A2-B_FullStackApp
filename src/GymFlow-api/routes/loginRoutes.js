import dotenv from 'dotenv'
import express from 'express'
import jwt from 'jsonwebtoken'
// import { login } from '../controllers/authController.js'; 
// import { createInstructor } from '../controllers/createInstructorController.js'; 
// import { createInstructorValidationRules, validate } from '../middleware/loginValidation'; // Ensure path is correct
import { loginLimiter, createInstructorLimiter } from '../middleware/loginRateLimiter.js';
import { User } from '../models/userModel.js';

const loginRoutes = express.Router();

// Route for logging in with rate limiting
loginRoutes.post('/', loginLimiter, async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email }); // Find the user by email
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' }); // User not found
        }

        const isMatch = await user.comparePassword(password); // Compare passwords

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' }); // Password does not match
        }

        const token = jwt.sign(
            { id: user._id, email: user.email, master: user.master }, // Payload
            process.env.JWT_SECRET,
            { expiresIn: '1h' } // Token expiration
        );

        res.json({ token }); // Return the token
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error' }); // Handle errors
    }
})

// // Route for creating a new instructor with validation, rate limiting
// router.post('/instructors', 
//     createInstructorValidationRules(), // Applies validation rules
//     validate, // Middleware to handle validation errors
//     createInstructorLimiter, // Applies rate limiting
//     createInstructor // Handles the request
// );

export default loginRoutes;