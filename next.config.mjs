/** @type {import('next').NextConfig} */

// @ts-check
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants'
 
export default (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    assetPrefix: isDev ? undefined : 'https://jack-hoon.github.io/jackhoon-portfolio/',
  }
  return nextConfig
}
