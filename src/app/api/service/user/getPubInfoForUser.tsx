import pubAxios from '../../axios/pubAxios';

export const getPubInfoForUser = async (pubId: string) => {
  try {
    const response = await pubAxios.get(`/${pubId}`);

    return response.data;
  } catch (error) {
    console.error('주점 정보 가져오기 실패: ', error);
    throw error;
  }
};
