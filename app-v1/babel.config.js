module.exports = (api) => {
  api.cache(true)
  return {
    presets: [
      'babel-preset-expo',
    ],
    plugins: [
      [
        '@tamagui/babel-plugin',
        {
          logTimings: true,
          components: ['tamagui'],
          config: './tamagui.config.ts',
          disableExtraction: process.env.NODE_ENV === 'development',
        },
      ],
      'react-native-reanimated/plugin',
    ],
  }
}
