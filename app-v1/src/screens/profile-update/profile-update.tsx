import { View } from 'react-native';
import { router } from 'expo-router';
import { Link, Stack } from 'expo-router';
import { useForm, Controller, useFormState } from 'react-hook-form';

import { Card } from '~/src/components/ui/card';
import { Text } from '~/src/components/ui/text';
import { Input } from '~/src/components/ui/input';
import { Button } from '~/src/components/ui/button';
import { BackButton } from '~/src/components/back-button';
import { ProfileStore } from '~/src/stores/profile.store';

const ProfileUpdateScreen = () => {
  const { profile, profileUpdate } = ProfileStore();

  const { control, handleSubmit } = useForm();
  const { errors } = useFormState({ control });

  const submit = async (data: any) => {
    if (profile) {
      profile.name = data.name;
      await profileUpdate(profile);
      router.navigate('/logged-in/profile');
    }
  };

  return (
    <>

      <Stack.Screen
        options={{
          title: 'Profile',
          headerTitleAlign: 'center',
          headerLeft: () => <BackButton></BackButton>,
        }}>
      </Stack.Screen>

      <View className='flex h-full w-full flex-1 flex-row bg-secondary/30'>
        <View className='native:hidden flex-[0.2]'></View>
        <View className='native:flex-1 flex-[0.6] items-center'>

          <Card className='mt-24 w-full max-w-sm rounded-2xl p-6'>
            <Text className='native:text-5xl pb-6 text-center text-4xl'>Profile Update</Text>
            <Controller
              name='name'
              control={control}
              defaultValue={profile?.name}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  value={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  placeholder='Name'
                  className={`native:h-18 mb-6 h-16 rounded-full border-2 px-6 py-4 text-2xl ${(errors.name) ? 'border-red-500' : 'border-foreground'}`}
                />
              )}
              rules={{
                required: true,
              }}
            ></Controller>
            <Button className='native:h-20 mb-4 h-16 rounded-full' onPress={handleSubmit(submit)}>
              <Text className='native:text-3xl text-3xl'>
                Update
              </Text>
            </Button>
          </Card>

        </View>
        <View className='native:hidden flex-[0.2]'></View>
      </View>

    </>
  );
}

export default ProfileUpdateScreen;
