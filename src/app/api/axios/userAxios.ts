import axios from 'axios';
import { userLogout } from '../service/user/userAuth';

const userAxios = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/user`, 
    headers: {
        'Content-Type': 'application/json',
        'accept': '*/*',
    }
});

userAxios.interceptors.request.use(
    async (config) => {
        const accessToken = localStorage.getItem('userAccessToken');
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

userAxios.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401) {
            const userRefreshToken = localStorage.getItem('userRefreshToken');
            
            if (!userRefreshToken) {
                userLogout();
                return Promise.reject(new Error('No refresh token available, logging out'));
            }

            try {
                const response = await userAxios.post('/refresh', { refreshToken: userRefreshToken });
                const accessToken = response.data.accessToken
                localStorage.setItem('userAccessToken', accessToken);
                error.config.headers['Authorization'] = `Bearer ${accessToken}`;
                return userAxios(error.config); 

            } catch (refreshError) {
                userLogout();
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
);

export default userAxios;