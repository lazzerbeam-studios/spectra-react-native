import { router } from 'expo-router';

import { ChevronLeft } from '~/src/icons/icons';
import { Button } from '~/src/components/ui/button';

export const BackButton = () => {
  const goBack = () => {
    router.back();
  };
  return (
    <>
      {router.canGoBack() && (
        <Button className='web:ms-2' variant={'link'} size={'icon'} onPress={goBack}>
          <ChevronLeft className='color-foreground' size={35} strokeWidth={2}></ChevronLeft>
        </Button>
      )}
    </>
  );
}
