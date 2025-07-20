/** @type {import('next').NextConfig} */

const prefix =
  process.env.NODE_ENV === 'production' ? '/jackhoon-portfolio/' : '';

const basePath =
  process.env.NODE_ENV === 'production' ? '/jackhoon-portfolio' : '';

const nextConfig = {
  output: 'export',
  assetPrefix: prefix,
  basePath: basePath
}

export default nextConfig
