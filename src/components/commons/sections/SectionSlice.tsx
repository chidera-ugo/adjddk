'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { PropsWithChildren, ReactNode } from 'react';

interface Props {
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  id?: string;
  image?: StaticImageData;
  floatingImage?: StaticImageData;
  floatingImageClassName?: string;
  imageComponent?: ReactNode;
  imagePosition?: 'right' | 'left';
  className?: string;
  label?: string;
  textBlockClassname?: string;
}

export const SectionSlice = ({
  title,
  description,
  action,
  children,
  className = '960:h-[520px]',
  id,
  floatingImageClassName,
  imagePosition = 'right',
  image,
  textBlockClassname = '960:w-[505px] max-w-[505px]',
  floatingImage,
  imageComponent,
  label,
}: PropsWithChildren<Props>) => {
  return (
    <section id={id} className={'relative app-container z-5 py-10 640:py-20'}>
      <div className={clsx('justify-between 960:flex', className)}>
        <div
          className={clsx(
            'max-[545px] 960:w-[545px] h-full my-auto relative flex-shrink-0 flex-col align-middle justify-center',
            imagePosition === 'right' ? 'hidden' : '960:flex hidden',
          )}
        >
          {image ? (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
              }}
              className='h-full'
            >
              <Image
                src={image}
                priority
                alt='illustration'
                className='h-full object-cover'
              />
            </motion.div>
          ) : (
            imageComponent
          )}

          {floatingImage && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.5,
              }}
            >
              <Image
                src={floatingImage}
                priority
                alt='illustration'
                className={clsx(
                  'absolute animate-float object-contain',
                  floatingImageClassName,
                )}
              />
            </motion.div>
          )}
        </div>

        <div
          className={clsx(
            'y-center gap-2 960:gap-3',
            imagePosition === 'right' ? '960:mr-10 1180:mr-20' : '',
            textBlockClassname,
          )}
        >
          {label && (
            <div className='flex'>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                }}
                className='mb-4 pill_gray'
              >
                {label}
              </motion.div>
            </div>
          )}

          <motion.h5
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
            }}
            className={'text-left'}
          >
            {title}
          </motion.h5>

          {description && (
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className={'mt-4 640:mt-5 text-left subtitle'}
            >
              {description}
            </motion.p>
          )}

          {children}

          {action && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.6,
              }}
              className={'flex mt-5 640:mt-10'}
            >
              {action}
            </motion.div>
          )}
        </div>

        <div
          className={clsx(
            '960:my-auto mt-10 w-full max-w-[540px] 960:w-[440px] 1024:w-[500px]',
            imagePosition === 'right' ? '' : '960:hidden',
          )}
        >
          <div className='relative'>
            {image ? (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                }}
                className={'relative h-full'}
              >
                <Image
                  src={image}
                  priority
                  alt='illustration'
                  className='h-full object-cover'
                />
              </motion.div>
            ) : (
              imageComponent
            )}

            {floatingImage && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                }}
              >
                <Image
                  src={floatingImage}
                  priority
                  alt='illustration'
                  className={clsx(
                    'absolute animate-float object-contain',
                    floatingImageClassName,
                  )}
                />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
