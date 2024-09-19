'use client';

import { AppCtaButton } from '@/components/buttons/AppCtaButton';

export const CallToAction = () => {
  return (
    <section className={'pt-20 relative z-5 640:pt-32 bg-primary-100'}>
      <div className='app-container flex flex-col gap-4'>
        <h4 className={'max-w-[660px] text-center mx-auto'}>
          Make your business
          <span className={'inline-block 360:block'}>spending smarter</span>
        </h4>

        <p
          className={
            'mt-4 640:mt-5 text-neutral-main text-base 768:leading-[30px] 768:text-[20px] max-w-[624px] font-normal mx-auto text-center'
          }
        >
          Say goodbye to multiple accounts and hello to effortless financial
          management. Sign up for Jitaku Business.
        </p>

        <div className={'x-center mt-5 1024:mt-7'}>
          <AppCtaButton
            className={'primary-button gap-2 group x-center'}
            withArrow
          >
            <span className='h-full y-center'>Join Waitlist</span>
          </AppCtaButton>
        </div>

        <div className={'relative max-w-[789px] mx-auto mt-8 640:mt-14'}>
          {/* <Image src={illustration} priority alt='Jitaku_dashboard' /> */}
        </div>
      </div>
    </section>
  );
};
