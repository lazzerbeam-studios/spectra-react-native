import Ionicons from '@expo/vector-icons/Ionicons';

import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm, Controller, useFormState } from 'react-hook-form';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { authApi } from '~/src/api';
import { ErrorGet } from '~/src/scripts/error';

export const PasswordResetScreen = () => {
  const { control, handleSubmit } = useForm();
  const { errors } = useFormState({ control });

  const submit = async (data: any) => {
    try {
      await authApi.passwordResetPostAPI({
        code: data.code,
        password: data.password,
      });
      router.replace('/sign-in');
    } catch (errors: any) {
      const error = ErrorGet(errors.response.data);
      console.log(error);
    }
  };

  return (
    <SafeAreaView className='flex h-full'>

      <View className='ms-2 mt-2'>
        <Link href='/password-forgot' asChild>
          <TouchableOpacity className='p-2'>
            <Ionicons className="color-foreground" name="chevron-back" size={50} />
          </TouchableOpacity>
        </Link>
      </View>

      <View className='mb-44 flex w-full flex-1 flex-row'>
        <View className='native:hidden flex-[0.2]'></View>
        <View className='native:flex-1 flex-[0.6] items-center justify-center'>

          <Text className='mb-6 text-4xl font-bold text-foreground'>
            Reset Password
          </Text>

          <Controller
            name='code'
            defaultValue={''}
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                placeholder='Code'
                keyboardType='number-pad'
                className='mb-6 h-16 w-96 rounded-full border-2 border-foreground px-6 py-4 text-2xl text-foreground'
              ></TextInput>
            )}
            rules={{
              required: true,
            }}
          ></Controller>

          {errors.code && (
            <Text className="-mt-4 mb-2 w-80 text-sm text-red-500">
              Please enter the verification code
              {errors.code.type === 'required' && ' (Code is required)'}
              {errors.code.type === 'minLength' && ' (Code must be at least 6 characters)'}
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
                placeholder='Password'
                secureTextEntry={true}
                className='mb-6 h-16 w-96 rounded-full border-2 border-foreground px-6 py-4 text-2xl text-foreground'
              ></TextInput>
            )}
            rules={{
              required: true,
              minLength: 8,
            }}
          ></Controller>

          {errors.newPassword && (
            <Text className="-mt-4 mb-2 w-80 text-sm text-red-500">
              Please enter a valid password
              {errors.newPassword.type === 'required' && ' (Password is required)'}
              {errors.newPassword.type === 'minLength' && ' (Password must be at least 8 characters)'}
            </Text>
          )}

          <TouchableOpacity className='mb-6 h-16 w-96 items-center justify-center rounded-full bg-foreground' onPress={handleSubmit(submit)}>
            <Text className='text-3xl text-background'>
              Submit
            </Text>
          </TouchableOpacity>

        </View>
        <View className='native:hidden flex-[0.2]'></View>
      </View>

    </SafeAreaView>
  );
};
