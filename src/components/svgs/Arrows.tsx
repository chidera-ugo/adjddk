import clsx from 'clsx';

export const ArrowRight = ({ className }: { className?: string }) => {
  return (
    <svg
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      className={clsx(className ?? 'h-5 w-5')}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10.125 3.375L15.75 9M15.75 9L10.125 14.625M15.75 9H2.25'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
