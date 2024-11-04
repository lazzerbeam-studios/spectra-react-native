import { View } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm, Controller, useFormState } from 'react-hook-form';

import { Text } from '~/src/components/ui/text';
import { Input } from '~/src/components/ui/input';
import { Button } from '~/src/components/ui/button';
import { ChevronLeft } from '~/src/lib/icons/Chevron';
import { profileStore } from '~/src/stores/profile.store';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/src/components/ui/card';

const ProfileUpdateScreen = () => {
  const { profile, profileUpdate } = profileStore();

  const { control, handleSubmit } = useForm();
  const { errors } = useFormState({ control });

  const submit = async (data: any) => {
    if (profile) {
      profile.name = data.name;
      await profileUpdate(profile);
      router.back();
    }
  };

  return (
    <SafeAreaView className='flex h-full bg-secondary/30'>

      {router.canGoBack() && (
        <View className='ms-2 mt-2'>
          <Button variant={'link'} size={'icon'} onPress={() => router.back()}>
            <ChevronLeft className='color-foreground' size={50} strokeWidth={2}></ChevronLeft>
          </Button>
        </View>
      )}

      <View className='mb-44 flex w-full flex-1 flex-row'>
        <View className='native:hidden flex-[0.2]'></View>
        <View className='native:flex-1 flex-[0.6] items-center justify-center'>

          <Card className='w-full max-w-sm rounded-2xl p-6'>
            <Text className='native:text-5xl pb-6 text-center text-4xl'>Profile Update</Text>

            <Controller
              name='name'
              control={control}
              defaultValue={profile?.name}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder='Name'
                  className={'native:h-18 mb-6 h-16 rounded-full border-2 px-6 py-4 text-2xl'}
                />
              )}
              rules={{
                required: true,
              }}
            ></Controller>

            <Button className='native:h-20 mb-6 h-16 rounded-full' onPress={handleSubmit(submit)}>
              <Text className='native:text-3xl text-3xl'>
                Update
              </Text>
            </Button>

          </Card>

        </View>
        <View className='native:hidden flex-[0.2]'></View>
      </View>

    </SafeAreaView>
  );
}

export default ProfileUpdateScreen;
