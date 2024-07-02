import axios from 'axios';

const adminAxios = axios.create({
    baseURL: `${process.env.API_URL}/admin`,
    timeout: 5000, 
    headers: {
        'Content-Type': 'application/json',
        'accept': '*/*',
    }
});

adminAxios.interceptors.request.use(
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

export default adminAxios;