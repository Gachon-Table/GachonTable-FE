import adminAxios from '../../axios/adminAxios';

export const getSeatingList = async () => {
  try {
    const response = await adminAxios.get('/seatings');
    const seatingList = response.data.seatings;
    console.log(seatingList);
    return seatingList;
  } catch (error) {
    console.error('테이블 현황 조회 실패: ', error);
    throw error;
  }
};
