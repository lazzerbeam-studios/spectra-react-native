import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm, Controller, useFormState } from 'react-hook-form';
import { View, Text, TextInput, Pressable } from 'react-native';

import { authApi } from '~/src/api';
import { ErrorGet } from '~/src/scripts/error';
import { ProfileStore } from '~/src/stores/profile.store';

export const SignUpScreen = () => {
  const { profileInit } = ProfileStore();

  const { control, handleSubmit } = useForm();
  const { errors } = useFormState({ control });

  const submit = async (data: any) => {
    try {
      const response = await authApi.signUpAPI({
        email: data.email,
        password: data.password,
      });
      await AsyncStorage.setItem('token', response.data.token);
      await profileInit();
      router.replace('/dashboad');
    } catch (errors: any) {
      const error = ErrorGet(errors.response.data);
      console.log(error);
    }
  };

  return (
    <SafeAreaView className='h-full'>

      <View className='ms-2 mt-2'>
        <Link href='/' asChild>
          <Pressable className='p-2'>
            <Ionicons className="color-foreground" name="chevron-back" size={35} />
          </Pressable>
        </Link>
      </View>

      <View className='flex-1 items-center justify-center'>
        <View className='w-full items-center sm:w-1/3'>

          <Text className='mb-8 text-4xl font-bold text-foreground'>
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
                className='mb-6 h-16 w-96 rounded-full border-2 border-foreground px-6 py-4 text-2xl text-foreground'
              ></TextInput>
            )}
            rules={{
              required: true,
              pattern: /^\S+@\S+$/i,
            }}
          ></Controller>

          {errors.email && (
            <Text className="-mt-4 mb-2 w-80 text-sm text-red-500">
              Please enter a valid email address
              {errors.email.type === 'required' && ' (Email is required)'}
              {errors.email.type === 'pattern' && ' (Please enter a valid email format)'}
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
                className='mb-6 h-16 w-96 rounded-full border-2 border-foreground px-6 py-4 text-2xl text-foreground'
              ></TextInput>
            )}
            rules={{
              minLength: 8,
              required: true,
            }}
          ></Controller>

          {errors.password && (
            <Text className="-mt-4 mb-2 w-80 text-sm text-red-500">
              Please enter a valid password
              {errors.password.type === 'required' && ' (Password is required)'}
              {errors.password.type === 'minLength' && ' (Password must be at least 8 characters)'}
            </Text>
          )}

          <Pressable onPress={handleSubmit(submit)} className='mb-6 h-16 w-96 items-center justify-center rounded-full bg-foreground'>
            <Text className='text-3xl text-background'>
              Submit
            </Text>
          </Pressable>

        </View>
      </View>

    </SafeAreaView>
  );
};
