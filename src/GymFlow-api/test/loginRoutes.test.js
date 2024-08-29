import request from 'supertest';
import express from 'express';
import dotenv from 'dotenv';
import loginRoutes from '../routes/loginRoutes.js'; 
import { User } from '../models/userModel.js';

dotenv.config();

// Mock the User model
jest.mock('../models/userModel.js');

const app = express();
app.use(express.json());
app.use('/login', loginRoutes);

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