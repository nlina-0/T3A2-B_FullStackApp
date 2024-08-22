// this help limit bruce force attacks on the login route endpoint
import rateLimit from 'express-rate-limit';

const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // limit each IP to 5 requests per window ms
    message: 'Too many login attempts from this IP, please try again later.'
});

const createInstructorLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // limit each IP to 10 requests per window ms
    message: 'Too many requests from this IP, please try again later.'
});

export { loginLimiter, createInstructorLimiter };