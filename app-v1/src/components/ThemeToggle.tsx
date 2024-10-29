import { Pressable, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { cn } from '~/src/lib/utils';
import { Sun } from '~/src/lib/icons/Sun';
import { MoonStar } from '~/src/lib/icons/MoonStar';
import { useColorScheme } from '~/src/lib/useColorScheme';
import { setAndroidNavigationBar } from '~/src/lib/setAndroidNavigationBar';

export function ThemeToggle() {
  const { isDarkColorScheme, setColorScheme } = useColorScheme();
  return (
    <Pressable
      onPress={() => {
        const theme = isDarkColorScheme ? 'light' : 'dark';
        setColorScheme(theme);
        setAndroidNavigationBar(theme);
        AsyncStorage.setItem('theme', theme);
      }}
      className='web:ring-offset-background web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2'
    >
      {({ pressed }) => (
        <View
          className={cn(
            'flex-1 aspect-square pt-0.5 justify-center items-start web:px-5',
            pressed && 'opacity-70'
          )}
        >
          {isDarkColorScheme ? (
            <MoonStar className='text-foreground' size={23} strokeWidth={1.25} />
          ) : (
            <Sun className='text-foreground' size={24} strokeWidth={1.25} />
          )}
        </View>
      )}
    </Pressable>
  );
}
