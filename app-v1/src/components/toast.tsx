import { View } from 'react-native';

import { Text } from '~/src/components/ui/text';
import { CircleAlert } from '~/src/icons/icons';

export const ToastConfig = {
  error: ({ text1, text2, props }: { text1?: string; text2?: string; props: any }) => (
    <View className='w-full max-w-sm rounded-md border-2 border-red-500 bg-background p-4'>
      <View className='flex-row'>
        <View className='me-3 mt-0.5'>
          <CircleAlert className='text-red-500'></CircleAlert>
        </View>
        <View className='flex-1'>
          <Text className='native:text-xl mb-1 text-xl font-bold'>{text1}</Text>
          <Text className='native:text-base text-lg'>{text2}</Text>
        </View>
      </View>
    </View>
  ),
};
