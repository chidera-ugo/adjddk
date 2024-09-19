import { Spinner } from '@/components/svgs/Spinner';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';

type Props = JSX.IntrinsicElements['button'] & {
  submitting?: boolean;
};

export const SubmitButton = ({
  submitting,
  children,
  className,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <button disabled={submitting} {...props} className={clsx(className)}>
      {submitting ? (
        <div className='x-center'>
          <Spinner />
        </div>
      ) : (
        children
      )}
    </button>
  );
};
