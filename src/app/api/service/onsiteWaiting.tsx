import waitingAxios from '../axios/waitingAxios';

interface WaitingRequest {
  pubId: number;
  tel: string;
  headCount: number;
}

export const submitWaitingRequest = async (requestData: WaitingRequest) => {
  try {
    const response = await waitingAxios.post(`/onsite`, requestData);
    if (response.status === 200) {
      alert('웨이팅이 성공적으로 등록되었습니다!');
      return response.data;
    }
  } catch (error) {
    console.error('웨이팅 요청 전송 중 오류 발생:', error);
    throw error;
  }
};
