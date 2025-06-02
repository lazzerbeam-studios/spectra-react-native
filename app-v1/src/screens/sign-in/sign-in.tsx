import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm, Controller, useFormState } from 'react-hook-form';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { authApi } from '~/src/api';
import { errorGet } from '~/src/scripts/errors';
import { ProfileStore } from '~/src/stores/profile.store';

export const SignInScreen = () => {
  const { profileInit } = ProfileStore();

  const { control, handleSubmit } = useForm();
  const { errors } = useFormState({ control });

  const submit = (data: any) => {
    signIn(data.email, data.password);
  };

  const signIn = async (email: string, password: string) => {
    try {
      const response = await authApi.signInAPI({
        email: email,
        password: password,
      });
      await AsyncStorage.setItem('token', response.data.token);
      await profileInit();
      router.replace('/dashboad');
    } catch (errors: any) {
      const error = errorGet(errors.response.data);
    }
  };

  return (
    <SafeAreaView className='flex h-full'>

      <View className='ms-2 mt-2'>
        <Link href='/' asChild>
          <TouchableOpacity className='p-2'>
            <Ionicons name="chevron-back" size={50} color="black" />
          </TouchableOpacity>
        </Link>
      </View>

      <View className='mb-44 flex w-full flex-1 flex-row'>
        <View className='native:hidden flex-[0.2]'></View>
        <View className='native:flex-1 flex-[0.6] items-center justify-center'>

          <Text className='native:text-5xl mb-8 text-4xl font-bold text-foreground'>
            Sign In
          </Text>

          <Controller
            name='email'
            defaultValue={''}
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder='Email'
                keyboardType='email-address'
                className={`text-foreground native:h-18 mb-6 h-16 w-96 rounded-full border-2 px-6 py-4 text-2xl ${(errors.email) ? 'border-red-500' : 'border-foreground'}`}
              ></TextInput>
            )}
            rules={{
              required: true,
              pattern: /^\S+@\S+$/i,
            }}
          ></Controller>

          <Controller
            name='password'
            defaultValue={''}
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder='Password'
                secureTextEntry={true}
                className={`text-foreground native:h-18 mb-6 h-16 w-96 rounded-full border-2 px-6 py-4 text-2xl ${errors.password ? 'border-red-500' : 'border-foreground'}`}
              ></TextInput>
            )}
            rules={{
              required: true,
            }}
          ></Controller>

          <TouchableOpacity className='native:h-20 mb-6 h-16 w-96 items-center justify-center rounded-full bg-foreground' onPress={handleSubmit(submit)}>
            <Text className='native:text-3xl text-3xl text-background'>
              Sign In
            </Text>
          </TouchableOpacity>

        </View>
        <View className='native:hidden flex-[0.2]'></View>
      </View>

    </SafeAreaView>
  );
}
