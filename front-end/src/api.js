import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // l'URL de backend
});

export default api;
