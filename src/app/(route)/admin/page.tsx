export default async function AdminLogin() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="mb-8">
        <img
          src="/images/logo2.png"
          alt="캐릭터 로고"
          className="laptop:h-78 mobile:h-50 tablet:h-76 desktop:h-78"
        />
        <div className="text-center text-3xl font-bold text-blue-500 mobile:text-3xl tablet:text-3xl laptop:text-4xl desktop:text-5xl">
          관리자 로그인
        </div>
      </div>

      <div className="w-full max-w-xs mobile:max-w-sm tablet:max-w-md laptop:max-w-lg desktop:max-w-xl">
        <div className="mb-4">
          <label
            htmlFor="id"
            className="mb-2 block font-extralight text-blue-500"
          >
            ID
          </label>
          <input
            id="id"
            type="text"
            className="w-full rounded-md border border-blue-500 px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 mobile:py-4"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="mb-2 block font-extralight text-blue-500"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full rounded-md border border-blue-500 px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 mobile:py-4"
          />
        </div>
        <button className="w-full rounded-md bg-blue-500 py-3 font-light text-white transition-colors duration-300 hover:bg-blue-600 mobile:py-4">
          Login
        </button>
      </div>
    </div>
  );
}
