import adminAxios from '@/app/api/axios/adminAxios';
import { AxiosError } from 'axios';

export const patchWaitingStatus = async (
  waitingStatus: boolean,
  setWaitingStatus: (status: boolean) => void,
  setIsWaitModalOpen: (status: boolean) => void,
) => {
  try {
    const newStatus = !waitingStatus;
    const credentials = {
      status: newStatus,
    };

    const response = await adminAxios.patch('/status-waiting', credentials);

    if (response.status === 200) {
      setWaitingStatus(newStatus);
      return { success: true, message: '대기 상태 변경에 성공하였습니다.' };
    } else {
      return { success: false, message: '관리자에게 문의하세요.' };
    }
  } catch (error: unknown) {
    const axiosError = error as AxiosError;
    if (axiosError.response && axiosError.response.data) {
      const errorData = axiosError.response.data as { message?: string };
      return {
        success: false,
        message: errorData.message || '관리자에게 문의하세요.',
      };
    }
    return { success: false, message: '관리자에게 문의하세요.' };
  } finally {
    setIsWaitModalOpen(false);
    // window.location.reload();
  }
};
