import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import FilterItemDropdown from 'components/layout/search/filter/dropdown';
import { defaultSort, sorting } from 'lib/constants';
import { getProducts } from 'lib/shopify';
import { Suspense } from 'react';

export const metadata = {
  title: 'Search',
  description: 'Search for products in the store.'
};

export default async function SearchPage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

  const products = await getProducts({ sortKey, reverse, query: searchValue });
  const resultsText = products.length > 1 ? 'results' : 'result';

  return (
    <>
      {searchValue ? (
        <p className="mb-4">
          {products.length === 0
            ? 'There are no products that match '
            : `Showing ${products.length} ${resultsText} for `}
          <span className="font-bold">&quot;{searchValue}&quot;</span>
        </p>
      ) : null}
      {products.length > 0 && (
        <div className="mb-6 flex items-center justify-start">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Sort by:</span>
            <div className="w-[200px]">
              <Suspense fallback={null}>
                <FilterItemDropdown list={sorting} />
              </Suspense>
            </div>
          </div>
        </div>
      )}
      {products.length > 0 ? (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={products} />
        </Grid>
      ) : null}
    </>
  );
}
