import { AppCtaButton } from '@/components/buttons/AppCtaButton';
import { navigationLinks } from '@/components/core/Header';
import { MobileMenuWrapper } from '@/components/modal/ModalWrapper';
import { ChevronDown } from '@/components/svgs/ChevronDown';
import { Cancel, Hamburger } from '@/components/svgs/Navigation';
import { hyphenateString } from '@/helpers/converters/hyphenateString';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dispatch, SetStateAction, useState } from 'react';

interface Props {
  setShowMobileMenu: Dispatch<SetStateAction<boolean>>;
  showMobileMenu: boolean;
  className: string;
}

export const MobileMenu = ({
  showMobileMenu,
  setShowMobileMenu,
  className,
}: Props) => {
  const pathname = usePathname();

  const [activeGroup, setActiveGroup] = useState('');

  const subNavItems: any[] = [];

  function close() {
    setShowMobileMenu(false);
  }

  return (
    <div className={clsx('y-center', className)}>
      <button
        onClick={() => setShowMobileMenu((prev) => !prev)}
        className='my-auto h-10 -mr-2 w-10 rounded-lg'
      >
        <div className='text-white x-center'>
          {showMobileMenu ? <Cancel /> : <Hamburger />}
        </div>
      </button>

      <MobileMenuWrapper
        show={showMobileMenu}
        close={close}
        className='w-full y-center pt-3 pb-5 bg-neutral-150'
      >
        <ul>
          {navigationLinks.map(({ title, id, hasChildren }) => {
            const url = `/${id ?? hyphenateString(title)}`;

            const parent = `/${pathname.split('/')[1]}`;

            const isActive = activeGroup === title;

            if (hasChildren)
              return (
                <li key={title}>
                  <button
                    onClick={() => setActiveGroup(isActive ? '' : title)}
                    type={'button'}
                    className={clsx(
                      'w-full mobile_menu_item',
                      isActive || parent === url
                        ? 'text-primary-main'
                        : 'text-neutral-main',
                    )}
                  >
                    <span className='my-auto'>{title}</span>

                    <span
                      className={clsx(
                        'transition-transform my-auto',
                        isActive && 'rotate-180',
                      )}
                    >
                      <ChevronDown />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
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
                        <div
                          className={'h-full m-4 px-4 py-2 bg-white rounded-xl'}
                        >
                          {subNavItems.map(({ label, url }) => {
                            return (
                              <Link
                                key={label}
                                onClick={close}
                                className={clsx(
                                  'block y-center font-medium text-sm h-10 my-auto',
                                  pathname === url && 'text-primary-main',
                                )}
                                href={url}
                              >
                                <span className='my-auto'>{label}</span>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );

            return (
              <li key={title}>
                <Link
                  href={url}
                  onClick={close}
                  className={clsx(
                    'mobile_menu_item',
                    pathname === url && 'text-primary-main',
                  )}
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className='x-center w-full border-t border-neutral-310 pt-5 mt-4 my-auto relative gap-2'>
          {/*<AppCtaButton*/}
          {/*  onClick={close}*/}
          {/*  type={'signin'}*/}
          {/*  className={*/}
          {/*    'y-center px-5 outline-button border-none w-[107px] text-center'*/}
          {/*  }*/}
          {/*>*/}
          {/*  Log in*/}
          {/*</AppCtaButton>*/}

          <AppCtaButton
            onClick={close}
            className={'y-center primary-button w-[107px] text-center'}
          >
            Join Waitlist
          </AppCtaButton>
        </div>
      </MobileMenuWrapper>
    </div>
  );
};
