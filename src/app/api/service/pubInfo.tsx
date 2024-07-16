import pubAxios from '../axios/pubAxios';

interface PubData {
  pubId: number;
  pubName: string;
  queueing: number;
  // pubStatus: boolean;
}

export const pubInfo = async (): Promise<PubData> => {
  try {
    const pubId = localStorage.getItem('pubId');
    if (!pubId) {
      throw new Error('pubId not found in localStorage');
    }
    const response = await pubAxios.get(`/${pubId}`);
    const { pubId: id, pubName, queueing } = response.data.pub;
    return { pubId: id, pubName, queueing };
    // const { pubId: id, pubName, queueing, pubStatus } = response.data.pub;
    // return {
    //   pubId: Number(id),
    //   pubName,
    //   queueing,
    //   pubStatus: pubStatus ?? true
    // };
  } catch (error) {
    console.error('주점 정보 가져오기 실패: ', error);
    throw error;
  }
};
