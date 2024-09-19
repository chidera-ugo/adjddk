import { ArrowRight } from '@/components/svgs/Arrows';
import clsx from 'clsx';
import Link from 'next/link';

interface Props {
  href?: string;
  text: string;
  className?: string;
  type?: 'dark' | 'outline' | 'line';
  externalLink?: string;
  white?: boolean;
}

export const ButtonLinkWithArrow = ({
  href,
  type = 'outline',
  text,
  className,
  externalLink,
  white,
}: Props) => {
  if (externalLink) {
    return (
      <a
        href={externalLink}
        target={'_blank'}
        rel={'noopener noreferrer'}
        className={clsx(
          type === 'line'
            ? 'text-link text-neutral-main'
            : type === 'outline'
              ? 'outline-button'
              : 'primary-button',
          'group',
          className,
          type !== 'line' && 'x-center',
        )}
      >
        <div className='flex gap-3'>
          <span className='my-auto text-sm font-semibold'>{text}</span>
          <span
            className={
              'group-hover:translate-x-1 transition-transform duration-300 my-auto'
            }
          >
            <ArrowRight />
          </span>
        </div>

        {type === 'line' && (
          <div
            className={clsx(
              'h-[1.5px] mt-1 w-full',
              white ? 'bg-white' : 'bg-black',
            )}
          ></div>
        )}
      </a>
    );
  }

  if (!href) {
    return (
      <div
        className={clsx(
          type === 'outline' ? 'outline-button' : 'dark-button',
          'gap-3 group x-center',
          className,
        )}
      >
        <span className='my-auto text-sm font-semibold'>{text}</span>
        <span
          className={
            'group-hover:translate-x-1 transition-transform duration-300 my-auto'
          }
        >
          <ArrowRight />
        </span>
      </div>
    );
  }

  return (
    <Link
      href={href}
      className={clsx(
        'flex gap-3 group',
        type === 'outline' ? 'outline-button' : 'dark-button',
        className,
      )}
    >
      <span className='my-auto text-sm font-semibold'>{text}</span>
      <span
        className={
          'group-hover:translate-x-1 transition-transform duration-300 my-auto'
        }
      >
        <ArrowRight />
      </span>
    </Link>
  );
};
