import { GetInTouch } from '@/components/sections/contact-us/GetInTouch';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
};

export default async function ContactUs() {
  return (
    <main>
      <GetInTouch />
    </main>
  );
}
