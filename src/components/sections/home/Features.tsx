'use client';

import { AppCtaButton } from '@/components/buttons/AppCtaButton';
import driving from '/public/assets/home/driving.png';
import backed from '/public/assets/home/backed.png';
import { SectionSlice } from '@/components/commons/sections/SectionSlice';

export const Features = () => {
  return (
    <>
      <SectionSlice
        imagePosition={'right'}
        title={
          <span className={'1180:text-[49px] block'}>
            Driving the Future of Money
          </span>
        }
        description={
          'Jitaku NGN tokens are the most widely adopted stablecoins, having pioneered the concept in the digital token space. A disruptor to the conventional financial system and a trailblazer in the digital use of traditional currencies, Jitaku NGN tokens support and empower growing ventures and innovation throughout the blockchain space. '
        }
        image={driving}
        action={
          <AppCtaButton type={'waitlist'} className={'outline-button y-center'}>
            Join Waitlist
          </AppCtaButton>
        }
      />

      <SectionSlice
        imagePosition={'left'}
        title={
          <span className={'1180:text-[49px] block'}>
            Driving the Future of Money
          </span>
        }
        description={
          'Jitaku NGN tokens are the most widely adopted stablecoins, having pioneered the concept in the digital token space. A disruptor to the conventional financial system and a trailblazer in the digital use of traditional currencies, Jitaku NGN tokens support and empower growing ventures and innovation throughout the blockchain space. '
        }
        image={backed}
        action={
          <AppCtaButton type={'waitlist'} className={'outline-button y-center'}>
            Join Waitlist
          </AppCtaButton>
        }
      />
    </>
  );
};
