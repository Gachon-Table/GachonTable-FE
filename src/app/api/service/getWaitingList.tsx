import adminAxios from '../axios/adminAxios';

interface User {
  username: string;
  time: string;
  headCount: number;
  tel: string;
  waitingId: number;
}

export const getWaitingList = async (): Promise<User[]> => {
  try {
    const response = await adminAxios.get<{
      count: number;
      waitingList: User[];
    }>('/waitings');
    const { waitingList } = response.data;
    return waitingList;
  } catch (error) {
    console.error('대기열 조회 실패: ', error);
    throw error;
  }
};
