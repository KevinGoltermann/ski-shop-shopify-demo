import { GridTileImage } from 'components/grid/tile';
import Price from 'components/price';
import { Product } from 'lib/shopify/types';
import Link from 'next/link';

export function InfiniteCarousel({ products }: { products: Product[] }) {
  if (!products?.length) return null;

  // Duplicate products to create seamless infinite scroll
  // We duplicate twice so we have: [original] [duplicate] [original] [duplicate]
  // This allows the animation to loop seamlessly
  const duplicatedProducts = [...products, ...products];

  return (
    <div className="w-full overflow-hidden">
      <div className="flex animate-infinite-scroll gap-4">
        {/* First set - visible initially */}
        <ul className="flex gap-4 flex-none">
          {products.map((product) => (
            <li
              key={`${product.handle}-1`}
              className="flex min-w-[275px] max-w-[475px] flex-none flex-col"
            >
              <Link
                href={`/product/${product.handle}`}
                className="relative block aspect-square w-full overflow-hidden rounded-lg"
              >
                <GridTileImage
                  alt={product.title}
                  src={product.featuredImage?.url}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
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
        </ul>
        {/* Duplicate set - creates seamless loop */}
        <ul className="flex gap-4 flex-none">
          {products.map((product) => (
            <li
              key={`${product.handle}-2`}
              className="flex min-w-[275px] max-w-[475px] flex-none flex-col"
            >
              <Link
                href={`/product/${product.handle}`}
                className="relative block aspect-square w-full overflow-hidden rounded-lg"
              >
                <GridTileImage
                  alt={product.title}
                  src={product.featuredImage?.url}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
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
        </ul>
        {/* Another duplicate for smoother scrolling */}
        <ul className="flex gap-4 flex-none">
          {products.map((product) => (
            <li
              key={`${product.handle}-3`}
              className="flex min-w-[275px] max-w-[475px] flex-none flex-col"
            >
              <Link
                href={`/product/${product.handle}`}
                className="relative block aspect-square w-full overflow-hidden rounded-lg"
              >
                <GridTileImage
                  alt={product.title}
                  src={product.featuredImage?.url}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
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
        </ul>
      </div>
    </div>
  );
}

