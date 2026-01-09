import CartModal from 'components/cart/modal';
import SkiIcon from 'components/icons/ski-icon';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
import Search, { SearchSkeleton } from './search';

const { SITE_NAME } = process.env;

export async function Navbar() {
  return (
    <nav className="relative flex items-center justify-between p-4 lg:px-6">
      <div className="flex w-full items-center">
        <div className="flex w-full items-center md:w-1/3">
          <div className="block flex-none md:hidden">
            <Suspense fallback={null}>
              <MobileMenu />
            </Suspense>
          </div>
          <Link
            href="/"
            prefetch={true}
            className="mr-4 flex items-center justify-center transition-opacity hover:opacity-70 md:mr-6"
            aria-label="Home"
          >
            <SkiIcon className="h-8 w-8" />
          </Link>
          <ul className="hidden gap-6 text-sm md:flex md:items-center">
            <li>
              <Link
                href="/search"
                prefetch={true}
                className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
              >
                Explore
              </Link>
            </li>
            <li>
              <Link
                href="/search/skis"
                prefetch={true}
                className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
              >
                Skis
              </Link>
            </li>
            <li>
              <Link
                href="/search/snowboards"
                prefetch={true}
                className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
              >
                Snowboards
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-1 items-center justify-center md:w-1/3">
          <Link
            href="/"
            prefetch={true}
            className="flex items-center justify-center"
          >
            <div className="text-sm font-medium uppercase md:text-base">
              {SITE_NAME}
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-end gap-4 md:w-1/3">
          <div className="hidden md:block">
            <Suspense fallback={<SearchSkeleton />}>
              <Search />
            </Suspense>
          </div>
          <Suspense fallback={null}>
            <CartModal />
          </Suspense>
        </div>
      </div>
    </nav>
  );
}
