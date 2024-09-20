import pubAxios from '../../axios/pubAxios';
import { MenuItemProps } from '@/app/(route)/admin/_components/menu-management/MenuInputBox';

interface PubProps {
  thumbnails: string[];
  oneLiner: string;
  studentCard: boolean;
  menuRequests: MenuItemProps[];
}

export const savePubInfo = async (credentials: PubProps) => {
  try {
    const response = await pubAxios.patch('/manage', credentials);
    if (response.status === 200) {
      console.log('정보 업데이트 성공');
      alert('저장되었습니다.');
      return response.data;
    }
  } catch (error) {
    console.log('정보 업데이트 실패: ', error);
  }
};
