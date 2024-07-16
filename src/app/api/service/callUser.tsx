import adminAxios from '../axios/adminAxios';

interface userProps {
  waitingId: string;
}

export const callUser = async (credentials: userProps) => {
  try {
    const response = await adminAxios.patch('/call', credentials);
    if (response.status === 200) {
      console.log('호출에 성공하였습니다.');
      alert('호출 성공');
    } else {
      console.log('호출에 실패하였습니다.');
      alert('호출 실패');
    }
  } catch (error) {
    console.error('호출 실패: ', error);
    throw error;
  }
};
