import axios from 'axios';

const baseURL = '';

export const http = axios.create({
  baseURL,
  timeout: 5000,
  headers: {},
});

http.interceptors.request.use(
  (config) => {
    // TODO
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

http.interceptors.response.use(
  (config) => {
    // TODO
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
