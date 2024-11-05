import { Button } from '~/src/components/ui/button';
import { ChevronLeft } from '~/src/lib/icons/Chevron';

export const BackButton = () => {
  return (
    <Button variant={'link'} size={'icon'}>
      <ChevronLeft className='color-foreground' size={35} strokeWidth={2}></ChevronLeft>
    </Button>
  );
}
