import clsx from 'clsx';
import Link from 'next/link';
import { PropsWithChildren, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  title?: ReactNode;
  description?: ReactNode;
  justify?: string;
  className?: string;
  customChildren?: boolean;
  noPadding?: boolean;
  bg?: string;
  url?: string;
}

export const FeatureCard = ({
  children,
  bg,
  url,
  description,
  title,
  customChildren,
  justify = 'center',
  className = 'h-[360px] 640:h-[420px]',
  noPadding,
}: PropsWithChildren<Props>) => {
  const enableBgColor = false;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
      }}
      className={clsx(
        'text-center block overflow-hidden group rounded-[20px] bg-neutral-120 relative',
        !noPadding && 'p-8',
        className,
      )}
      style={{
        backgroundColor: enableBgColor ? bg : '',
      }}
    >
      <Wrapper url={url}>
        {title && description && (
          <div
            className={clsx(
              justify === 'left' ? 'text-left' : 'max-w-[320px] mx-auto',
            )}
          >
            <h6
              className={clsx(
                justify === 'left'
                  ? 'text-lg leading-6 640:leading-9 640:text-[24px]'
                  : 'text-lg',
              )}
            >
              {title}
            </h6>

            <p
              className={clsx(
                'text-neutral-main',
                justify === 'left'
                  ? '640:text-lg text-base mt-2'
                  : '640:text-base text-sm',
              )}
            >
              {description}
            </p>
          </div>
        )}

        {customChildren ? (
          children
        ) : (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
            className={clsx('x-center', title && description && 'mt-8')}
          >
            <div
              className={clsx(
                'w-full h-full relative',
                url && 'group-hover:scale-[1.02] transform smooth ',
              )}
            >
              {children}
            </div>
          </motion.div>
        )}
      </Wrapper>
    </motion.div>
  );
};

const Wrapper = ({
  children,
  url,
}: PropsWithChildren<{
  url?: string;
}>) => {
  if (url) return <Link href={url}>{children}</Link>;

  return <div>{children}</div>;
};
