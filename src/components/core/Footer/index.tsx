'use client';

import { Logo } from '@/components/commons/Logo';
import { Socials } from '@/components/core/Footer/Socials';
import { hyphenateString } from '@/helpers/converters/hyphenateString';
import clsx from 'clsx';
import Link from 'next/link';
import { ReactNode } from 'react';

export const Footer = () => {
  return (
    <footer className={'py-20 relative z-10 640:py-32 bg-[#000824]'}>
      <div className='app-container'>
        <div className='425:flex block align-middle justify-between'>
          <Logo white />
        </div>

        <div className='grid mt-10 640:mt-20 grid-cols-12 gap-4'>
          {footerGroups.map(
            (
              {
                title,
                nestedPages,
                headerHiddenOnMobile,
                modifier,
                nestedSections,
                header,
                links,
              },
              i,
            ) => {
              const isLast = i === footerGroups.length - 1;
              const parentHref = hyphenateString(title);

              return (
                <div
                  className={
                    'col-span-12 425:col-span-6 960:mt-0 mt-4 960:col-span-3'
                  }
                  key={title}
                >
                  <div
                    className={clsx(
                      'h-8 425:h-12',
                      headerHiddenOnMobile && '425:block hidden',
                    )}
                  >
                    {header ? (
                      <span
                        className={clsx(
                          isLast && 'footer_links_header flex 960:justify-end',
                        )}
                      >
                        {header}
                      </span>
                    ) : (
                      <h6 className={clsx('footer_links_header')}>{title}</h6>
                    )}
                  </div>

                  {links.map((link) => {
                    const href = `/${nestedPages || nestedSections ? parentHref : ''
                      }${nestedSections ? '#' : nestedPages ? '/' : ''
                      }${hyphenateString(modifier ? modifier(link) : link)}`;

                    return (
                      <Link
                        href={href}
                        key={link}
                        className={clsx(
                          'footer_link_item',
                          isLast && '960:text-right',
                        )}
                      >
                        {link}
                      </Link>
                    );
                  })}
                </div>
              );
            },
          )}
        </div>

        <Socials className='425:hidden flex mt-5' />

        <div
          className={
            'text-justify leading-6 mt-16 640:mt-24 text-white font-light text-opacity-60 text-sm 640:leading-[34px] 640:text-base'
          }
        >
          {`Jitaku operates as an innovative financial technology platform, distinct from conventional banking institutions. Our banking services are facilitated through our trusted partner, 9PSB, a financial service provider duly licensed by the Central Bank of Nigeria (CBN). Embrace financial freedom with Jitaku—Spend wisely, Thrive limitlessly. © ${new Date().getFullYear()} Jitaku. All rights reserved. The Jitaku website and mobile applications are proudly owned by Fundle Africa Technology Nigeria Limited, a company duly registered with the Corporate Affairs Commission.`}
        </div>
      </div>
    </footer>
  );
};

const footerGroups: {
  title: string;
  prefix?: string;
  header?: ReactNode;
  links: string[];
  nestedPages?: boolean;
  nestedSections?: boolean;
  headerHiddenOnMobile?: boolean;
  modifier?: (link: string) => string;
}[] = [
    {
      title: 'Company',
      links: ['About us', 'Blog', 'Pricing', 'Contact Us'],
    },
    {
      title: 'Legal',
      header: <Socials />,
      headerHiddenOnMobile: true,
      nestedPages: true,
      links: ['Privacy Policy', 'Cookie Policy', 'Terms of Use', 'FAQs'],
    },
  ];
