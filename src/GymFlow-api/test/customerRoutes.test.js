import request from 'supertest';
import express from 'express';
import { Customer } from '../models/customerModel.js';
import { authenticate } from '../middleware/userAuth.js'; // Assuming you use authenticate middleware
import customerRoutes from '../routes/customerRoutes.js'; // Update with the correct path

// Mock the Customer model
jest.mock('../models/customerModel.js');

// Create an Express app and apply routes
const app = express();
app.use(express.json());
app.use('/customers', authenticate, customerRoutes);

describe('POST /customers', () => {
  it('should create a new customer', async () => {
    const mockCustomer = { name: 'John Doe', email: 'john@example.com' };

    Customer.create = jest.fn().mockResolvedValue(mockCustomer);

    const response = await request(app)
      .post('/customers')
      .send(mockCustomer);

    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Customer created successfully');
    expect(response.body.newCustomer).toEqual(mockCustomer);
  });

  it('should return error if customer creation fails', async () => {
    const errorMessage = 'Failed to create customer';
    Customer.create = jest.fn().mockRejectedValue(new Error(errorMessage));

    const response = await request(app)
      .post('/customers')
      .send({ name: 'John Doe', email: 'john@example.com' });

    expect(response.status).toBe(500);
    expect(response.body.message).toBe(errorMessage);
  });
});