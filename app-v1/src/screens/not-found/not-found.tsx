import { Link } from 'expo-router';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '~/src/components/ui/text';
import { Button } from '~/src/components/ui/button';

export const NotFoundScreen = () => {
  return (
    <SafeAreaView>
      <View className='items-center'>
        <View className='w-full items-center px-6 pt-20 sm:w-1/3'>

          <Text className='mb-8 text-8xl font-black tracking-tighter'>
            404
          </Text>

          <View className='mb-8'>
            <Text variant='h1' className='mb-2 text-center text-3xl'>
              Page Not Found
            </Text>
            <Text variant='muted' className='max-w-sm text-center text-base leading-relaxed'>
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </Text>
          </View>

          <Link href='/' asChild>
            <Button size='xl' variant='default' className='w-full'>
              <Text>
                Go Home
              </Text>
            </Button>
          </Link>

        </View>
      </View>
    </SafeAreaView>
  );
};
