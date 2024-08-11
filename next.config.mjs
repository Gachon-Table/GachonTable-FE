/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true, // Next.js에서 SWC를 사용하여 최적화합니다.
    compiler: {
      styledComponents: true, // SWC 컴파일러를 통해 styled-components를 사용합니다.
    },
    webpack(config) {
      // SVG 파일을 처리하기 위한 rule 추가
      config.module.rules.push({
        test: /\.svg$/i,
        use: [
          {
            loader: '@svgr/webpack',
          },
        ],
      });
  
      return config;
    },
  };
  
  export default nextConfig;
  