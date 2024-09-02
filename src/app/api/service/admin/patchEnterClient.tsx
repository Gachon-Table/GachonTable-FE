import adminAxios from '@/app/api/axios/adminAxios';

export const patchEnterClient = async (
  selectedWaitingId: string,
  seatingNum: number,
) => {
  const credentials = { waitingId: selectedWaitingId, seatingNum: seatingNum };
  try {
    const response = await adminAxios.patch('/enter', credentials);
    return response;
  } catch (error) {
    console.error('호출 실패: ', error);
    throw error;
  }
};
