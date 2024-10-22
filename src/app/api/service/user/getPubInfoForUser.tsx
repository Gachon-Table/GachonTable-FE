import userPubAxios from '@/app/api/axios/userPubAxios';

export const getPubInfoForUser = async (pubId: string) => {
  try {
    const response = await userPubAxios.get(`/${pubId}`);

    return response.data;
  } catch (error) {
    console.error('주점 정보 가져오기 실패: ', error);
    throw error;
  }
};
