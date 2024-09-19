'use client';

import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <ToastContainer
        position={'bottom-left'}
        autoClose={3000}
        theme={'colored'}
        hideProgressBar={true}
        bodyClassName='p-2'
        pauseOnHover
      />

      {children}
    </>
  );
}
