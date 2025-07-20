/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/jackhoon-portfolio/' : '',
  basePath: isProd ? '/jackhoon-portfolio' : '',
  output: 'export',
  publicRuntimeConfig: {
    basePath: isProd ? '/jackhoon-portfolio' : '',
  }
};

export default nextConfig;
