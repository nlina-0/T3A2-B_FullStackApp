// MOVED ALL DIRECTLY INTO loginRoutes

// import jwt from 'jsonwebtoken';
// import { User } from '../models/userModel.js';

// // Secret key for JWT, should be set in environment variables
// const JWT_SECRET = process.env.JWT_SECRET || 'manually insert the jwt if req';

// export const login = async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         const user = await User.findOne({ email }); // Find the user by email
//         if (!user) {
//             return res.status(400).json({ message: 'Invalid email or password' }); // User not found
//         }

//         const isMatch = await user.comparePassword(password); // Compare passwords
//         if (!isMatch) {
//             return res.status(400).json({ message: 'Invalid email or password' }); // Password does not match
//         }

//         const token = jwt.sign(
//             { id: user._id, email: user.email, master: user.master }, // Payload
//             JWT_SECRET,
//             { expiresIn: '1h' } // Token expiration
//         );

//         res.json({ token }); // Return the token
//     } catch (error) {
//         console.error('Login error:', error);
//         res.status(500).json({ message: 'Server error' }); // Handle errors
//     }
// };