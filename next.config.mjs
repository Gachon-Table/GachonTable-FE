// import { tree } from 'next/dist/build/templates/app-page';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
      {
        protocol: 'https',
        hostname: 'gachontable.s3.ap-northeast-2.amazonaws.com',
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: true, 
  compiler: {
    styledComponents: true, 
  },
  webpack(config) {
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
