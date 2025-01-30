import axios from 'axios';

const api = axios.create({
  baseURL: 'https://platform-v1.vercel.app',  
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
  },
});

export default api;