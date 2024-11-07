import { View } from 'react-native';
import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm, Controller, useFormState } from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { authApi } from '~/src/api';
import { ChevronLeft } from '~/src/icons/icons';
import { Text } from '~/src/components/ui/text';
import { Input } from '~/src/components/ui/input';
import { Button } from '~/src/components/ui/button';
import { ProfileStore } from '~/src/stores/profile.store';

import { errorGet } from '~/src/scripts/errors';

import Toast from 'react-native-toast-message';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const SignInScreen = () => {
  const { profileInit } = ProfileStore();

  const { control, handleSubmit } = useForm();
  const { errors } = useFormState({ control });

  const insets = useSafeAreaInsets();

  const submit = (data: any) => {
    signIn(data.email, data.password);
  };

  const signIn = async (email: string, password: string) => {
    try {
      const response = await authApi.signIn({
        email: email,
        password: password,
      });
      await AsyncStorage.setItem('token', response.data.token);
      await profileInit();
      router.replace('/dashboad');
    } catch (errors: any) {
      const error = errorGet(errors.response.data);

      console.log('error');
      console.log(error);

      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: error,
        visibilityTime: 45000,
        topOffset: insets.top === 0 ? 24 : insets.top + 12,
        props: {
          text1: 'Error',
          text2: error,
        },
      });

    }
  };

  return (
    <SafeAreaView className='flex h-full'>

      <View className='ms-2 mt-2'>
        <Link href='/' asChild>
          <Button variant={'link'} size={'icon'}>
            <ChevronLeft className='color-foreground' size={50} strokeWidth={2}></ChevronLeft>
          </Button>
        </Link>
      </View>

      <View className='mb-44 flex w-full flex-1 flex-row'>
        <View className='native:hidden flex-[0.2]'></View>
        <View className='native:flex-1 flex-[0.6] items-center justify-center'>

          <Text className='native:text-5xl mb-8 text-4xl font-bold'>
            Sign In
          </Text>

          <Controller
            name='email'
            defaultValue={'yoda@yahoo.com'}
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
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
            name='password'
            defaultValue={'admin'}
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
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
              Sign In
            </Text>
          </Button>

        </View>
        <View className='native:hidden flex-[0.2]'></View>
      </View>

    </SafeAreaView>
  );
}
