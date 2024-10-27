import adminAxios from '@/app/api/axios/adminAxios';
import { AxiosError } from 'axios';

export const patchPubStatus = async (
  openStatus: boolean,
  setOpenStatus: (status: boolean) => void,
  setIsPubModalOpen: (status: boolean) => void,
) => {
  try {
    const newStatus = !openStatus;
    const credentials = {
      status: newStatus,
    };

    const response = await adminAxios.patch('/status', credentials);

    if (response.status === 200) {
      setOpenStatus(newStatus);
      return {
        success: true,
        message: '점포 상태가 성공적으로 변경되었습니다.',
      };
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
    setIsPubModalOpen(false);
  }
};
