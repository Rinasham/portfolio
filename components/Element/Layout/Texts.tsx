import cn from 'classnames';
import { BaseProps } from '../../../types';

const BaseText = ({ className, ...props }: BaseProps) => {
  return (
    <div
      className={cn('leading-6 font-bold tracking-wide ', className)}
      {...props}
    />
  );
};

export const Text = ({ ...props }: BaseProps) => {
  return (
    <BaseText
      className="font-bold text-2xl font-text text-lightblack"
      {...props}
    />
  );
};

export const Title = ({ ...props }: BaseProps) => {
  return <BaseText className="font-bold font-title text-4xl" {...props} />;
};
