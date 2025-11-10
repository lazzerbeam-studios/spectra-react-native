import { router } from 'expo-router';
import { View, Pressable } from 'react-native';
import { ChevronLeft } from 'lucide-react-native';

import { Icon } from '~/src/components/ui/icon';

export const PasswordForgotHeader = () => {
  const goSignIn = () => {
    router.push('/sign-in');
  };

  return (
    <View className='h-16 flex-row items-center'>
      <View className='ms-2'>
        <Pressable onPress={goSignIn}>
          <Icon as={ChevronLeft} size={48} />
        </Pressable>
      </View>
      <View className='flex-1'></View>
    </View>
  );
};
