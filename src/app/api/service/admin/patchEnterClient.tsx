import adminAxios from '@/app/api/axios/adminAxios';
import { AxiosError } from 'axios';

export const patchEnterClient = async (
  selectedWaitingId: string,
  seatingNum: number,
) => {
  const credentials = { waitingId: selectedWaitingId, seatingNum: seatingNum };
  try {
    const response = await adminAxios.patch('/enter', credentials);
    if (response.status === 200) {
      return { success: true, message: '입장에 성공하였습니다.' };
    } else {
      return { success: false, message: '관리자에게 문의하세요.' };
    }
  } catch (error: unknown) {
    const axiosError = error as AxiosError;
    if (axiosError.response && axiosError.response.data) {
      const errorData = axiosError.response.data as { message?: string };
      return { success: false, message: errorData.message };
    }

    return { success: false, message: '관리자에게 문의하세요.' };
  }
};
