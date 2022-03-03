/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// @generated: @expo/next-adapter@2.1.52
// Learn more: https://docs.expo.io/guides/using-nextjs/

const { withExpo } = require('@expo/next-adapter')
const withPlugins = require('next-compose-plugins')
const withFonts = require('next-fonts')
const withImages = require('next-images')
const withTM = require('next-transpile-modules')([
  'moti',
  '@motify/core',
  '@motify/components',
  // '@motify/interactions' // uncomment if you use these
  // you can add other modules that need traspiling here
])

const nextConfig = {
  dynamicAssetPrefix: true,
  projectRoot: __dirname,
  path: '/',
  generateBuildId: async () => {
    if (process.env.BUILD_ID) {
      return process.env.BUILD_ID
    } else {
      return `${new Date().getTime()}`
    }
  },
  distDir: '.next',
}

const config = withPlugins(
  [withTM, withFonts, withImages, withExpo],
  nextConfig
)

module.exports = config
