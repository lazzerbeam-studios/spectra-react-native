import * as React from 'react';
import { View } from 'react-native';
import Animated, { FadeInUp, FadeOutDown, LayoutAnimationConfig } from 'react-native-reanimated';
import { Info } from '~/src/lib/icons/Info';
import { Avatar, AvatarFallback, AvatarImage } from '~/src/components/ui/avatar';
import { Button } from '~/src/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/src/components/ui/card';
import { Progress } from '~/src/components/ui/progress';
import { Text } from '~/src/components/ui/text';
import { Tooltip, TooltipContent, TooltipTrigger } from '~/src/components/ui/tooltip';
import { Link, Stack } from 'expo-router';

import { ThemeToggle } from '~/src/components/ThemeToggle';
import { profileStore } from '~/src/stores/profile.store';

const GITHUB_AVATAR_URI = 'https://i.pinimg.com/736x/31/f8/67/31f867c0e9786ce10c89eb94010f7a7d.jpg';

const ProfileScreen = () => {
  const [progress, setProgress] = React.useState(78);

  function updateProgressValue() {
    setProgress(Math.floor(Math.random() * 100));
  }

  const { profile } = profileStore();

  return (
    <>
      <Stack.Screen options={{ title: 'Starter Base', headerRight: () => <ThemeToggle></ThemeToggle> }} />
      <View className='flex-1 items-center justify-center gap-5 bg-secondary/30 p-6'>
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

            <View className='p-3' />

            <Link href='/logged-in/profile-update' asChild>
              <Button variant='outline' className='shadow shadow-foreground/5'>
                <Text>Update</Text>
              </Button>
            </Link>

          </CardContent>

        </Card>
      </View>
    </>
  );
}

export default ProfileScreen
