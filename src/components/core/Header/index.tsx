'use client';

import { AppCtaButton } from '@/components/buttons/AppCtaButton';
import { Logo } from '@/components/commons/Logo';
import { MobileMenu } from '@/components/core/MobileMenu';
import { ChevronDown } from '@/components/svgs/ChevronDown';
import { hyphenateString } from '@/helpers/converters/hyphenateString';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export interface NavLink {
  title: string;
  hasChildren?: boolean;
  id?: string;
}

export const navigationLinks: NavLink[] = [
  { title: 'F.A.Qs', id: 'faqs' },
  { title: 'Security' },
  { title: 'Help' },
];

export const Header = () => {
  const pathname = usePathname();

  const [activeGroup, setActiveGroup] = useState('');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    setActiveGroup('');
    setShowMobileMenu(false);
  }, [pathname]);

  function closeMenu() {
    setActiveGroup('');
    setShowMobileMenu(false);
  }

  return (
    <>
      <nav
        className={
          'w-full h-14 480:h-20 sticky bg-transparent top-0 z-[1200] left-0'
        }
      >
        <div className='app-container py-0 x-between h-full'>
          <div className='w-full h-full gap-6 grid grid-cols-12'>
            <Logo className={'relative col-span-2 z-10'} onClick={closeMenu} />

            <ul className='hidden 1024:flex x-center col-span-8 mx-auto h-full py-0 my-0'>
              {navigationLinks.map(({ title, id, hasChildren }) => {
                const url = `/${id ?? hyphenateString(title)}`;

                const parent = `/${pathname.split('/')[1]}`;

                if (hasChildren)
                  return (
                    <li
                      onMouseEnter={() => setActiveGroup(title)}
                      onMouseLeave={() => setActiveGroup('')}
                      key={title}
                      className={'m-0'}
                    >
                      <div
                        className={clsx(
                          'nav_item',
                          parent === url && 'text-primary-main',
                        )}
                      >
                        <span className={clsx('my-auto')}>{title}</span>

                        <span
                          className={clsx(
                            'my-auto ml-1 duration-300 transition-transform',
                            activeGroup === title && 'rotate-180',
                          )}
                        >
                          <ChevronDown />
                        </span>
                      </div>
                    </li>
                  );

                return (
                  <li key={title} className={'m-0 h-full'}>
                    <Link
                      href={url}
                      onClick={closeMenu}
                      className={clsx(
                        'nav_item text-white',
                        pathname === url && 'text-primary-main',
                      )}
                    >
                      <span className={clsx('my-auto')}>{title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className='hidden 1024:flex col-span-2 my-auto relative z-[1100] gap-2'>
              <AppCtaButton
                onClick={closeMenu}
                className={'primary-button y-center ml-2'}
              >
                Join Waitlist
              </AppCtaButton>

              <MobileMenu
                className={'block 1024:hidden'}
                {...{ setShowMobileMenu, showMobileMenu }}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
