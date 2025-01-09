import type { NextConfig } from 'next'

const config: NextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  },
  experimental: {
    mdxRs: true,
    turbo: {
      rules: {
        '*.mdx': ['@mdx-js/loader']
      }
    }
  },
}

export default config
