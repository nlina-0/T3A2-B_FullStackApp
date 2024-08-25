import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// This 'user' schema is for all gym management staff. the 'admin' field (boolean) determines whether they are a master user or not (for simplicity there will only be two roles: master or not master).
// Master users will be able to do things like create/delete instructors and customers etc. whilst normal (not master) users can't.

const userSchema = new mongoose.Schema({
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address'] 
    },
    password: { 
        type: String, 
        required: true
    },
    master: {
        type: Boolean,
        required: true,
        default: false
    }
});

// hash pword before saving
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

// compares the hashed pwords
userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);

export { User };