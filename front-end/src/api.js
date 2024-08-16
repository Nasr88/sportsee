import axios from 'axios';
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from './mocks/dataMocked';



// Vérifie si nous devons utiliser les données mockées
//const USE_MOCK_DATA = import.meta.env.VITE_USE_MOCK_DATA === 'true';

const api = axios.create({
  baseURL: 'https://sportsee.onrender.com', // l'URL de backend
});

export const getUserData = async (mocked,userId) => {
 
  if (mocked) {
    // const user = mockUserDatas.find((mockUserData) => mockUserData.id === +userId);
    // const activity = mockUserActivities.find((mockUserActivity) => mockUserActivity.userId === +userId);
    return USER_MAIN_DATA.find(user => user.data.id === +userId);
  } else {
    return api.get(`/user/${userId}`);
  }
};

export const getUserActivity = async (mocked,userId) => {
  if (mocked) {
    return USER_ACTIVITY.find(activity => activity.data.userId === +userId);
  } else {
    return api.get(`/user/${userId}/activity`);
  }
};

export const getUserAverageSessions = async (mocked,userId) => {
  if (mocked) {
    return USER_AVERAGE_SESSIONS.find(sessions => sessions.data.userId === +userId);
  } else {
    return api.get(`/user/${userId}/average-sessions`);
  }
};

export const getUserPerformance = async (mocked,userId) => {
  if (mocked) {
    return USER_PERFORMANCE.find(performance => performance.data.userId === +userId);
  } else {
    return api.get(`/user/${userId}/performance`);
  }
};

export default api;
