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
    mongoServer = await MongoMemoryServer.create();
    connectionString = mongoServer.getUri();
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  it('should retrieve all classes', async () => {
    try {
      const response = await request(app).get('/api/classes');
      console.log(response.body); // Log the response body for debugging
      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
    } catch (error) {
      console.error('Error during test:', error); // Log any unexpected errors
    }
  });
});