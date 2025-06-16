import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm, Controller, useFormState } from 'react-hook-form';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { authApi } from '~/src/api';
import { errorGet } from '~/src/scripts/errors';
import { ProfileStore } from '~/src/stores/profile.store';

export const SignUpScreen = () => {
  const { profileInit } = ProfileStore();

  const { control, handleSubmit } = useForm();
  const { errors } = useFormState({ control });

  const submit = (data: any) => {
    signUp(data.email, data.password);
  };

  const signUp = async (email: string, password: string) => {
    try {
      const response = await authApi.signUpAPI({
        email: email,
        password: password,
      });
      await AsyncStorage.setItem('token', response.data.token);
      await profileInit();
      router.replace('/dashboad');
    } catch (errors: any) {
      const error = errorGet(errors.response.data);
      console.log(error);
    }
  };

  return (
    <SafeAreaView className='flex h-full'>

      <View className='ms-2 mt-2'>
        <Link href='/' asChild>
          <TouchableOpacity className='p-2'>
            <Ionicons className="color-foreground" name="chevron-back" size={35} />
          </TouchableOpacity>
        </Link>
      </View>

      <View className='mb-44 flex w-full flex-1 flex-row'>
        <View className='native:hidden flex-[0.2]'></View>
        <View className='native:flex-1 flex-[0.6] items-center justify-center'>

          <Text className='native:text-5xl mb-8 text-4xl font-bold text-foreground'>
            Sign Up
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
                className='native:h-18 mb-2 h-16 w-96 rounded-full border-2 border-foreground px-6 py-4 text-2xl text-foreground'
              ></TextInput>
            )}
            rules={{
              required: true,
              pattern: /^\S+@\S+$/i,
            }}
          ></Controller>

          {errors.email && (
            <Text className="mb-2 w-80 text-sm text-red-500">
              Please enter a valid email address
            </Text>
          )}

          <Controller
            name='password'
            defaultValue={''}
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                secureTextEntry={true}
                placeholder='Password'
                className='native:h-18 mb-6 h-16 w-96 rounded-full border-2 border-foreground px-6 py-4 text-2xl text-foreground'
              ></TextInput>
            )}
            rules={{
              required: true,
            }}
          ></Controller>

          {errors.password && (
            <Text className="mb-2 w-80 text-sm text-red-500">
              Please enter a valid password
            </Text>
          )}

          <TouchableOpacity onPress={handleSubmit(submit)} className='native:h-20 mb-6 h-16 w-96 items-center justify-center rounded-full bg-foreground'>
            <Text className='native:text-3xl text-3xl text-background'>
              Sign Up
            </Text>
          </TouchableOpacity>

        </View>
        <View className='native:hidden flex-[0.2]'></View>
      </View>

    </SafeAreaView>
  );
}
