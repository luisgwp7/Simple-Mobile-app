import axios from 'axios';

const API_URL = 'http://your_ip:8000/api/auth/'; /// in the firewall yoo should let the port 8000 to work x

const api = axios.create({
    baseURL: API_URL,
    timeout: 10000, 
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
