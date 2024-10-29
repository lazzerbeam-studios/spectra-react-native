import { Link } from 'expo-router';
import { View } from 'react-native';

import { Text } from '~/src/components/ui/text';
import { Button } from '~/src/components/ui/button';

const NotFoundScreen = () => {
  return (
    <View className='flex-1 items-center justify-center'>

      <Text className='text-5xl'>404 Not Found</Text>

      <Link href='/' asChild>
        <Button className='mt-6 h-16 rounded-full px-12'>
          <Text className='text-3xl'>Update</Text>
        </Button>
      </Link>

    </View>
  );
}

export default NotFoundScreen;

