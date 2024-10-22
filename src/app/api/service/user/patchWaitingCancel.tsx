import userWaitingAxios from '@/app/api/axios/userWaitingAxios';

export const patchWaitingCancel = async (waitingId: string) => {
  try {
    const response = await userWaitingAxios.patch('/cancel', {
      waitingId: waitingId,
    });
    return response.data;
  } catch (error) {
    console.error('웨이팅 취소 실패: ', error);
    throw error;
  }
};
