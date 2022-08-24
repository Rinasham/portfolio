import cn from 'classnames';
import { ButtonProps } from '../../../types';

export const BaseButton = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        className,
        'w-full inline-block items-center px-2.5 py-1.5 text-xs h-10 font-medium bg-hotpink text-white',
      )}
      {...props}
    >
      {children}
    </button>
  );
};
