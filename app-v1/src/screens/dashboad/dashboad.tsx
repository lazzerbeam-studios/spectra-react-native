import { View } from 'react-native';
import { Stack } from 'expo-router';

import { Text } from '~/src/components/ui/text';

import { DashboadProfile } from './dashboad-profile';

export const DashboadScreen = () => {
  return (
    <>

      <Stack.Screen
        options={{
          title: '',
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerLeft: () => <></>,
          headerRight: () => <DashboadProfile></DashboadProfile>,
        }}>
      </Stack.Screen>

      <View className='flex h-full w-full flex-1 flex-row bg-secondary/30'>
        <View className='hidden flex-[0.2] sm:flex'></View>
        <View className='flex-1 items-center sm:flex-[0.6]'>

          <Text className='native:text-4xl mt-8 text-4xl'>
            Dashboad
          </Text>

        </View>
        <View className='hidden flex-[0.2] sm:flex'></View>
      </View>

    </>
  );
}
