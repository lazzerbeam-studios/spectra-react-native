import { Button } from '~/src/components/ui/button';
import { MoonStar } from '~/src/lib/icons/MoonStar';

export const DashboadProfile = () => {
  return (
    <Button className='web:me-2' variant={'link'} size={'icon'}>
      <MoonStar className='text-foreground' size={30} strokeWidth={1.25}></MoonStar>
    </Button>
  );
}
