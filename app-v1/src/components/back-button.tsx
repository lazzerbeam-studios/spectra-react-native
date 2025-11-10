import { Link, router } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';

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
        <Button onPress={goBack} className='w-8 bg-transparent shadow-transparent hover:bg-transparent active:bg-transparent'>
          <Icon size={48} as={ChevronLeft} className='web:!h-12 web:!w-12' />
        </Button>
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
