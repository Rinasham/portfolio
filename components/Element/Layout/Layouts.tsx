import cn from 'classnames';
import { BaseProps } from '../../../types';

export const Flex = ({ className, ...props }: BaseProps) => {
  return <div className={cn('flex', className)} {...props} />;
};

export const SectionLayouts = ({ className, ...props }: BaseProps) => {
  return (
    <div
      className={cn('w-[90%] m-auto my-5 py-5 text-center', className)}
      {...props}
    />
  );
};
