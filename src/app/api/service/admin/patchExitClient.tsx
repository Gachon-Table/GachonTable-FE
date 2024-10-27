import adminAxios from '@/app/api/axios/adminAxios';
import { AxiosError } from 'axios';

export const patchExitClient = async (seatingId: number) => {
  try {
    const credentials = {
      seatingId: seatingId,
    };

    const response = await adminAxios.patch('/exit', credentials);
    if (response.status === 200) {
      return { success: true, message: '퇴장에 성공하였습니다.' };
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
