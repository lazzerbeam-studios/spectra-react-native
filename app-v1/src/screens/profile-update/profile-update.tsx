import { View } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '~/src/components/ui/text';
import { Button } from '~/src/components/ui/button';
import { ChevronLeft } from '~/src/lib/icons/Chevron';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/src/components/ui/card';

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

          <Card className='w-full max-w-sm rounded-2xl p-6'>
            <CardTitle className='pb-2 text-center'>Profile Update</CardTitle>
          </Card>

        </View>
        <View className='native:hidden flex-[0.2]'></View>
      </View>

    </SafeAreaView>
  );
}

export default ProfileUpdateScreen;
