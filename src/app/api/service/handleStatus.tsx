import adminAxios from '../axios/adminAxios';
import { getPubInfo } from './getPubInfo';

export const handleStatus = async () => {
  try {
    const data = await getPubInfo();
    const newStatus = !data.pub.openStatus;
    const response = await adminAxios.patch('/status', {
      openStatus: newStatus,
    });

    if (response.status === 200) {
      console.log('상태 변경 성공');
      return newStatus;
    } else {
      throw new Error('상태 변경 실패');
    }
  } catch (error) {
    console.error('대기 상태 변경 실패: ', error);
    throw error;
  }
};
