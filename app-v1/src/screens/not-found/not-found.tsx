import { Link } from 'expo-router';
import { Text, View } from 'react-native';

const NotFoundScreen = () => {
  return (
    <View>
      <Text className='text-foreground'>NotFoundScreen</Text>
      <Text>This screen doesn't exist.</Text>
      <Link href='/'>
        <Text>Go to home screen!</Text>
      </Link>
    </View>
  );
}

export default NotFoundScreen;

