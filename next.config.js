const { withContentlayer } = require('next-contentlayer')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
module.exports = () => {
  const plugins = [withContentlayer, withBundleAnalyzer]
  return {
    output: 'export',
    ...plugins.reduce((acc, next) => next(acc), {
      reactStrictMode: true,
      pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
      eslint: {
        dirs: ['app', 'components', 'layouts', 'scripts'],
      },
      images: {
        unoptimized: true,
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'picsum.photos',
          },
        ],
      },
      webpack: (config, options) => {
        config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        })

        return config
      },
    }),
  }
}
