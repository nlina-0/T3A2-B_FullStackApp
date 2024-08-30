import dotenv from 'dotenv';

export default {
  transform: {
    '^.+\\.js$': 'babel-jest',
    extensionsToTreatAsEsm: ['.js'],
    moduleFileExtensions: ['js', 'json', 'node'],
    setupFilesAfterEnv: ['./jest.setup.js']
  },
    testEnvironment: 'node', 
    setupFiles: ['./tests/jest.setup.js'], 
    moduleFileExtensions: ['js', 'json', 'node'], 
    transform: {}, 
    extensionsToTreatAsEsm: ['.js'], 
  };

dotenv.config({ path: './test/env.test' });

console.log('JWT_SECRET:', process.env.JWT_SECRET);