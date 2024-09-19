'use client';

import { GetInTouchForm } from '@/components/forms/GetInTouchForm';

export const GetInTouch = () => {
  return (
    <section id={'get_in_touch'} className={'py-10 880:py-20 app-container'}>
      <div className='max-w-[700px] mx-auto'>
        <h5 className={'text-center'}>Get In Touch</h5>

        <p className={'mt-4 640:mt-5 text-center subtitle'}>
          {`Should you have any inquiries, don't hesitate to contact us, and we'll
          get back to you promptly. Make sure to include as much detail as you
          can.`}
        </p>
      </div>

      <div className='gap-10 mt-8 768:mt-16 max-w-[905px] mx-auto grid-cols-12'>
        <GetInTouchForm />
      </div>
    </section>
  );
};
