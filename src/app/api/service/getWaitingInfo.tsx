import waitingAxios from '../axios/waitingAxios';

export const getWaitingInfo = async (waitingId: string) => {
  try {
    const response = await waitingAxios.get(`/biztalk-status/${waitingId}`);
    return response.data;
  } catch (error) {
    console.error('웨이팅 현황 조회 실패');
    throw error;
  }
};
