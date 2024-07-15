import pubAxios from '../axios/pubAxios';

interface MenuItem {
  menuName: string;
  price: string;
  oneLiner: string;
}

interface PubProps {
  thumbnails: string[];
  oneLiner: string;
  studentCard: boolean;
  menuRequests: MenuItem[];
}

export const savePubInfo = async (credentials: PubProps) => {
  try {
    const response = await pubAxios.post('/manage', credentials);

    return response.data;
  } catch (error) {
    console.log('정보 업데이트 실패: ', error);
  }
};
