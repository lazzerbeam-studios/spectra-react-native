import { Link, router } from 'expo-router';

import { Button } from '~/src/components/ui/button';
import { ChevronLeft } from '~/src/lib/icons/Chevron';

export const BackButton = () => {

  const submit = () => {
    router.back();
  };

  return (
    <Button variant={'link'} size={'icon'} onPress={submit}>
      <ChevronLeft className='color-foreground' size={35} strokeWidth={2}></ChevronLeft>
    </Button>
  );
}
