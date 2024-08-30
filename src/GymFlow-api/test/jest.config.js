import dotenv from 'dotenv';

export default {
    testEnvironment: 'node', 
    setupFiles: ['./tests/jest.setup.js'], 
    moduleFileExtensions: ['js', 'json', 'node'], 
    transform: {}, 
    extensionsToTreatAsEsm: ['.js'], 
  };

dotenv.config({ path: './test/env.test' });

console.log('JWT_SECRET:', process.env.JWT_SECRET);