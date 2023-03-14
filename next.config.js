/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// @generated: @expo/next-adapter@2.1.52
// Learn more: https://docs.expo.io/guides/using-nextjs/

require('dotenv').config()

const {
  withExpo
} = require('@expo/next-adapter')
const withPlugins = require('next-compose-plugins')
const withFonts = require('next-fonts')
const withImages = require('next-images')
const withTM = require('next-transpile-modules')([
  'moti',
  '@motify/core',
  '@motify/components'
])

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = ((phase) => {

  const isProduction = phase === 'production'

  const _currentURL = isProduction ? process.env.API_URL : 'http://localhost:3000/api/'

  return {
    eslint: {
      ignoreDuringBuilds: true,
      dirs: ['source', 'server', 'pages']
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    // transpilePackages: [  'react-native-reanimated',
    //   'moti',
    //   '@motify/core',
    //   '@motify/components'
    // ],
    staticPageGenerationTimeout: 3600,
    images: {
      /*  loader: 'akamai',
      path: '/', */
      deviceSizes: [320, 640, 750, 828, 1080, 1280, 1920, 2048],
      disableStaticImages: true,
      domains: [
        'i.ytimg.com',
        'localhost',
        'loremflickr.com'
      ]
    },
    experimental: {
      forceSwcTransforms: true
    },
    generateBuildId: async () => {
      if (process.env.BUILD_ID) {
        return process.env.BUILD_ID
      } else {
        return `${new Date().getTime()}`
      }
    },
    distDir: '.next',
    env: {
      ELECTION_PERIOD: process.env.ELECTION_PERIOD,
      API_KEY: process.env.API_KEY,
      _currentURL,
      URL: process.env.URL,
    },
  }
})(process.env.NODE_ENV)

const config = withPlugins(
  [
    withTM,
    withFonts,
    withImages,
    [
      withExpo,
      {
        projectRoot: __dirname,
      }
    ]
  ],
  nextConfig)

module.exports = config