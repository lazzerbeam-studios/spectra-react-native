import * as React from 'react';
import { TextInput, type TextInputProps } from 'react-native';

import { cn } from '~/src/lib/utils';

const Input = React.forwardRef<React.ElementRef<typeof TextInput>, TextInputProps>(
  ({ className, placeholderClassName, ...props }, ref) => {
    return (
      <TextInput
        ref={ref}
        className={cn(
          'h-10 rounded-md border border-input bg-background px-3 text-base text-foreground placeholder:text-muted-foreground file:border-0 file:bg-transparent file:font-medium web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2',
          props.editable === false && 'opacity-50 web:cursor-not-allowed',
          className,
        )}
        placeholderClassName={cn(
          'text-muted-foreground',
          placeholderClassName,
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export { Input };
