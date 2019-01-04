import axios from 'axios';

const api = axios.create({
    baseURL: 'https://apinodeteste.herokuapp.com/api'
});

export default api;