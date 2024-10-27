import adminAxios from '@/app/api/axios/adminAxios';
import { AxiosError } from 'axios';

export const patchCallClient = async (selectedWaitingId: string) => {
  const credentials = { waitingId: selectedWaitingId };
  try {
    const response = await adminAxios.patch('/call', credentials);
    if (response.status === 200) {
      return { success: true, message: '호출에 성공하였습니다.' };
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
