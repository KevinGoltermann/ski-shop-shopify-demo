import Grid from 'components/grid';
import { GridTileImage } from 'components/grid/tile';
import Price from 'components/price';
import { Product } from 'lib/shopify/types';
import Link from 'next/link';

export default function ProductGridItems({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product) => (
        <li key={product.handle} className="animate-fadeIn flex flex-col">
          <Link
            className="relative block aspect-square w-full overflow-hidden rounded-lg"
            href={`/product/${product.handle}`}
            prefetch={true}
          >
            <GridTileImage
              alt={product.title}
              src={product.featuredImage?.url}
              fill
              sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </Link>
          <div className="mt-3 flex flex-col gap-1">
            <Link
              href={`/product/${product.handle}`}
              className="text-sm font-medium text-neutral-900 hover:text-neutral-600 dark:text-neutral-100 dark:hover:text-neutral-400"
            >
              {product.title}
            </Link>
            <Price
              className="text-sm text-neutral-900 dark:text-neutral-100"
              amount={product.priceRange.maxVariantPrice.amount}
              currencyCode={product.priceRange.maxVariantPrice.currencyCode}
            />
          </div>
        </li>
      ))}
    </>
  );
}
