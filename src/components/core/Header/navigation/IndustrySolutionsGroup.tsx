import { hyphenateString } from '@/helpers/converters/hyphenateString';
import { PrismicRichText } from '@prismicio/react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPostDocument } from '@/types/prismic';
import { usePathname } from 'next/navigation';

export const IndustrySolutionsGroup = ({
  posts,
  close,
}: {
  close: () => void;
  posts: BlogPostDocument<string>[];
}) => {
  const pathname = usePathname();

  return (
    <div className={'x-between gap-12'}>
      <div className={'flex gap-12'}>
        <div>
          <h6 className={'text-base font-semibold'}>Industry</h6>

          <div className='w-full mt-5 gap-x-5'>
            {industrySolutionsLinks?.links?.industry?.map((link) => {
              const href = `/industry-solutions/${hyphenateString(
                industrySolutionsLinks?.modifier(link),
              )}`;

              return (
                <Link
                  href={href}
                  onClick={close}
                  className={'flex py-2 col-span-1 group'}
                  key={link}
                >
                  <div
                    className={clsx(
                      'text-neutral-700 font-normal group-hover:text-primary-main text-base',
                      pathname === href && 'text-primary-main',
                    )}
                  >
                    {link}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div>
          <h6 className={'text-base font-semibold'}>Company Size</h6>

          <div className='w-full mt-5 gap-x-5'>
            {industrySolutionsLinks?.links?.['company size']?.map((link) => {
              const href = `/industry-solutions/${hyphenateString(
                industrySolutionsLinks?.modifier(link),
              )}`;

              return (
                <Link
                  href={href}
                  onClick={close}
                  className={'flex py-2 col-span-1 group'}
                  key={link}
                >
                  <div
                    className={clsx(
                      'text-neutral-700 font-normal group-hover:text-primary-main text-base',
                      pathname === href && 'text-primary-main',
                    )}
                  >
                    {link}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div>
        <h6 className={'text-base font-semibold'}>Industry Insights</h6>

        <div className='grid grid-cols-2 mt-5 gap-8'>
          {posts?.map(({ uid, id, data: { banner, title, description } }) => {
            return (
              <Link
                key={id}
                onClick={close}
                href={`/blog/${uid}`}
                className={'w-[224px] group'}
              >
                <div className='relative overflow-hidden h-[107px] rounded-lg bg-neutral-200'>
                  <Image
                    src={banner.url ?? ''}
                    alt={''}
                    fill
                    className={'object-cover'}
                  />
                </div>

                <h6
                  className={
                    'mt-2 prismic_title group-hover:underline font-medium text-sm line-clamp-2'
                  }
                >
                  <PrismicRichText field={title} />
                </h6>

                <p className={'mt-2 text-neutral-440 text-xs line-clamp-2'}>
                  {description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const industrySolutionsLinks = {
  links: {
    industry: [
      'For Finance Officers',
      'For Technology Teams',
      'For Agencies',
      'For Employees',
      'For Retail',
    ],
    'company size': [
      'For Startups',
      'For Small Businesses',
      'For Large Enterprises',
    ],
  },
  modifier: (link: string) => link.split('For ')[1]!,
};
