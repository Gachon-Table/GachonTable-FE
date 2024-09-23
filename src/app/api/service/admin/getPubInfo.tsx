import pubAxios from '../../axios/pubAxios';
import { MenuItemProps } from '@/app/(route)/admin/_components/menu-management/MenuInputBox';

interface PubResponse {
  pub: {
    pubId: number;
    thumbnails?: string[];
    pubName: string;
    onLiner?: string;
    studentCard?: boolean;
    menu?: string;
    waitingCount: number;
    openStatus: boolean;
    waitingStatus: boolean;
  };
  menu: MenuItemProps[];
}

export const getPubInfo = async (): Promise<PubResponse> => {
  try {
    const pubId = localStorage.getItem('pubId');
    if (!pubId) {
      throw new Error('주점이 존재하지 않습니다.');
    }
    const response = await pubAxios.get<PubResponse>(`/${pubId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('주점 정보 가져오기 실패: ', error);
    throw error;
  }
};
