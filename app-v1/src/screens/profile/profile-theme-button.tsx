import AsyncStorage from '@react-native-async-storage/async-storage';

import { useColorScheme } from 'nativewind';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export const ProfileThemeButton = () => {
  const { colorScheme, setColorScheme } = useColorScheme();

  const changeTheme = () => {
    const colorTheme = (colorScheme === 'dark') ? 'light' : 'dark';
    setColorScheme(colorTheme);
    AsyncStorage.setItem('colorTheme', colorTheme);
  };

  return (
    <TouchableOpacity className='p-2 web:me-2' onPress={changeTheme}>
      {(colorScheme === 'dark') ? (
        <Ionicons name="moon" size={30} color="black" />
      ) : (
        <Ionicons name="sunny" size={30} color="black" />
      )}
    </TouchableOpacity>
  );
}
