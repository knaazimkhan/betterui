import type { NextConfig } from 'next'

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https' as const,
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  },
}

export default config
