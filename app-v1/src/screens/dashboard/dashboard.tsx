import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '~/src/components/ui/text';
import { DashboardHeader } from './dashboard-header';

export const DashboardScreen = () => {
  return (
    <SafeAreaView>

      <DashboardHeader />

      <View className='items-center'>
        <View className='w-full sm:w-1/3'>

          <Text variant='h1'>
            Dashboard
          </Text>

        </View>
      </View>

    </SafeAreaView>
  );
};
