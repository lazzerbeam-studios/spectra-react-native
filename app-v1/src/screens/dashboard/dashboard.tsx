import { Stack } from 'expo-router';
import { View, Text } from 'react-native';

import { DashboardProfile } from './dashboard-profile';

export const DashboardScreen = () => {
  return (
    <>

      <Stack.Screen
        options={{
          title: '',
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerLeft: () => <></>,
          headerRight: () => <DashboardProfile></DashboardProfile>,
        }}>
      </Stack.Screen>

      <View className='flex h-full w-full flex-1 flex-row bg-secondary/30'>
        <View className='hidden flex-[0.2] sm:flex'></View>
        <View className='flex-1 items-center sm:flex-[0.6]'>

          <Text className='mt-8 text-4xl text-foreground'>
            Dashboad
          </Text>

        </View>
        <View className='hidden flex-[0.2] sm:flex'></View>
      </View>

    </>
  );
};
