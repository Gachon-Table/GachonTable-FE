/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true, // Next.js에서 SWC를 사용하여 최적화합니다.
    compiler: {
      styledComponents: true, // SWC 컴파일러를 통해 styled-components를 사용합니다.
    },
  };
  
  export default nextConfig;
  