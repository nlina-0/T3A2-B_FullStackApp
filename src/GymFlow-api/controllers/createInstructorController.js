// import { Instructor } from '../models/instructorModel'; 
// import { Master } from '../models/userModel'; 

// export const createInstructor = async (req, res) => {
//     const { firstName, lastName, age, email, phone, password } = req.body;
//     const { userId } = req.user; // Get the logged-in user's ID from the request

//     try {
//         // Ensure the logged-in user is a Master
//         const master = await Master.findById(userId);
//         if (!master || master.role !== 'master') {
//             return res.status(403).json({ message: 'Unauthorized' }); // User is not authorized
//         }

//         // Check if instructor with this email already exists
//         const existingInstructor = await Instructor.findOne({ email });
//         if (existingInstructor) {
//             return res.status(400).json({ message: 'Instructor with this email already exists' }); // Instructor already exists
//         }

//         // Create and save the new instructor
//         const instructor = new Instructor({ firstName, lastName, age, email, phone, password });
//         await instructor.save();

//         res.status(201).json({ message: 'Instructor created successfully', instructor });
//     } catch (error) {
//         console.error('Create instructor error:', error);
//         res.status(500).json({ message: 'Server error' }); // Handle errors
//     }
// };


// As discussed, removed instructor login capavility