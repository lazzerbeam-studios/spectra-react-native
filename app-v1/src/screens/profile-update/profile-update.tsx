import { Stack, router } from 'expo-router';
import { useForm, Controller, useFormState } from 'react-hook-form';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import { BackButton } from '~/src/components/back-button';
import { ProfileStore } from '~/src/stores/profile.store';

export const ProfileUpdateScreen = () => {
  const { profile, profileUpdate } = ProfileStore();

  const { control, handleSubmit } = useForm();
  const { errors } = useFormState({ control });

  const submit = async (data: any) => {
    if (profile) {
      profile.name = data.name;
      try {
        await profileUpdate(profile);
        if (router.canGoBack()) {
          router.back();
        }
      } catch (error: any) {
        console.log(error);
      }
    }
  };

  return (
    <>

      <Stack.Screen
        options={{
          title: '',
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerLeft: () => <BackButton></BackButton>,
        }}>
      </Stack.Screen>

      <View className='bg-secondary/30 flex h-full w-full flex-1 flex-row'>
        <View className='native:hidden flex-[0.2]'></View>
        <View className='native:flex-1 flex-[0.6] items-center'>

          <View className='bg-card mt-24 w-full max-w-sm rounded-2xl border border-foreground p-6 shadow'>

            <View className='items-center'>
              <Text className='text-center text-xl font-semibold text-foreground'>
                Profile Update
              </Text>
            </View>

            <View className='mt-4'>

              <Controller
                name='name'
                control={control}
                defaultValue={profile?.name}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    placeholder='Name'
                    className={'native:h-18 mb-6 h-16 rounded-full border-2 px-6 py-4 text-2xl text-foreground'}
                  />
                )}
                rules={{
                  required: true,
                }}
              ></Controller>

              {errors.name && (
                <Text className="-mt-4 mb-2 w-80 text-sm text-red-500">
                  Please enter a valid name
                  {errors.name.type === 'required' && ' (Name is required)'}
                </Text>
              )}

              <TouchableOpacity onPress={handleSubmit(submit)} className='native:h-20 mb-4 rounded-full bg-foreground'>
                <Text className='native:text-3xl native:my-auto m-2 text-center text-3xl text-background'>
                  Update
                </Text>
              </TouchableOpacity>

            </View>

          </View>

        </View>
        <View className='native:hidden flex-[0.2]'></View>
      </View>

    </>
  );
};
