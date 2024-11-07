import { View } from 'react-native';
import { Pressable } from 'react-native';
import { BaseToast, ErrorToast } from 'react-native-toast-message';

import { Text } from '~/src/components/ui/text';

export const toastConfig = {
  tomatoToast: (props: any) => (
    <View>

      <Text>{props.text1}</Text>
      <Text>{props.text2}</Text>

    </View>
  ),
};
