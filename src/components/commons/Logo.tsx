import logo from '/public/logos/main-logo.svg';
import white_logo from '/public/logos/main_logo_white.svg';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  onClick?: () => void;
  className?: string;
  white?: boolean;
}

export const Logo = ({ onClick, className, white }: Props) => {
  return (
    <Link
      onClick={onClick}
      href='/'
      className={clsx('my-auto flex gap-2', className)}
    >
      <Image
        src={white ? white_logo : logo}
        priority
        alt='Jitaku-logo'
        className='my-auto cursor-pointer h-[42px] 640:h-[60px] object-contain'
      />
    </Link>
  );
};
