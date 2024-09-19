import { ArrowRight } from '@/components/svgs/Arrows';
import clsx from 'clsx';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

export const AppCtaButton = ({
  type = 'waitlist',
  className,
  children,
  withArrow,
  onClick,
}: PropsWithChildren<{
  type?: 'signin' | 'signup' | 'waitlist';
  className?: string;
  onClick?: () => void;
  withArrow?: boolean;
}>) => {
  const wait = true;

  if (wait || type == 'waitlist') {
    return (
      <Link href={'?_w=t'} scroll={false} className={className}>
        {children}

        {withArrow && (
          <span
            className={
              'group-hover:translate-x-1 transition-transform duration-300 my-auto'
            }
          >
            <ArrowRight />
          </span>
        )}
      </Link>
    );
  }

  return (
    <a
      target={'_blank'}
      onClick={onClick}
      rel={'noopenner noreferrer'}
      href={`${process.env.NEXT_PUBLIC_APP_URL}/auth/${type}`}
      className={clsx(className)}
    >
      {children}

      {withArrow && (
        <span
          className={
            'group-hover:translate-x-1 transition-transform duration-300 my-auto'
          }
        >
          <ArrowRight />
        </span>
      )}
    </a>
  );
};
