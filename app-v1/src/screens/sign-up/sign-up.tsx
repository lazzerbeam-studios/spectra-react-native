import { Link } from 'expo-router';
import { View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '~/src/components/ui/text';
import { Input } from '~/src/components/ui/input';
import { Button } from '~/src/components/ui/button';

import { ChevronLeft } from '~/src/lib/icons/Chevron';

const SignUpScreen = () => {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <SafeAreaView className='flex h-full'>

      <View className='ms-2 mt-2'>
        <Link href='/' push asChild>
          <Button variant={'link'} size={'icon'}>
            <ChevronLeft className='color-foreground' size={50} strokeWidth={2}></ChevronLeft>
          </Button>
        </Link>
      </View>

      <View className='mb-44 flex w-full flex-1 flex-row'>
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

          <Button className='native:h-20 mb-6 h-16 w-96 rounded-full' onPress={handleSubmit(onSubmit)}>
            <Text className='native:text-3xl text-3xl'>
              Sign Up
            </Text>
          </Button>

          <Controller
            name="email"
            defaultValue=""
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder='Email'
                keyboardType='email-address'
                className='mb-6 w-96 rounded-full border-2 border-foreground p-8 text-2xl text-blue-700 focus:text-blue-700'
              />
            )}
          />

        </View>
        <View className='native:hidden flex-[0.2]'></View>
      </View>

    </SafeAreaView>
  );
}

export default SignUpScreen;
