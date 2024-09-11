import waitingAxios from '@/app/api/axios/waitingAxios';

export const patchWaitingCancel = async (waitingId: string) => {
  try {
    const response = await waitingAxios.patch('/cancel', { waitingId });
    return response.data;
  } catch (error) {
    console.error('웨이팅 취소 실패: ', error);
    throw error;
  }
};
