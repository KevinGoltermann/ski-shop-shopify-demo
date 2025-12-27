import FooterMenu from 'components/layout/footer-menu';
import { getMenu } from 'lib/shopify';
import { Suspense } from 'react';

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const skeleton = 'w-full h-6 animate-pulse rounded-sm bg-neutral-200 dark:bg-neutral-700';
  const menu = await getMenu('next-js-frontend-footer-menu');
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer className="text-sm text-neutral-500 dark:text-neutral-400">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 border-t border-neutral-200 px-6 py-6 text-sm md:flex-row md:gap-8 md:px-4 min-[1320px]:px-0 dark:border-neutral-700">
        <Suspense
          fallback={
            <div className="flex h-[120px] w-[200px] flex-col gap-1">
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
            </div>
          }
        >
          <FooterMenu menu={menu} />
        </Suspense>
        <div className="md:ml-auto">
          <p className="text-sm md:text-right">
            &copy; {copyrightDate} Alpine Ski Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
