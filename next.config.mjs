/** @type {import('next').NextConfig} */

const prefix = process.env.NODE_ENV === 'production' ? 'https://jack-hoon.github.io/jackhoon-portfolio/' : ''

const nextConfig = {
  output: 'export',
  assetPrefix: prefix
};

export default nextConfig;
