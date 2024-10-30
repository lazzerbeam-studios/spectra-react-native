import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '~/src/components/ui/text';
import { Input } from '~/src/components/ui/input';
import { Button } from '~/src/components/ui/button';

const SignUpScreen = () => {
  return (
    <SafeAreaView className='flex flex-1 flex-col items-center justify-center'>

      <Text className='mb-24 text-4xl font-bold'>
        Sign Up
      </Text>

      <Input placeholder='Email' keyboardType='email-address' className='mb-4 w-80'></Input>

    </SafeAreaView>
  )
}

export default SignUpScreen
