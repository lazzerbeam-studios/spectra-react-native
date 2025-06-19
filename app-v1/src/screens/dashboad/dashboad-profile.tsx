import Ionicons from '@expo/vector-icons/Ionicons';

import { Link } from 'expo-router';
import { cssInterop } from 'nativewind';
import { TouchableOpacity, View } from 'react-native';

export const DashboadProfile = () => {
  cssInterop(Ionicons, {
    className: {
      target: "style",
    },
  });
  return (
    <Link href='/profile' asChild>
      <TouchableOpacity className='web:me-2'>
        <View className='h-12 w-12 items-center justify-center rounded-full bg-foreground'>
          <Ionicons className="color-background" name="person" size={24} />
        </View>
      </TouchableOpacity>
    </Link>
  );
}
