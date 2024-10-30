/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
import { withSentryConfig } from "@sentry/nextjs";

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
  reactStrictMode: false,
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

export default withSentryConfig(
  nextConfig,
  {
    silent: true,
    org: "LUPG",  
    project: "gachontable-fe",  
    authToken: process.env.SENTRY_AUTH_TOKEN, 
    widenClientFileUpload: true,              
    hideSourceMaps: true,                   
    disableLogger: true,                    
    automaticVercelMonitors: true,  
  },

);