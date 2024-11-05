import { Sun } from '~/src/lib/icons/Sun';
import { Button } from '~/src/components/ui/button';
import { MoonStar } from '~/src/lib/icons/MoonStar';
import { useColorScheme } from '~/src/lib/useColorScheme';

export const ThemeButton = () => {
  const { isDarkColorScheme, setColorScheme } = useColorScheme();

  const goBack = () => {
  };

  return (
    <Button variant={'link'} size={'icon'} onPress={goBack}>

      {isDarkColorScheme ? (
        <MoonStar className='text-foreground' size={23} strokeWidth={1.25} />
      ) : (
        <Sun className='text-foreground' size={24} strokeWidth={1.25} />
      )}

    </Button>
  );
}
