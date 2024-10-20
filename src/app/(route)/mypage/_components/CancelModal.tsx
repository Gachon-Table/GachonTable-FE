import AlertModal from '@/app/common/AlertModal';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface CancelModalProps {
  waitingId: string;
  setModal: (value: boolean) => void;
}

const CancelModal = ({ waitingId, setModal }: CancelModalProps) => {
  const [accessToken, setAccessToken] = useState<string | null>('');
  useEffect(() => {
    setAccessToken(localStorage.getItem('accessToken'));
  }, [accessToken]);
  const handleCancel = async () => {
    if (!accessToken) {
      console.error('로그인 후 이용해주세요!');
      return;
    }

    try {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/waiting/cancel`,
        {
          waitingId,
        },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        },
      );

      if (response.status === 200) {
        setModal(false);
        window.location.reload();
      } else {
        console.error('에러가 발생했습니다.', response);
        setModal(true);
      }
    } catch (error) {
      console.error('웨이팅 취소에 에러가 발생했습니다.', error);
      setModal(true);
    }
  };

  return (
    <AlertModal
      message="대기를 취소하시겠습니까?"
      hasSubmessage={true}
      submessage="확인 후 확인 버튼을 눌러주세요."
      onCancel={() => setModal(false)}
      onConfirm={handleCancel}
      waitingId={waitingId}
    />
  );
};

export default CancelModal;
