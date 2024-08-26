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
    await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/waiting/cancel`, {
      waitingId,
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    setModal(false);
  };
  return (
    <div className="absolute my-auto h-full w-full max-w-[500px]">
      <div
        className="flex h-full w-full items-center justify-center"
        onClick={() => setModal(false)}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="flex h-[30vh] w-[80%] flex-col items-center justify-center gap-2 rounded-[0.5rem] border-2 border-gray-300 bg-white py-4"
        >
          <div className="text-xl font-bold">줄서기 취소 하시겠습니까?</div>
          <div className="text-gray-400">
            맞는지 확인 후 확인 버튼을 눌러 주세요
          </div>
          <div className="mt-[2rem] flex w-full justify-evenly">
            <div
              className="cursor-pointer rounded-[1rem] bg-[#f5f5f5] px-6 py-4"
              onClick={() => setModal(false)}
            >
              취소
            </div>
            <div
              className="cursor-pointer rounded-[1rem] bg-[#e87567] px-6 py-4 text-white"
              onClick={handleCancel}
            >
              확인
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelModal;
