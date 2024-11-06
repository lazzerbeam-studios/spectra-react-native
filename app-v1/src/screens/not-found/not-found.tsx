import { Link } from 'expo-router';
import { View } from 'react-native';

import { Text } from '~/src/components/ui/text';
import { Button } from '~/src/components/ui/button';

export const NotFoundScreen = () => {
  return (
    <>
      <View className='flex-1 items-center justify-center'>

        <Text className='text-5xl'>
          404 Not Found
        </Text>

        <Link href='/' asChild>
          <Button className='native:h-20 mb-4 mt-8 h-16 rounded-full pe-8 ps-8'>
            <Text className='native:text-2xl text-2xl'>
              Go Home
            </Text>
          </Button>
        </Link>

      </View>
    </>
  );
}
