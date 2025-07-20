// File path: frontend/src/services/apiClient.js

import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.VITE_API_URL, // Use VITE_ prefix for Vite projects
});

export default apiClient;
