import axios from 'axios';

const server = axios.create({
    baseURL: process.env.API_URL,
    timeout: 5000, 
    headers: {
        'Content-Type': 'application/json',
        'accept': '*/*'
    }
});

export default server;