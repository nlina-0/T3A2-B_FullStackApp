import request from 'supertest';
import express from 'express';
import jwt from 'jsonwebtoken';
import { Customer } from '../models/customerModel.js';
import { authenticate } from '../middleware/userAuth.js';  
import customerRoutes from '../routes/customerRoutes.js';

jest.mock('../models/customerModel.js');

const app = express();
app.use(express.json());
app.use('/customers', authenticate, customerRoutes);

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email, master: user.master },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
};

describe('POST /customers', () => {
  it('should create a new customer', async () => {
    const mockCustomer = { name: 'John', email: 'john@example.com' };
    const token = generateToken({ _id: '123', email: 'test@example.com', master: false });

    Customer.create = jest.fn().mockResolvedValue(mockCustomer);

    const response = await request(app)
      .post('/customers')
      .set('Authorization', `Bearer ${token}`)
      .send(mockCustomer);

    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Customer created successfully');
    expect(response.body.newCustomer).toEqual(mockCustomer);
  });

  it('should return error if customer creation fails', async () => {
    const token = generateToken({ _id: '123', email: 'test@example.com', master: false });
    const errorMessage = 'Failed to create customer';
    Customer.create = jest.fn().mockRejectedValue(new Error(errorMessage));

    const response = await request(app)
      .post('/customers')
      .set('Authorization', `Bearer ${token}`)
      .send({ name: 'John', email: 'john@example.com' });

    expect(response.status).toBe(500);
    expect(response.body.message).toBe(errorMessage);
  });
});
