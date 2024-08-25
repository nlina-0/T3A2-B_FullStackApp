import express from 'express';
import { login } from '../controllers/authController'; 
import { createInstructor } from '../controllers/createInstructorController'; 
import { createInstructorValidationRules, validate } from '../middleware/loginValidation'; // Ensure path is correct
import { loginLimiter, createInstructorLimiter } from '../middleware/loginRateLimiter';

const router = express.Router();

// Route for logging in with rate limiting
router.post('/login', loginLimiter, login);

// Route for creating a new instructor with validation, rate limiting
router.post('/instructors', 
    createInstructorValidationRules(), // Applies validation rules
    validate, // Middleware to handle validation errors
    createInstructorLimiter, // Applies rate limiting
    createInstructor // Handles the request
);

export default router;