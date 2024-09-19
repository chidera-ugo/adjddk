import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

export const AnimateLayout = ({
  changeTracker,
  className,
  children,
  duration = 0.3,
}: PropsWithChildren<{
  changeTracker: string | number;
  className?: string;
  duration?: number;
}>) => {
  return (
    <AnimatePresence initial={false} mode='popLayout'>
      <motion.div
        initial='enter'
        animate='center'
        exit='exit'
        variants={{
          enter: {
            opacity: 0,
            x: '110%',
          },
          center: {
            opacity: 1,
            x: 0,
          },
          exit: {
            x: '-110%',
            opacity: 0,
          },
        }}
        transition={{
          y: { type: 'spring', stiffness: 300, damping: 30 },
          duration,
        }}
        key={changeTracker}
        className={clsx(className, 'flex flex-col')}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
