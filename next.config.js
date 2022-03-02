/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// @generated: @expo/next-adapter@2.1.52
// Learn more: https://docs.expo.io/guides/using-nextjs/

const { withExpo } = require('@expo/next-adapter')
const withFonts = require('next-fonts')
const withImages = require('next-images')

const nextConfig = {
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
}

module.exports = withExpo(withImages(withFonts(nextConfig)))
