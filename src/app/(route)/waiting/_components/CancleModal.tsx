import axios from 'axios';
import React from 'react';

interface CancelModalProps {
  waitingId: string;
  setModal: (value: boolean) => void;
}

const CancelModal = ({ waitingId, setModal }: CancelModalProps) => {
  //   const [accessToken, setAccessToken] = useState<string | null>('');
  //   useEffect(() => {
  //     setAccessToken(localStorage.getItem('accessToken'));
  //   }, [accessToken]);

  const handleCancel = async () => {
    //웨이팅 취소 로직 (기존 취소 api인지는 모름)
    await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/waiting/cancel`, {
      waitingId,
    });

    setModal(false);
  };
  return (
    <div className="max-w-[500px absolute my-auto h-full w-full">
      <div
        className="flex h-full w-full items-center justify-center"
        onClick={() => setModal(false)}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="flex w-4/6 flex-col items-center justify-center gap-2 rounded-2xl bg-[#FEFEFF] py-4 shadow-md shadow-gray-300/50"
        >
          <div className="text-md font-medium">줄서기 취소 하시겠습니까?</div>
          <div className="text-sm font-light text-[#52575C]">
            맞는지 확인 후 확인 버튼을 눌러 주세요
          </div>
          <div className="mt-3 flex w-full justify-evenly">
            <div
              className="cursor-pointer rounded-lg bg-[#f5f5f5] px-6 py-4"
              onClick={() => setModal(false)}
            >
              취소
            </div>
            <div
              className="cursor-pointer rounded-lg bg-[#e87567] px-6 py-4 text-white"
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
