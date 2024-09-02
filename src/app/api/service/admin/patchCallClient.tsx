import adminAxios from '@/app/api/axios/adminAxios';

export const patchCallClient = async (selectedWaitingId: string) => {
  const credentials = { waitingId: selectedWaitingId };
  try {
    const response = await adminAxios.patch('/call', credentials);
    return response;
  } catch (error) {
    console.error('호출 실패: ', error);
    throw error;
  }
};
