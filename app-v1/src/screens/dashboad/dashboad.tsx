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

      <View>
        <Text>dashboad</Text>
      </View>

    </>
  );
}
