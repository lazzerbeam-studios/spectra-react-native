import { Stack } from 'expo-router';
import { View } from 'react-native';
import { router } from 'expo-router';
import { useForm, Controller, useFormState } from 'react-hook-form';

import { Text } from '~/src/components/ui/text';
import { Input } from '~/src/components/ui/input';
import { Button } from '~/src/components/ui/button';
import { BackButton } from '~/src/components/back-button';
import { ProfileStore } from '~/src/stores/profile.store';
import { Card, CardContent, CardHeader, CardTitle } from '~/src/components/ui/card';

export const ProfileUpdateScreen = () => {
  const { profile, profileUpdate } = ProfileStore();

  const { control, handleSubmit } = useForm();
  const { errors } = useFormState({ control });

  const submit = async (data: any) => {
    if (profile) {
      profile.name = data.name;
      await profileUpdate(profile);
      if (router.canGoBack()) {
        router.back();
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

      <View className='flex h-full w-full flex-1 flex-row bg-secondary/30'>
        <View className='native:hidden flex-[0.2]'></View>
        <View className='native:flex-1 flex-[0.6] items-center'>

          <Card className='mt-24 w-full max-w-sm rounded-2xl'>
            <CardHeader className='items-center'>
              <CardTitle className='text-center'>
                Profile Update
              </CardTitle>
            </CardHeader>
            <CardContent>
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
            </CardContent>
          </Card>

        </View>
        <View className='native:hidden flex-[0.2]'></View>
      </View>

    </>
  );
}
