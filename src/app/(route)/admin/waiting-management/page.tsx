export default function WaitingManagement() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-deep-cove pt-4">
      <div className="w-full max-w-screen-xl rounded-lg bg-white shadow-md">
        <div className="h-[505px] p-4">
          <div className="mb-4 flex flex-col items-center justify-between rounded-lg border p-4 tablet:flex-row">
            <div className="mb-4 flex items-center space-x-4 tablet:mb-0">
              <div className="text-lg font-bold mobile:text-2xl">1</div>
              <div>
                <div className="text-base font-bold mobile:text-xl">무한이</div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm mobile:text-base">17:38</span>
                  <span className="text-sm mobile:text-base">4명</span>
                  <span className="text-sm mobile:text-base">1234</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex flex-col items-center space-y-2">
                <img
                  src="/images/bell-icon.png"
                  alt="고객 호출 아이콘"
                  className="h-7 mobile:h-8 tablet:h-9"
                />
                <span className="text-xs font-light mobile:text-base">
                  고객 호출
                </span>
              </div>
              <div className="h-full border-r border-black"></div>
              <div className="flex flex-col items-center space-y-2">
                <img
                  src="/images/check-icon.png"
                  alt="착석 완료 아이콘"
                  className="h-7 mobile:h-8 tablet:h-9"
                />
                <span className="text-xs font-light mobile:text-base">
                  착석 완료
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex w-full max-w-screen-xl flex-col items-center px-4 tablet:flex-row">
        <div className="mt-4 flex w-full max-w-screen-xl flex-col items-center justify-center px-4 tablet:flex-row">
          <button className="bg-sunglo mb-4 w-full rounded-lg py-3 text-white tablet:mx-2 tablet:mb-0 tablet:flex-1">
            현장 줄서기
          </button>
          <button className="bg-sunglo w-full rounded-lg py-3 text-white tablet:mx-2 tablet:flex-1">
            대기 마감
          </button>
        </div>
      </div>
    </div>
  );
}
