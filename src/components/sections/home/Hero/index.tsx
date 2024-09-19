'use client';

import { TrustedBy } from '@/components/sections/home/TrustedBy';
import { motion } from 'framer-motion';
import coins from '/public/assets/home/coins.png';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section
      id={'hero'}
      className={
        'py-10 -mt-20 bg-cover min-h-screen y-center overflow-hidden 640:py-20 768:py-32'
      }
      style={{ backgroundImage: "url('/assets/home/bg.jpg')" }}
    >
      <div className='app-container grid grid-cols-12'>
        <div className='col-span-6'>
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
            }}
            className={'text-left text-white 1180:text-5xl'}
          >
            Jitaku NGN Token
            <span className={'640:inline-block'}>
              Driving the future of Africa’s Largest Stablecoin
            </span>
          </motion.h1>
        </div>

        <div className='col-span-6'>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className={''}
          >
            <Image src={coins} className={'mx-auto'} alt={'illustration'} />
          </motion.div>
        </div>
      </div>

      <TrustedBy />
    </section>
  );
};
