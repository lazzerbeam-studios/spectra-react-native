import { useState } from 'react';
import { cssInterop } from 'nativewind';
import { Pencil } from 'lucide-react-native';
import * as ImagePicker from 'expo-image-picker';
import { View, Pressable, Platform, StyleSheet } from 'react-native';

import { Toast } from '~/src/components/toast';
import { Text } from '~/src/components/ui/text';
import { Cropper } from '~/src/components/cropper';
import { ProfileStore } from '~/src/stores/profile.store';
import { Avatar, AvatarFallback, AvatarImage } from '~/src/components/ui/avatar';

cssInterop(Pencil, {
  className: {
    target: 'style',
    nativeStyleToProp: {
      color: 'color',
    },
  },
});

export const ProfileUpdateAvatar = () => {
  const { profile, profileUpdateImage } = ProfileStore();
  const { showToast } = Toast();

  const [showCropper, setShowCropper] = useState(false);
  const [imageUri, setImageUri] = useState<string>('');

  const imageChoose = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      showToast('Permission Required', {
        variant: 'destructive',
        description: 'Sorry, we need camera roll permissions to update your profile picture.'
      });
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets[0]) {
      const imageUri = result.assets[0].uri;
      if (Platform.OS === 'web') {
        setImageUri(imageUri);
        setShowCropper(true);
      } else {
        try {
          await profileUpdateImage(imageUri);
          showToast('Success', {
            variant: 'success',
            description: 'Profile picture updated successfully.',
          });
        } catch (error: any) {
          console.log(error);
          showToast('Error', {
            variant: 'destructive',
            description: 'Failed to update profile picture.',
          });
        }
      }
    }
  };

  const onComplete = async (uri: string) => {
    setShowCropper(false);
    setImageUri('');
    try {
      await profileUpdateImage(uri);
      showToast('Success', {
        variant: 'success',
        description: 'Profile picture updated successfully.',
      });
    } catch (error: any) {
      console.log(error);
      showToast('Error', {
        variant: 'destructive',
        description: 'Failed to update profile picture.',
      });
    }
  };

  const onCancel = () => {
    setShowCropper(false);
    setImageUri('');
  };

  return (
    <View>

      <Pressable onPress={imageChoose} className='mb-4'>
        <View className='relative rounded-full bg-primary/25 p-2'>
          <Avatar alt={'profile-image'} className='size-40'>
            {profile?.image && <AvatarImage source={{ uri: profile.image }} />}
            <AvatarFallback>
              <Text className='font-Poppins500 text-3xl text-primary'>
                Hyvecity
              </Text>
            </AvatarFallback>
          </Avatar>
          <View style={styles.pencil} className='absolute z-10'>
            <Pencil size={28} strokeWidth={2.5} className='text-primary' />
          </View>
        </View>
      </Pressable>

      {Platform.OS === 'web' && (
        <Cropper
          uri={imageUri}
          visible={showCropper}
          onComplete={onComplete}
          onCancel={onCancel}
        />
      )}

    </View>
  );
};

const styles = StyleSheet.create({
  pencil: {
    top: 12,
    right: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
