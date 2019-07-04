import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4050';

export const fetchPublications = () => {
  return axios.get('/publications').then(res => res.data);
};

export const staff = () => null;
