import { View } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '~/src/components/ui/text';
import { Button } from '~/src/components/ui/button';
import { ChevronLeft } from '~/src/lib/icons/Chevron';

const ProfileUpdateScreen = () => {
  return (
    <SafeAreaView className='flex h-full bg-secondary/30'>

      {router.canGoBack() && (
        <View className='ms-2 mt-2'>
          <Button variant={'link'} size={'icon'} onPress={() => router.back()}>
            <ChevronLeft className='color-foreground' size={50} strokeWidth={2}></ChevronLeft>
          </Button>
        </View>
      )}

      <View className='mb-44 flex w-full flex-1 flex-row'>
        <View className='native:hidden flex-[0.2]'></View>
        <View className='native:flex-1 flex-[0.6] items-center justify-center'>
          <Text>ProfileUpdateScreen</Text>
        </View>
        <View className='native:hidden flex-[0.2]'></View>
      </View>

    </SafeAreaView>
  );
}

export default ProfileUpdateScreen;
