import { View } from 'react-native';

import { Button } from '~/src/components/ui/button';
import { ChevronLeft } from '~/src/lib/icons/Chevron';

export const BackButton = () => {
  return (
    <View className='ps-3 pt-2'>
      <Button variant={'link'} size={'icon'}>
        <ChevronLeft className='color-foreground' size={50} strokeWidth={2}></ChevronLeft>
      </Button>
    </View>
  );
}
