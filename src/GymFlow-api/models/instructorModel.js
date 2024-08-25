import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const instructorSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true, min: 18 }, // Ensure age is realistic
    // email: { type: String, required: true, unique: true, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']},
    phone: { type: String, required: true, unique: true },
    // password: { type: String, required: true },
    classes: [{ type: mongoose.ObjectId, ref: 'Class' }]
});

// hashes password before saving
// instructorSchema.pre('save', async function(next) {
//     if (!this.isModified('password')) return next();
    
//     try {
//         const salt = await bcrypt.genSalt(10);
//         this.password = await bcrypt.hash(this.password, salt);
//         next();
//     } catch (error) {
//         next(error);
//     }
// });

// // makes sure the passwords match via comparing hashes
// instructorSchema.methods.comparePassword = async function(candidatePassword) {
//     return await bcrypt.compare(candidatePassword, this.password);
// };

const Instructor = mongoose.model('Instructor', instructorSchema);

export { Instructor };