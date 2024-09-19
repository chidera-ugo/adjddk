import './styles/globals.css';
import { Footer } from '@/components/core/Footer';
import { Header } from '@/components/core/Header';
import { JoinWaitlist } from '@/components/modules/JoinWaitlist';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from '@/app/providers';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s - Jitaku',
    default: 'Jitaku',
  },
  description: 'Spend Wisely, Thrive Limitlessly',
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang='en'>
      <head></head>

      <body className={clsx(inter.className, '')}>
        <Header />

        <Providers>{children}</Providers>

        <Footer />

        <JoinWaitlist />

        <div id='portal' />
      </body>
    </html>
  );
}
