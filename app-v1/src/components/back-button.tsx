import { Link, router } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';
import { Pressable } from 'react-native';

import { Icon } from '~/src/components/ui/icon';
import { Text } from '~/src/components/ui/text';
import { Button } from '~/src/components/ui/button';

export const BackButton = () => {
  const goBack = () => {
    router.back();
  };

  return (
    <>
      {router.canGoBack() ? (
        <Pressable onPress={goBack}>
          <Icon as={ChevronLeft} size={48} />
        </Pressable>
      ) : (
        <Link href='/'>
          <Text className='ms-4 font-Poppins500 text-4xl'>
            Spectra
          </Text>
        </Link>
      )}
    </>
  );
};
