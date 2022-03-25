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

const nextConfig = ((phase) => {
  
  const isProduction = phase === 'production'
  const isDevelopment = phase === 'development'

  const API_URL = isProduction ? process.env.API_URL : 'http://localhost:8000/api'

  return {
    dynamicAssetPrefix: true,
    projectRoot: __dirname,
    generateBuildId: async () => {
      if (process.env.BUILD_ID) {
        return process.env.BUILD_ID
      } else {
        return `${new Date().getTime()}`
      }
    },
    distDir: '.next',
    // webpack configurado pra moti e react-reanimated v2
    webpack: (config, other) => {
      return {
        ...config,
        node: {
          Buffer: false,
          process: false,
        },
      }
    },
    env: {
      API_KEY: process.env.API_KEY,
      API_URL: process.env.API_URL,
    }
  }
})(process.env.NODE_ENV)

const config = withPlugins([withFonts, withImages, withExpo], nextConfig)

module.exports = config