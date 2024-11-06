import { View } from 'react-native';
import { Stack } from 'expo-router';

import { Text } from '~/src/components/ui/text';

export const DashboadScreen = () => {
  return (
    <>

      <Stack.Screen
        options={{
          title: '',
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerLeft: () => <></>,
        }}>
      </Stack.Screen>

      <View className='flex h-full w-full flex-1 flex-row bg-secondary/30'>
        <View className='hidden flex-[0.2] sm:flex'></View>
        <View className='flex-1 items-center sm:flex-[0.6]'>

          <Text>Dashboad</Text>

        </View>
        <View className='hidden flex-[0.2] sm:flex'></View>
      </View>

    </>
  );
}
