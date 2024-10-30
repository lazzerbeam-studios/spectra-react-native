import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '~/src/components/ui/text';
import { Input } from '~/src/components/ui/input';
import { Button } from '~/src/components/ui/button';

const SignUpScreen = () => {
  return (
    <SafeAreaView className='flex flex-1 flex-col items-center justify-center'>

      <View className='flex w-full flex-row'>
        <Text>Yeah</Text>
      </View>

      <View className='flex w-full flex-row'>
        <View className='native:hidden flex-[0.2]'></View>
        <View className='native:flex-1 flex-[0.6] items-center justify-center'>

          <Text className='native:text-5xl mb-8 text-4xl font-bold'>
            Sign Up
          </Text>

          <Input
            placeholder='Email'
            keyboardType='email-address'
            className='mb-6 w-96 rounded-full border-2 border-foreground p-8 text-2xl'
          />

          <Input
            placeholder='Password'
            secureTextEntry={true}
            className='mb-6 w-96 rounded-full border-2 border-foreground p-8 text-2xl'
          />

          <Button className='native:h-20 mb-6 h-16 w-96 rounded-full'>
            <Text className='native:text-3xl text-3xl'>
              Sign Up
            </Text>
          </Button>

        </View>
        <View className='native:hidden flex-[0.2]'></View>
      </View>

    </SafeAreaView>
  );
}

export default SignUpScreen;
