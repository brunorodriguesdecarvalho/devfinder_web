import axios from 'axios';

const api = axios.create({
    baseURL: proccess.env.REACT_APP_API_URL});

export default api;