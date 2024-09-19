import { CallToAction } from '@/components/core/Footer/CallToAction';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main>
      <div className={'py-40 y-center max-w-[200px] mx-auto'}>
        <p className={'font-medium text-center'}>404 - Page Not Found</p>

        <div className='x-center mt-3'>
          <Link href={'/'} className={'primary-button y-center'}>
            Go Home
          </Link>
        </div>
      </div>

      <CallToAction />
    </main>
  );
}
