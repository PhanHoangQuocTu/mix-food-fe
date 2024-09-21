import React from 'react';

import { HStack } from '@/components/ui/h-stack';

import { NavbarDesktop, NavbarMobile } from './Navbar';

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-20 w-full justify-center border-b-[0.25px] before:absolute before:h-20 before:w-full before:backdrop-blur-md">
      <HStack pos="apart" noWrap className="container relative z-30 w-full">
        <span className="text-primary-700 text-3xl font-bold">Mix Food</span>

        <div className="flex w-auto items-center justify-end gap-2 md:gap-4 xl:gap-6">
          <NavbarDesktop />

          <NavbarMobile />
        </div>
      </HStack>
    </header>
  );
};

export default Header;
