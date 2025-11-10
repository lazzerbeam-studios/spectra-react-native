import { View } from 'react-native';
import { router } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';

import { Icon } from '~/src/components/ui/icon';
import { Button } from '~/src/components/ui/button';

export const SignUpHeader = () => {
  const goHome = () => {
    router.push('/');
  };

  return (
    <View className='h-16 flex-row items-center'>
      <View className='ms-2'>
        <Button onPress={goHome} className='w-8 bg-transparent shadow-transparent hover:bg-transparent active:bg-transparent'>
          <Icon size={48} as={ChevronLeft} className='web:!h-12 web:!w-12' />
        </Button>
      </View>
      <View className='flex-1'></View>
    </View>
  );
};
