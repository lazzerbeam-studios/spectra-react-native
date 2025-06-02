import { Stack } from 'expo-router';
import { View, Text } from 'react-native';

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

      <View className='bg-secondary/30 flex h-full w-full flex-1 flex-row'>
        <View className='hidden flex-[0.2] sm:flex'></View>
        <View className='flex-1 items-center sm:flex-[0.6]'>

          <Text className='native:text-4xl mt-8 text-4xl text-foreground'>
            Dashboad
          </Text>

        </View>
        <View className='hidden flex-[0.2] sm:flex'></View>
      </View>

    </>
  );
}
