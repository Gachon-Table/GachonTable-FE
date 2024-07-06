import waitingAxios from '../axios/waitingAxios';

interface WaitingRequest {
  pubId: number;
  tel: string;
  headCount: number;
}

export const submitWaitingRequest = async (requestData: WaitingRequest) => {
  try {
    const response = await waitingAxios.post(
      `/onsite/${requestData.pubId}`,
      requestData,
    );
    return response.data;
  } catch (error) {
    console.error('웨이팅 요청 전송 중 오류 발생:', error);
    throw error;
  }
};
