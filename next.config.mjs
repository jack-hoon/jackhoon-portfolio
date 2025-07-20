/** @type {import('next').NextConfig} */

// @ts-check
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants'
 
export default (phase) => {
  const isProd = process.env.NODE_ENV === 'production'
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    assetPrefix: isProd ? 'https://jack-hoon.github.io/jackhoon-portfolio/' : undefined,
  }
  return nextConfig
}
