import { Link } from 'expo-router';
import { View } from 'react-native';

import { Text } from '~/src/components/ui/text';

const NotFoundScreen = () => {
  return (
    <View className='flex-1 items-center justify-center'>

      <Text className='text-5xl'>404 Not Found</Text>

      <Link href='/'>
        <Text>Go to home screen!</Text>
      </Link>

    </View>
  );
}

export default NotFoundScreen;

