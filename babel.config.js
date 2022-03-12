// @generated: @expo/next-adapter@2.1.52
// Learn more: https://docs.expo.dev/guides/using-nextjs/

module.exports = {
    presets: ['@expo/next-adapter/babel'],
    plugins: [
      "@babel/plugin-transform-modules-commonjs",
      [
        'module-resolver',
        {
          alias: {
            '@/assets': './src/assets',
            '@/components': './src/components',
            '@/context': './src/context',
            '@/theme': './src/theme',
            '@/data': './src/data',
            '@/forms': './src/forms',
            '@/global': './src/global',
            '@/hooks': './src/hooks',
            '@/modules': './src/modules',
            '@/navigations': './src/navigations',
            '@/redux': './src/redux',
            '@/screens': './src/screens',
            '@/services': './src/services',
            '@/types': './src/types',
            '@/utils': './src/utils',
            '@/animations': './src/animations',
          },
        },
      ],
    ],
  };
