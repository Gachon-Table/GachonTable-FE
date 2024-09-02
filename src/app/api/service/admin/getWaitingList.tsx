import adminAxios from '../../axios/adminAxios';

export const getWaitingList = async () => {
  try {
    const response = await adminAxios.get('/waitings');
    const waitingList = response.data.waitingInfos;
    console.log(waitingList);
    return waitingList;
  } catch (error) {
    console.error('대기열 조회 실패: ', error);
    throw error;
  }
};
