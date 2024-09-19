import { CallToAction } from '@/components/core/Footer/CallToAction';
import { Hero } from '@/components/sections/home/Hero';
import { Features } from '@/components/sections/home/Features';

export default function Home() {
  return (
    <main>
      <Hero />
      <div className='py-10 640:py-20'>
        <Features />
      </div>
      <CallToAction />
    </main>
  );
}
