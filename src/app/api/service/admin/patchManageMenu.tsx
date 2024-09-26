import adminAxios from '@/app/api/axios/adminAxios';

interface MenuRequest {
  menuId?: number | null;
  menuName: string;
  price: string;
  oneLiner: string;
  thumbnail: string;
}

interface UpdatedPubData {
  thumbnails: string[];
  menuRequests: MenuRequest[];
}

export const patchManageMenu = async (UpdatedPubData: UpdatedPubData) => {
  try {
    const response = await adminAxios.patch('/manage', UpdatedPubData);
    if (response.status === 200) {
      console.log('정보 업데이트 성공');
      alert('저장되었습니다.');
      return response.data;
    }
    return response;
  } catch (error) {
    console.error('호출 실패: ', error);
    throw error;
  }
};
