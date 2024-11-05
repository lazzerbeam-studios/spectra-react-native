import { View } from 'react-native';
import { Link, Stack } from 'expo-router';

import { Text } from '~/src/components/ui/text';
import { Button } from '~/src/components/ui/button';
import { BackButton } from '~/src/components/back-button';
import { ProfileStore } from '~/src/stores/profile.store';
import { Avatar, AvatarFallback, AvatarImage } from '~/src/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '~/src/components/ui/card';

import { ThemeButton } from './theme-button';
import { LogoutDialog } from './logout-dialog';

const avatarUri = 'https://t3.ftcdn.net/jpg/07/24/59/76/360_F_724597608_pmo5BsVumFcFyHJKlASG2Y2KpkkfiYUU.jpg';

const ProfileScreen = () => {
  const { profile } = ProfileStore();

  return (
    <>

      <Stack.Screen
        options={{
          title: 'Profile',
          headerTitleAlign: 'center',
          headerLeft: () => <BackButton></BackButton>,
          headerRight: () => <ThemeButton></ThemeButton>,
        }}>
      </Stack.Screen>

      <View className='flex h-full w-full flex-1 flex-row bg-secondary/30'>
        <View className='hidden flex-[0.2] sm:flex'></View>
        <View className='flex-1 items-center sm:flex-[0.6]'>

          <Card className='mt-24 w-full max-w-sm rounded-2xl p-6'>
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

          <LogoutDialog></LogoutDialog>

        </View>
        <View className='hidden flex-[0.2] sm:flex'></View>
      </View>

    </>
  );
}

export default ProfileScreen;
