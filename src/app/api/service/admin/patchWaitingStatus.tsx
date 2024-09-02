import adminAxios from '@/app/api/axios/adminAxios';
export const patchWaitingStatus = async (
  waitingOpenStatus: boolean,
  setWaitingOpenStatus: (status: boolean) => void,
  setIsWaitModalOpen: (status: boolean) => void,
) => {
  try {
    const newStatus = !waitingOpenStatus;
    const credentials = {
      openStatus: newStatus,
    };

    const response = await adminAxios.patch('/status', credentials);

    if (response.status) {
      setWaitingOpenStatus(newStatus);
    }
  } catch (error) {
    console.error('웨이팅 상태 변경 실패: ', error);
  } finally {
    setIsWaitModalOpen(false);
  }
};
