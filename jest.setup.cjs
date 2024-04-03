require('dotenv').config({
  path: '.env.test',
});

jest.mock('./src/constants', () => ({
  VITE_API_URL: 'http://localhost:4000',
}));
