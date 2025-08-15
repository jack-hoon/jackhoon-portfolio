/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/jackhoon-portfolio/' : '',
  basePath: isProd ? '/jackhoon-portfolio' : '',
  env: {
    BASE_PATH: isProd ? '/jackhoon-portfolio' : '',
  },
  i18n: {
    locales: ['en', 'ko'],
    defaultLocale: 'en',
  }
};

export default nextConfig;
