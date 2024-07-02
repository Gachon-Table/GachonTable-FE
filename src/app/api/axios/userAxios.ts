import axios from 'axios';

const userAxios = axios.create({
    baseURL: process.env.API_URL,
    timeout: 5000, 
    headers: {
        'Content-Type': 'application/json',
        'accept': '*/*',
    }
});

userAxios.interceptors.request.use(
    async (config) => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default userAxios;