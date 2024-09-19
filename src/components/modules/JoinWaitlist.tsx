'use client';

import { CentredModalWrapper } from '@/components/modal/ModalWrapper';
import { JoinWaitlistForm } from '@/components/sections/JoinWaitlistForm';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export const JoinWaitlist = () => {
  const params = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const _w = params.get('_w');

  const [showWaitlistModal, setShowWaitlistModal] = useState(false);

  useEffect(() => {
    if (_w === 't') {
      setShowWaitlistModal(true);
    }
  }, [_w]);

  function close() {
    replace(pathname, {
      scroll: false,
    });

    setShowWaitlistModal(false);
  }

  return (
    <CentredModalWrapper
      closeOnClickOutside
      show={showWaitlistModal}
      withGutter
      zIndex={2000}
      hideDraggable
      {...{ close }}
    >
      <div className='text-center px-12'>
        <h4 className='640:leading-[63px] text-neutral-main text-4xl 640:text-[54px] tracking-[-0.5px] 640:tracking-[-1.5px] mx-auto'>
          Sign Up for <span className={'block'}>Early Access</span>
        </h4>
        <p className='mt-3 block font-medium max-w-[400px] text-neutral-main mx-auto text-base'>
          and free your team from expense hassles & gain total control over
          spending with Jitaku
        </p>

        <div className='mx-auto mb-24 640:mb-10'>
          <JoinWaitlistForm standalone {...{ onSuccess: close }} />
        </div>
      </div>
    </CentredModalWrapper>
  );
};
