import { AxiosError } from 'axios';
import adminAxios from '../../axios/adminAxios';

export const getWaitingList = async () => {
  try {
    const response = await adminAxios.get('/waitings');
    const waitingList = response.data.waitingInfos;
    if (response.status === 200) {
      return {
        success: true,
        message: '조회에 성공하였습니다.',
        value: waitingList,
      };
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
