import axios from 'axios';
import { useRouter } from 'next/navigation';
import { userLogout } from '../service/user/userAuth'; // 경로는 필요에 따라 조정하세요

// axios 인스턴스를 생성합니다.
const userAxios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL, // API 기본 URL을 설정합니다.
    headers: {
        'Content-Type': 'application/json',
        'accept': '*/*',
    }
});

// 요청 인터셉터를 설정합니다.
userAxios.interceptors.request.use(
    async (config) => {
        // 로컬 스토리지에서 AccessToken을 가져옵니다.
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            // 요청 헤더에 Authorization을 추가합니다.
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        // 요청 오류가 발생하면 오류를 반환합니다.
        return Promise.reject(error);
    }
);

// 응답 인터셉터를 설정합니다.
userAxios.interceptors.response.use(
    (response) => response,
    async (error) => {
        // 응답 오류가 401 Unauthorized인 경우
        if (error.response?.status === 401) {
            // 로그아웃 처리를 합니다.
            userLogout();
            // 라우터를 사용하여 로그인 페이지로 리다이렉트합니다.
            const router = useRouter();
            router.push('/login'); // 필요한 경우 경로를 조정하세요.
        }
        // 오류를 반환합니다.
        return Promise.reject(error);
    }
);

export default userAxios;
