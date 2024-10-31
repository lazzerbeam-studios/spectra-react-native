import { Link } from 'expo-router';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm, Controller, useFormState } from 'react-hook-form';

import { Text } from '~/src/components/ui/text';
import { Input } from '~/src/components/ui/input';
import { Button } from '~/src/components/ui/button';
import { ChevronLeft } from '~/src/lib/icons/Chevron';

import { authApi } from '~/src/api';

const SignUpScreen = () => {
  const { control, handleSubmit } = useForm();
  const { errors } = useFormState({ control });

  const submit = (data: any) => {
    signIn(data.email, data.password)
  };

  const signIn = async (email: string, password: string) => {
    try {
      const fetchedPet = await authApi.signIn({
        email: email,
        password: password,
      });
      console.log(fetchedPet.data);
    } catch (error: any) {
      console.log(error.response.data);
    }
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

          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder='Email'
                keyboardType='email-address'
                className={`native:h-18 mb-6 h-16 w-96 rounded-full border-2 px-6 py-4 text-2xl ${(errors.email) ? 'border-red-500' : 'border-foreground'}`}
              />
            )}
            rules={{
              required: true,
              pattern: /^\S+@\S+$/i,
            }}
          ></Controller>

          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder='Password'
                secureTextEntry={true}
                className={`native:h-18 mb-6 h-16 w-96 rounded-full border-2 px-6 py-4 text-2xl ${errors.password ? 'border-red-500' : 'border-foreground'}`}
              />
            )}
            rules={{
              required: true,
            }}
          ></Controller>

          <Button className='native:h-20 mb-6 h-16 w-96 rounded-full' onPress={handleSubmit(submit)}>
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
