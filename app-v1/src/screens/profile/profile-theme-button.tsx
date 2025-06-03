import AsyncStorage from '@react-native-async-storage/async-storage';

import { useColorScheme } from 'nativewind';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import { setAndroidNavigationBar } from '~/src/scripts/android-navigation-bar';

export const ProfileThemeButton = () => {
  const { colorScheme, setColorScheme } = useColorScheme();

  const changeTheme = () => {
    const colorTheme = (colorScheme === 'dark') ? 'light' : 'dark';
    setColorScheme(colorTheme);
    setAndroidNavigationBar(colorTheme);
    AsyncStorage.setItem('colorScheme', colorTheme);
  };

  return (
    <TouchableOpacity className='p-2 web:me-2' onPress={changeTheme}>
      {(colorScheme === 'dark') ? (
        <Ionicons className="color-foreground" name="moon" size={30} />
      ) : (
        <Ionicons className="color-foreground" name="sunny" size={30} />
      )}
    </TouchableOpacity>
  );

}
