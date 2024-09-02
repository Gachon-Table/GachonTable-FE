import adminAxios from '@/app/api/axios/adminAxios';

export const patchPubStatus = async (
  pubOpenStatus: boolean,
  setPubOpenStatus: (status: boolean) => void,
  setIsPubModalOpen: (status: boolean) => void,
) => {
  try {
    const newStatus = !pubOpenStatus;
    const credentials = {
      openStatus: newStatus,
    };

    const response = await adminAxios.patch('/status', credentials);

    if (response.status) {
      setPubOpenStatus(newStatus);
    }
  } catch (error) {
    console.error('점포 상태 변경 실패: ', error);
  } finally {
    setIsPubModalOpen(false);
  }
};
