import { Link } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const NotFoundScreen = () => {
  return (
    <SafeAreaView className='flex-1'>
      <View className='flex-1 items-center justify-center'>

        <Text className='text-3xl color-foreground'>
          404 Not Found
        </Text>

        <Link href='/' asChild>
          <TouchableOpacity className='mb-4 mt-8 rounded-full bg-foreground px-8 py-4'>
            <Text className='text-2xl color-background'>
              Go Home
            </Text>
          </TouchableOpacity>
        </Link>

      </View>
    </SafeAreaView>
  );
};
