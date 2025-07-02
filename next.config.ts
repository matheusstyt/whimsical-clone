import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    styledComponents: true,
  },
  typescript: {
    ignoreBuildErrors: true, // Temporário para testar
  },
  output: 'standalone',
}

export default nextConfig