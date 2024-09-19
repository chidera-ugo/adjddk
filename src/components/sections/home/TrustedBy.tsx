import { generateKeysForArray } from '@/helpers/generators/generateKeysForArray';
import useMediaQuery from '@/hooks/common/useMediaQuery';
import clsx from 'clsx';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import i_1 from '/public/assets/home/trusted_by/1.jpg';
import i_2 from '/public/assets/home/trusted_by/2.jpg';
import i_3 from '/public/assets/home/trusted_by/3.jpg';
import i_4 from '/public/assets/home/trusted_by/4.jpg';
import i_5 from '/public/assets/home/trusted_by/5.jpg';
import i_6 from '/public/assets/home/trusted_by/6.jpg';

export const TrustedBy = () => {
  const mobile = useMediaQuery('(max-width: 640px)');

  return null;

  return (
    <div className='mt-16 768:mt-32'>
      <p
        className={clsx(
          'app-container block 768:hidden text-xs 640:text-lg font-semibold text-neutral-main',
        )}
      >
        Trusted by forward thinking businesses
      </p>

      <div className='mx-auto'>
        <Marquee pauseOnHover speed={50} className='mt-8'>
          <Logos mobile={mobile} />
        </Marquee>
      </div>
    </div>
  );
};

const Logos = ({ mobile }: { mobile: boolean }) => {
  const logos = [
    { height: 62, value: i_1, name: 'the joint' },
    { height: 60, value: i_2, name: 'social lander' },
    { height: 60, value: i_3, name: 'silicon africa' },
    { height: 54, value: i_4, name: '247 travels' },
    { height: 48, value: i_5, name: 'unyte' },
    { height: 54, value: i_6, name: 'kiru' },
    { height: 62, value: i_1, name: 'the joint' },
    { height: 60, value: i_2, name: 'social lander' },
    { height: 60, value: i_3, name: 'silicon africa' },
    { height: 54, value: i_4, name: '247 travels' },
    { height: 48, value: i_5, name: 'unyte' },
    { height: 54, value: i_6, name: 'kiru' },
  ];

  return (
    <div className='flex gap-10 640:gap-16 pl-10 640:pl-16 align-middle'>
      {generateKeysForArray(logos).map(({ key, height, value }) => {
        return (
          <Image
            key={key}
            src={value}
            alt={'logo'}
            height={height / (mobile ? 2 : 1.4)}
            className={'object-contain'}
            priority
          />
        );
      })}
    </div>
  );
};
