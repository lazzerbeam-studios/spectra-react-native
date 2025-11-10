import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { DashboardHeader } from './dashboard-header';

export const DashboardScreen = () => {
  return (
    <SafeAreaView>

      <DashboardHeader />

      <View className='hidden flex-[0.2] sm:flex'></View>
      <View className='flex-1 items-center sm:flex-[0.6]'>

        <Text className='mt-8 text-4xl text-foreground'>
          Dashboard
        </Text>

      </View>
      <View className='hidden flex-[0.2] sm:flex'></View>
    </SafeAreaView>
  );
};
