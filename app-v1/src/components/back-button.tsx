import { router } from 'expo-router';

import { Button } from '~/src/components/ui/button';
import { ChevronLeft } from '~/src/lib/icons/Chevron';

export const BackButton = () => {
  const goBack = () => {
    router.back();
  };
  return (
    <>
      {router.canGoBack() && (
        <Button variant={'link'} size={'icon'} onPress={goBack}>
          <ChevronLeft className='color-foreground' size={35} strokeWidth={2}></ChevronLeft>
        </Button>
      )}
    </>
  );
}
