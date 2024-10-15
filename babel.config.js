module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
        root: ['.'],
        alias: {
          '@service': './src/service',
          '@assets': './src/assets',
          '@components': './src/components',
          '@navigations': './src/navigations',
          '@screens': './src/screens',
          '@constants': './src/constants',
        },
      },
    ],
  ],
};
