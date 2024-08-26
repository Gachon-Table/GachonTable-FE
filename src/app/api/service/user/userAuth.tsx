import userAxios from '../../axios/userAxios'; // 경로는 필요에 따라 조정하세요

interface UserProps {
  id: string;
  password: string;
}

// 사용자 로그인 함수
export const userLogin = async (credentials: UserProps) => {
  try {
    // 로그인 요청을 보내고 응답을 받습니다.
    const response = await userAxios.post('/login', credentials);
    const tokens = response.data;

    // 토큰과 사용자 정보를 로컬 스토리지에 저장합니다.
    localStorage.setItem('accessToken', tokens.accessToken);
    localStorage.setItem('refreshToken', tokens.refreshToken);
    localStorage.setItem('pubId', tokens.pubId); // 토큰 구조에 따라 조정하세요.

    return response.data;
  } catch (error) {
    console.error('로그인 실패: ', error);
    throw error; // 선택적으로, 호출하는 컴포넌트에서 오류를 처리하도록 오류를 다시 던질 수 있습니다.
  }
};

// 사용자 로그아웃 함수
export const userLogout = () => {
  // 로컬 스토리지에서 사용자 토큰을 제거합니다.
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('pubId');
};

// 사용자 인증 상태 확인 함수
export const isUserAuthenticated = () => {
  // 로컬 스토리지에서 accessToken이 존재하는지 확인합니다.
  return !!localStorage.getItem('accessToken');
};
