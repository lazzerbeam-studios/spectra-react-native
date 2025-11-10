import { router } from 'expo-router';
import { ChevronLeft, Home } from 'lucide-react-native';

import { Icon } from '~/src/components/ui/icon';
import { Button } from '~/src/components/ui/button';

export const BackButton = () => {

  const goBack = () => {
    router.back();
  };

  const goHome = () => {
    router.push('/');
  };

  return (
    <>
      {router.canGoBack() ? (
        <Button onPress={goBack} className='w-8 bg-transparent shadow-transparent hover:bg-transparent active:bg-transparent'>
          <Icon size={48} as={ChevronLeft} className='web:!h-12 web:!w-12' />
        </Button>
      ) : (
        <Button onPress={goHome} className='w-8 bg-transparent shadow-transparent hover:bg-transparent active:bg-transparent'>
          <Icon size={48} as={Home} className='web:!h-12 web:!w-12' />
        </Button>
      )}
    </>
  );
};
