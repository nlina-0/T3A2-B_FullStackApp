import request from 'supertest';
import express from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import loginRoutes from '../routes/loginRoutes.js';
import { User } from '../models/userModel.js';
import { jest, expect } from '@jest/globals';

dotenv.config();

// // Mock the User model
// jest.mock('../models/userModel.js');

// Create an Express app and apply routes
const app = express();
app.use(express.json());
app.use('/login', loginRoutes);

// Utility function to generate JWT token
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email, master: user.master },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
};

describe('POST /login', () => {
  it('should return a token for valid credentials', async () => {
    const mockUser = {
      _id: '123',
      email: 'test@example.com',
      comparePassword: jest.fn().mockResolvedValue(true),
    };

    User.findOne = jest.fn().mockResolvedValue(mockUser);

    const response = await request(app)
      .post('/login')
      .send({ email: 'test@example.com', password: 'password123' });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
    const token = generateToken(mockUser);
    expect(response.body.token).toEqual(token);
  });

  it('should return error for invalid credentials', async () => {
    User.findOne = jest.fn().mockResolvedValue(null);

    const response = await request(app)
      .post('/login')
      .send({ email: 'test@example.com', password: 'wrongpassword' });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Invalid email or password');
  });
});