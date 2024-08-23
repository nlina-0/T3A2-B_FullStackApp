import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const masterSchema = new mongoose.Schema({
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
    role: {
        type: String,
        enum: ['master'],
        default: 'master'
    }
});

// hash pword before saving
masterSchema.pre('save', async function(next) {
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
masterSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

const Master = mongoose.model('Master', masterSchema);

export { Master };