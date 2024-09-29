import adminAxios from '@/app/api/axios/adminAxios';
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

    const response = await adminAxios.patch('/status', credentials);

    if (response.status) {
      setWaitingStatus(newStatus);
    }
  } catch (error) {
    console.error('웨이팅 상태 변경 실패: ', error);
  } finally {
    setIsWaitModalOpen(false);
  }
};
