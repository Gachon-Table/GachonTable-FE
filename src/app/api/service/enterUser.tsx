import adminAxios from '../axios/adminAxios';

interface userProps {
  waitingId: string;
}

export const enterUser = async (credentials: userProps) => {
  try {
    const response = await adminAxios.patch('/enter', credentials);
    if (response.status === 200) {
      console.log('입장에 성공하였습니다.');
      alert('입장 성공');
    } else {
      console.log('입장에 실패하였습니다.');
      alert('입장 실패');
    }
  } catch (error) {
    console.error('입장 실패: ', error);
    throw error;
  }
};
