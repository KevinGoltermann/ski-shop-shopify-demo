'use client';

import clsx from 'clsx';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function FooterMenuItem({ item }: { item: Menu }) {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname === item.path);

  useEffect(() => {
    setActive(pathname === item.path);
  }, [pathname, item.path]);

  return (
    <li>
      <Link
        href={item.path}
        className={clsx(
          'block text-sm underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300',
          {
            'text-black dark:text-neutral-300': active
          }
        )}
      >
        {item.title}
      </Link>
    </li>
  );
}

export default function FooterMenu({ menu }: { menu: Menu[] }) {
  if (!menu.length) return null;

  // Split menu items into columns based on number of items
  // Use 2 columns for small lists, 3 for larger lists
  const columnCount = menu.length <= 6 ? 2 : 3;
  const itemsPerColumn = Math.ceil(menu.length / columnCount);
  
  const columns = [];
  for (let i = 0; i < columnCount; i++) {
    columns.push(menu.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn));
  }

  return (
    <nav>
      <div className={`grid gap-x-6 gap-y-1 ${columnCount === 2 ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-3'}`}>
        {columns.map((column, colIndex) => (
          <ul key={colIndex} className="flex flex-col gap-1">
            {column.map((item: Menu) => {
              return <FooterMenuItem key={item.title} item={item} />;
            })}
          </ul>
        ))}
      </div>
    </nav>
  );
}
