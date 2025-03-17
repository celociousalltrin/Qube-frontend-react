import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_REACT_APP_SERVER_API_URL;

axios.interceptors.request.use(
  (config) => {
    config.withCredentials = true;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error?.response);
  }
);

export default axios;
