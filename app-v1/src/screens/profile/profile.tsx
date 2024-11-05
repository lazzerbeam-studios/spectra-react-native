import { View } from 'react-native';
import { Link, Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '~/src/components/ui/text';
import { Button } from '~/src/components/ui/button';
import { ChevronLeft } from '~/src/lib/icons/Chevron';
import { profileStore } from '~/src/stores/profile.store';
import { Avatar, AvatarFallback, AvatarImage } from '~/src/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '~/src/components/ui/card';

import { BackButton } from '~/src/components/back-button';

import { ThemeToggle } from './ThemeToggle';
import { ThemeButton } from './theme-button';

const avatarUri = 'https://t3.ftcdn.net/jpg/07/24/59/76/360_F_724597608_pmo5BsVumFcFyHJKlASG2Y2KpkkfiYUU.jpg';

const ProfileScreen = () => {
  const { profile } = profileStore();

  return (
    <>
      <Stack.Screen options={{ title: 'Update Profile', headerTitleAlign: 'center', headerLeft: () => <BackButton></BackButton>, headerRight: () => <ThemeButton></ThemeButton> }} />
      <SafeAreaView className='flex h-full bg-secondary/30'>

        <View className='mb-44 flex w-full flex-1 flex-row'>
          <View className='native:hidden flex-[0.2]'></View>
          <View className='native:flex-1 flex-[0.6] items-center justify-center'>

            <Card className='w-full max-w-sm rounded-2xl p-6'>
              <CardHeader className='items-center'>
                <Avatar className='h-24 w-24' alt="avatar">
                  <AvatarImage source={{ uri: avatarUri }}></AvatarImage>
                  <AvatarFallback>
                    <Text>Avatar</Text>
                  </AvatarFallback>
                </Avatar>
              </CardHeader>
              <CardContent>
                <CardTitle className='pb-4 text-center'>
                  {profile?.name}
                </CardTitle>
                <CardTitle className='pb-8 text-center'>
                  {profile?.email}
                </CardTitle>
                <Link href='/logged-in/profile-update' asChild>
                  <Button variant='outline' className='shadow shadow-foreground/5'>
                    <Text>Update</Text>
                  </Button>
                </Link>
              </CardContent>
            </Card>

          </View>
          <View className='native:hidden flex-[0.2]'></View>
        </View>

      </SafeAreaView>
    </>
  );
}

export default ProfileScreen;
