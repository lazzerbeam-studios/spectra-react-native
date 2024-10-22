import '../../tamagui-web.css'

import { Stack } from 'expo-router'
import { TamaguiProvider } from 'tamagui'
import { useColorScheme } from 'react-native'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'

import { tamaguiConfig } from '../../tamagui.config'

export default function RootLayout() {
  const colorScheme = useColorScheme()
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name='index' />
        </Stack>
      </ThemeProvider>
    </TamaguiProvider>
  )
}
