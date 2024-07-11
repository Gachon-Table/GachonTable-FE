import adminAxios from '../axios/adminAxios';

interface userProps {
  waitingId: number;
}

export const enterUser = async (credentials: userProps) => {
  try {
    await adminAxios.patch('/enter', credentials);
    console.log('입장에 성공하였습니다.');
  } catch (error) {
    console.error('입장 실패: ', error);
    throw error;
  }
};
