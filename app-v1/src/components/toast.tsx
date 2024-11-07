import { View } from 'react-native';
import { Pressable } from 'react-native';
import { BaseToast, ErrorToast } from 'react-native-toast-message';

import { Text } from '~/src/components/ui/text';

export const toastConfig = {
  tomatoToast: (props: any) => (
    <View className='w-full max-w-sm rounded-md border-2 border-red-500 px-6'>
      <Text>{props.text1}</Text>
      <Text>{props.text2}</Text>
    </View>
  ),
};
