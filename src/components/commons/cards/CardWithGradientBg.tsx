import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

interface Props {
  title: string;
  description: string;
  image: StaticImageData;
  className: string;
}

export const CardWithGradientBg = ({
  title,
  description,
  image,
  className,
}: Props) => {
  return (
    <div
      className={clsx(
        'relative y-between p-6 640:p-8 960:p-12 h-[560px] 640:h-[700px] rounded-[10px] 640:rounded-[20px] overflow-hidden',
        className,
      )}
      style={{
        background:
          'linear-gradient(180deg, rgba(0, 8, 36, 0) 15.5%, #000824 100%)',
      }}
    >
      <Image
        src={image}
        alt={'people'}
        className={'h-full absolute top-0 left-0 -z-10 w-full object-cover'}
        layout='fill'
      />

      <div className='mt-auto'>
        <motion.h5
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
          }}
          className={'text-left font-medium text-white'}
        >
          {title}
        </motion.h5>

        <motion.p
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className={'mt-4 text-white text-left subtitle'}
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
};
