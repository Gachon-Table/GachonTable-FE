import adminAxios from '@/app/api/axios/adminAxios';

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

    if (response.status) {
      setOpenStatus(newStatus);
    }
  } catch (error) {
    console.error('점포 상태 변경 실패: ', error);
  } finally {
    setIsPubModalOpen(false);
    window.location.reload();
  }
};
