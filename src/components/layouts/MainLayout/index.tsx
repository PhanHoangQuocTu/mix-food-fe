'use client';

import React from 'react';
import { AppContextProvider } from '@/context/app.context';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <AppContextProvider value={{}}>
      <article className="relative min-h-screen w-full overflow-hidden text-clip">
        <main className="relative min-h-screen">{children}</main>
      </article>
    </AppContextProvider>
  );
};

export default MainLayout;
