/* eslint-disable @typescript-eslint/no-unused-vars */
import userWaitingAxios from '@/app/api/axios/userWaitingAxios';

export const patchWaitingCancel = async (
  waitingId: string,
): Promise<{ success: boolean }> => {
  try {
    const response = await userWaitingAxios.patch('/cancel', {
      waitingId: waitingId,
    });
    return { success: true };
  } catch (error) {
    console.error('웨이팅 취소 실패: ', error);
    throw error;
  }
};
