'use client';

import React from 'react';
import { AppContextProvider } from '@/context/app.context';

import Footer from './components/Footer';
import Header from './components/Header';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <AppContextProvider value={{}}>
      <div>
        <Header />

        <article className="relative min-h-screen w-full overflow-hidden text-clip bg-gray-50">
          <main className="relative min-h-screen">{children}</main>
        </article>

        <Footer />
      </div>
    </AppContextProvider>
  );
};

export default MainLayout;
