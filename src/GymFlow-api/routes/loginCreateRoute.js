import express from 'express';
import { login } from '../controllers/authController'; 
import { createInstructor } from '../controllers/createInstructorController'; 
import { createInstructorValidationRules, validate } from '../middleware/validationMiddleware';
import { loginLimiter, createInstructorLimiter } from '../middleware/loginRateLimiter';

const router = express.Router();

// Route for logging in with rate limiting
router.post('/login', loginLimiter, login);

// route for creating a new instructor with validation, rate limiting
router.post('/instructors', 
    createInstructorValidationRules(), // applies validation rules
    validate, // middleware to handle validation errors
    createInstructorLimiter, // applies rate limiting
    createInstructor // handles the request
);

export default router;