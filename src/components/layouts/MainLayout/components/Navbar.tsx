import React from 'react';
import { Icons } from '@/assets/icons';
import { ROUTES } from '@/routes';
import { Link } from 'next-view-transitions';

import { cn } from '@/lib/utils';
import { HStack } from '@/components/ui/h-stack';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const NavList = [
  {
    name: 'Home',
    href: ROUTES.HOME,
  },
  // {
  //   name: 'Events',
  //   href: ROUTES.EVENTS,
  // },
];

const NavItem = ({ label, href, className }: { label: string; href: string; className?: string }) => {
  return (
    <Link href={href} className={cn('w-full rounded-lg py-2.5 font-medium', className)}>
      {label}
    </Link>
  );
};

const NavbarDesktop = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-2">
        {NavList?.map((item) => (
          <NavItem
            key={item.name}
            label={item.name}
            href={item.href}
            className="hover:text-primary-700 px-4 text-white transition-all duration-300 ease-in-out active:scale-90"
          />
        ))}
      </ul>
    </nav>
  );
};

const NavbarMobile = () => {
  return (
    <div className="flex items-center justify-center lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button>
            <Icons.alignJustify className="text-primary-700" width={24} height={24} />
          </button>
        </SheetTrigger>
        <SheetContent isShowCloseIcon={false}>
          <SheetHeader>
            <SheetTitle>
              <HStack pos="apart">
                <span className="text-primary-700 font-bold">Mix Food</span>

                <HStack>
                  <SheetClose>
                    <Icons.x width={32} height={32} />
                  </SheetClose>
                </HStack>
              </HStack>
            </SheetTitle>
          </SheetHeader>
          <ul className="flex flex-col gap-2">
            {NavList?.map((item) => (
              <NavItem key={item.name} label={item.name} href={item.href} />
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export { NavbarDesktop, NavbarMobile };
