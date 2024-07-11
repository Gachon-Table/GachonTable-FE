import adminAxios from '../axios/adminAxios';

interface userProps {
  waitingId: number;
}

export const callUser = async (credentials: userProps) => {
  try {
    await adminAxios.patch('/call', credentials);
    console.log('호출에 성공하였습니다.');
  } catch (error) {
    console.error('호출 실패: ', error);
    throw error;
  }
};
