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
  const isDevelopment = phase === 'development'

  const _currentURL = isProduction ? process.env.API_URL : 'http://host.docker.internal:8000/api/'

  return {
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
    typescript:{
      ignoreBuildErrors: true,
    },
    images:{
      deviceSizes: [320, 640, 750, 828, 1080, 1280, 1920, 2048],
      disableStaticImages: true,
      domains: [
        'i.ytimg.com'
      ]
    },
    
    httpAgentOptions: new (require('https').Agent)({
      rejectUnauthorized: false
    }),
    dynamicAssetPrefix: true,
    generateBuildId: async () => {
      if (process.env.BUILD_ID) {
        return process.env.BUILD_ID
      } else {
        return `${new Date().getTime()}`
      }
    },
    distDir: '.next',
    webpack5: true,
    // webpack configurado pra moti e react-reanimated v2
    env: {
      API_KEY: process.env.API_KEY,
      _currentURL
    }
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