'use client';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function DesktopMenu({ menu }: { menu: Menu[] }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener('click', handleClickOutside);
    }

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Create menu items: Home + menu items from Shopify
  const menuItems = [
    { title: 'Home', path: '/' },
    ...menu
  ];

  return (
    <div className="relative hidden md:block" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-all duration-200 hover:bg-neutral-100 hover:scale-105 active:scale-95 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
      >
        <div className="relative">
          <Bars3Icon
            className={`h-5 w-5 transition-all duration-300 ${
              isOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
            }`}
          />
          <XMarkIcon
            className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
              isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0'
            }`}
          />
        </div>
      </button>
      <div
        className={`absolute left-0 top-full z-50 mt-2 w-48 origin-top rounded-md border border-neutral-200 bg-white shadow-lg transition-all duration-300 dark:border-neutral-700 dark:bg-black ${
          isOpen
            ? 'scale-100 opacity-100 translate-y-0'
            : 'scale-95 opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <ul className="py-2">
          {menuItems.map((item, index) => (
            <li
              key={item.title}
              style={{
                animationDelay: isOpen ? `${index * 50}ms` : '0ms'
              }}
              className={`transition-all duration-200 ${
                isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
              }`}
            >
              <Link
                href={item.path}
                prefetch={true}
                className="block px-4 py-2 text-sm text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-black dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

