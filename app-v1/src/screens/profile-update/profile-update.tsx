import { Link } from 'expo-router';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '~/src/components/ui/text';
import { Button } from '~/src/components/ui/button';
import { ChevronLeft } from '~/src/lib/icons/Chevron';

const ProfileUpdateScreen = () => {
  return (
    <SafeAreaView className='flex h-full bg-secondary/30'>

      <View className='ms-2 mt-2'>
        <Link href='/' asChild>
          <Button variant={'link'} size={'icon'}>
            <ChevronLeft className='color-foreground' size={50} strokeWidth={2}></ChevronLeft>
          </Button>
        </Link>
      </View>

      <Text>ProfileUpdateScreen</Text>

    </SafeAreaView>
  );
}

export default ProfileUpdateScreen;
