import { PropsWithChildren } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export const Accordion = ({
  show,
  children,
}: PropsWithChildren<{ show: boolean }>) => {
  return (
    <AnimatePresence initial={false}>
      {show && (
        <motion.div
          initial='collapsed'
          animate='open'
          exit='collapsed'
          variants={{
            open: {
              height: 'auto',
            },
            collapsed: {
              height: 0,
              overflow: 'hidden',
            },
          }}
          transition={{
            duration: 0.3,
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
