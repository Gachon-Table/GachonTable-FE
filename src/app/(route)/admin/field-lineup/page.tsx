import NumberKeypad from '../_components/NumberKeypad';

export default function FieldLineUp() {
  return (
    <div className="flex h-[768px] w-[1024px] flex-row items-center justify-center">
      {/* Left Section */}
      <div className="flex h-full w-1/2 flex-col items-center justify-center bg-deep-cove text-white">
        <div className="flex flex-col items-center">
          <img src="/images/logo3.png" alt="Logo" width={100} height={100} />
          <p className="mt-4 text-center text-lg">
            휴대폰 번호를 입력하시면 <br />
            카카오톡으로 웨이팅 현황을 <br />
            알림으로 알려드려요
          </p>
          <p className="mt-8 text-center text-2xl font-bold">
            경제학과 이코노미더머니
          </p>
          <p className="mt-4 text-center text-xl">
            현재 대기 <span className="text-4xl text-red-500">5</span>팀
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex h-full w-1/2 flex-col bg-white">
        <NumberKeypad />
      </div>
    </div>
  );
}
