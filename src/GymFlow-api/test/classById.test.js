import request from 'supertest';
import express from 'express';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import classRoutes from '../routes/classRoutes'; 

const app = express();
app.use(express.json());
app.use('/api/classes', classRoutes);

describe('Class Routes', () => {
  let mongoServer;
  let connectionString;

  beforeAll(async () => {
    // Start an in-memory MongoDB server
    mongoServer = await MongoMemoryServer.create();
    connectionString = mongoServer.getUri();

    // Connect to the in-memory MongoDB server
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Optionally, you can create test data here if needed
  });

  afterAll(async () => {
    // Disconnect from the in-memory MongoDB server and stop it
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  it('should retrieve all classes', async () => {
    // Optionally, insert test data here if needed

    try {
      const response = await request(app).get('/api/classes');
      
      console.log('Response Body:', response.body); // Log the response body for debugging
      
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true); // Check if the result is an array
      
      // Optionally, check specific content in the response
      // expect(response.body.length).toBeGreaterThan(0); // For example, check if the array is not empty
      
    } catch (error) {
      console.error('Error during test:', error); // Log any unexpected errors
      throw new Error('Test failed due to an error: ' + error.message);
    }
  });
});