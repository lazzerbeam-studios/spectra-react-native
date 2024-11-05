import { View } from 'react-native';
import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '~/src/components/ui/text';
import { Button } from '~/src/components/ui/button';
import { ChevronLeft } from '~/src/lib/icons/Chevron';
import { profileStore } from '~/src/stores/profile.store';
import { Avatar, AvatarFallback, AvatarImage } from '~/src/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '~/src/components/ui/card';

const GITHUB_AVATAR_URI = 'https://i.pinimg.com/736x/31/f8/67/31f867c0e9786ce10c89eb94010f7a7d.jpg';

const ProfileScreen = () => {
  const { profile } = profileStore();

  return (
    <SafeAreaView className='flex h-full bg-secondary/30'>

      <View className='bg-background pb-2 ps-2 pt-2'>
        <Link href='/logged-in/profile' asChild>
          <Button variant={'link'} size={'icon'}>
            <ChevronLeft className='color-foreground' size={50} strokeWidth={2}></ChevronLeft>
          </Button>
        </Link>
      </View>

      <View className='mb-44 flex w-full flex-1 flex-row'>
        <View className='native:hidden flex-[0.2]'></View>
        <View className='native:flex-1 flex-[0.6] items-center justify-center'>

          <Card className='w-full max-w-sm rounded-2xl p-6'>
            <CardHeader className='items-center'>
              <Avatar alt="Rick Sanchez's Avatar" className='h-24 w-24'>
                <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
                <AvatarFallback>
                  <Text>RS</Text>
                </AvatarFallback>
              </Avatar>
            </CardHeader>
            <CardContent>
              <CardTitle className='pb-2 text-center'>{profile?.name}</CardTitle>
              <CardTitle className='pb-2 text-center'>{profile?.email}</CardTitle>
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
  );
}

export default ProfileScreen;
