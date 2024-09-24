import adminAxios from '@/app/api/axios/adminAxios';

export const patchExitClient = async (seatingId: number) => {
  try {
    const credentials = {
      seatingId: seatingId,
    };

    const response = await adminAxios.patch('/exit', credentials);

    return response;
  } catch (error) {
    console.error('사용자 퇴장 실패: ', error);
  }
};
