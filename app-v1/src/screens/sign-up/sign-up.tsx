import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '~/src/components/ui/text';
import { Input } from '~/src/components/ui/input';
import { Button } from '~/src/components/ui/button';

const SignUpScreen = () => {
  return (
    <SafeAreaView className='flex flex-1 flex-col items-center justify-center'>

      <View className='flex w-full flex-row'>
        <View className='native:hidden flex-[0.2]'></View>
        <View className='native:flex-1 flex-[0.6] items-center justify-center'>

          <Text className='native:text-5xl mb-8 text-4xl font-bold'>
            Sign Up
          </Text>

          <Input
            placeholder='Email'
            keyboardType='email-address'
            className='rounded-full border-2 border-foreground p-6 text-4xl'
          />

        </View>
        <View className='native:hidden flex-[0.2]'></View>
      </View>

    </SafeAreaView>
  )
}

export default SignUpScreen
