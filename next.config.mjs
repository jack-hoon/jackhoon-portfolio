/** @type {import('next').NextConfig} */

import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

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
  }
};

export default withNextIntl(nextConfig);
