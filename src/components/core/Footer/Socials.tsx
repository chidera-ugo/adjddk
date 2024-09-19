import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
} from '@/components/svgs/Socials';
import clsx from 'clsx';

export const Socials = ({ className }: { className?: string }) => {
  return (
    <div className={clsx(className, 'flex gap-1')}>
      {socials.map(({ icon, url }) => {
        return (
          <a
            href={url}
            key={url}
            className='y-center smooth w-8 h-8 rounded-full hover:bg-primary-800 text-white transition-colors'
            target='_blank'
            rel='noopenner noreferrer'
          >
            <div className='mx-auto h-5 w-5 p-[0.5px]'>{icon}</div>
          </a>
        );
      })}
    </div>
  );
};

const socials: { icon: JSX.Element; url: string }[] = [
  {
    icon: <Twitter />,
    url: 'https://twitter.com/Jitaku',
  },
  {
    icon: <Facebook />,
    url: 'https://m.facebook.com/profile.php?id=100093841272071&refid=52&__tn__=%2Cg',
  },
  { icon: <Instagram />, url: 'https://instagram.com/Jitaku.io' },
  {
    icon: <LinkedIn />,
    url: 'https://www.linkedin.com/company/Jitaku-io/',
  },
];
