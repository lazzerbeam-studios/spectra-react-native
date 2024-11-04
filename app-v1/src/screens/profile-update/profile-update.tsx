import { View } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '~/src/components/ui/text';
import { Button } from '~/src/components/ui/button';
import { ChevronLeft } from '~/src/lib/icons/Chevron';

const ProfileUpdateScreen = () => {
  return (
    <SafeAreaView className='flex h-full bg-secondary/30'>

      <View className='ms-2 mt-2'>
        <Button variant={'link'} size={'icon'} onPress={() => router.back()}>
          <ChevronLeft className='color-foreground' size={50} strokeWidth={2}></ChevronLeft>
        </Button>
      </View>

      <Text>ProfileUpdateScreen</Text>

    </SafeAreaView>
  );
}

export default ProfileUpdateScreen;
