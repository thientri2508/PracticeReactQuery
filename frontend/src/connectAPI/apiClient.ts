import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://dummyjson.com',
    timeout: 10000, // Thiết lập timeout
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient;
