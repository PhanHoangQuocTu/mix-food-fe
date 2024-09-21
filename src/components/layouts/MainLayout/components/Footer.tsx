import { Icons } from '@/assets/icons';
import { Link } from 'next-view-transitions';

import { siteConfig } from '@/config/site';

const Footer = () => {
  return (
    <footer className="bg-light dark:bg-primary container z-50 flex h-auto w-full flex-col justify-center gap-8">
      <div className="flex w-full flex-col items-center justify-between gap-6 py-6 md:flex-row">
        <div className="col-span-2 flex justify-center lg:col-span-1">
          <span className="text-sm">
            Copyright © {new Date().getFullYear()} by{' '}
            <Link href={siteConfig.facebook} target="_blank" className="hover:underline">
              Mix Food
            </Link>
            . All Rights Reserved.
          </span>
        </div>
        <div className="col-span-2 flex flex-col items-center gap-4 lg:col-span-1">
          <div className="flex justify-center gap-4">
            <Link href={siteConfig.facebook} target="_blank" className="transition-all hover:scale-125">
              <Icons.facebook className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
