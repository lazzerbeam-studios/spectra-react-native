import { useColorScheme } from 'nativewind';
import { View, Pressable } from 'react-native';
import { Moon, Sun } from 'lucide-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Icon } from '~/src/components/ui/icon';
import { BackButton } from '~/src/components/back-button';
import { AndroidNavigationBarSet } from '~/src/scripts/android-navigation-bar';

export const ProfileUpdateHeader = () => {
  const { colorScheme, setColorScheme } = useColorScheme();

  const changeTheme = () => {
    const colorTheme = (colorScheme === 'dark') ? 'light' : 'dark';
    setColorScheme(colorTheme);
    AndroidNavigationBarSet(colorTheme);
    AsyncStorage.setItem('colorScheme', colorTheme);
  };

  return (
    <View className='h-16 flex-row items-center'>
      <View className='ms-2'>
        <BackButton />
      </View>
      <View className='flex-1'></View>
      <View className='me-2'>
        <Pressable onPress={changeTheme}>
          {(colorScheme === 'dark') ? (
            <Icon as={Sun} size={48} />
          ) : (
            <Icon as={Moon} size={48} />
          )}
        </Pressable>
      </View>
    </View>
  );
};
