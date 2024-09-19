import { AppCtaButton } from '@/components/buttons/AppCtaButton';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const HeroCtaPair = ({
  waitlist,
  justifyLeft,
  className = justifyLeft ? '640:justify-center justify-start flex' : undefined,
}: {
  waitlist?: boolean;
  className?: string;
  justifyLeft?: boolean;
}) => {
  const wait = true;

  return (
    <div className={clsx('mt-4 640:mt-6 gap-2', className ?? 'x-center')}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.4,
        }}
      >
        <AppCtaButton
          type={waitlist ? 'waitlist' : 'signup'}
          className={'primary-button y-center'}
        >
          {waitlist || wait ? 'Join Waitlist' : 'Get Started'}
        </AppCtaButton>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 0.6,
        }}
      >
        <Link href={'/contact-us'} className={'outline-button y-center'}>
          Contact Sales
        </Link>
      </motion.div>
    </div>
  );
};
