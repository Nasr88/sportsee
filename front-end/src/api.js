import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // l'URL de backend
});
export const getUserData = (userId) => {
  return api.get(`/user/${userId}`);
};

export const getUserActivity = (userId) => {
  return api.get(`/user/${userId}/activity`);
};

export const getUserAverageSessions = (userId) => {
  return api.get(`/user/${userId}/average-sessions`);
};

export const getUserPerformance = (userId) => {
  return api.get(`/user/${userId}/performance`);
};
export default api;
