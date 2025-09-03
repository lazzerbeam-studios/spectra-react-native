import Ionicons from '@expo/vector-icons/Ionicons';

import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm, Controller, useFormState } from 'react-hook-form';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { authApi } from '~/src/api';
import { errorGet } from '~/src/scripts/errors';

export const ForgotPasswordScreen = () => {
  const { control, handleSubmit } = useForm();
  const { errors } = useFormState({ control });

  const submit = async (data: any) => {
    try {
      const response = await authApi.forgotPasswordPostAPI({
        email: data.email,
      });
      router.replace('/reset-password');
    } catch (errors: any) {
      const error = errorGet(errors.response.data);
      console.log(error);
    }
  };

  return (
    <SafeAreaView className='flex h-full'>

      <View className='ms-2 mt-2'>
        <Link href='/sign-in' asChild>
          <TouchableOpacity className='p-2'>
            <Ionicons className="color-foreground" name="chevron-back" size={50} />
          </TouchableOpacity>
        </Link>
      </View>

      <View className='mb-44 flex w-full flex-1 flex-row'>
        <View className='native:hidden flex-[0.2]'></View>
        <View className='native:flex-1 flex-[0.6] items-center justify-center'>

          <Text className='mb-4 text-4xl font-bold text-foreground'>
            Forgot Password
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

          <TouchableOpacity className='mb-6 h-16 w-96 items-center justify-center rounded-full bg-foreground' onPress={handleSubmit(submit)}>
            <Text className='text-3xl text-background'>
              Send
            </Text>
          </TouchableOpacity>

        </View>
        <View className='native:hidden flex-[0.2]'></View>
      </View>

    </SafeAreaView>
  );
};
