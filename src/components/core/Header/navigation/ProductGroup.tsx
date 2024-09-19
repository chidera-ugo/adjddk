import {
  PieChart,
  Reports,
  Card,
  Invoice,
  Receipt,
  Users,
  Switches,
  Processor,
} from '@/components/svgs/app/NavigationItems/Product';
import { hyphenateString } from '@/helpers/converters/hyphenateString';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const ProductGroup = ({ close }: { close: () => void }) => {
  const pathname = usePathname();

  return (
    <div className={'flex gap-12'}>
      <div className='w-[320px] 1280:w-[440px]'>
        <h6>The Product</h6>
        <p className={'text-sm mt-2 leading-[20px]'}>
          With our easy-to-use software, you can track and categorize your
          expenses, set and monitor budgets, and generate.
        </p>

        <div className='flex mt-4'>
          <Link
            href={'/pricing'}
            onClick={close}
            className={'text-link text-sm'}
          >
            Pricing
          </Link>
        </div>
      </div>

      <div className='grid w-full grid-cols-12 gap-x-5'>
        {productGroupLinks.map(({ title, icon, description }) => {
          const href = `/product/${hyphenateString(title)}`;

          return (
            <Link
              href={href}
              onClick={close}
              className={'flex gap-2 py-2.5 col-span-4 group'}
              key={title}
            >
              <div>{icon}</div>

              <div>
                <div
                  className={clsx(
                    'text-base group-hover:text-primary-main font-semibold',
                    pathname === href && 'text-primary-main',
                  )}
                >
                  {title}
                </div>
                <p className={'text-xs mt-1'}>{description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export const productGroupLinks = [
  {
    title: 'Budgeting',
    description: 'Budgeting and automation tools ',
    icon: <PieChart />,
  },
  {
    title: 'Invoice',
    description: 'Streamline accounts payable',
    icon: <Invoice />,
  },
  {
    title: 'Integrations',
    description: 'Custom pages for your products',
    icon: <Switches />,
  },
  {
    title: 'Cards',
    description: 'Virtual and physical cards',
    icon: <Card />,
  },
  {
    title: 'Payroll',
    description: 'Simplified Bulk Payments',
    icon: <Receipt />,
  },
  {
    title: 'AI Powered Insights',
    description: 'Complex data, easy-to-understand',
    icon: <Processor />,
  },
  {
    title: 'Reimbursement',
    description: 'Reimburse out-of-pocket expenses',
    icon: <Users />,
  },
  {
    title: 'Analytics',
    description: 'Accurate spending reports',
    icon: <Reports />,
  },
];
