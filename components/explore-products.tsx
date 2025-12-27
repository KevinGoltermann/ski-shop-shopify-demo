import { InfiniteCarousel } from 'components/infinite-carousel';
import { getCollectionProducts } from 'lib/shopify';
import Link from 'next/link';

export async function ExploreProducts() {
  // Using the carousel collection for explore section
  const products = await getCollectionProducts({
    collection: 'hidden-homepage-carousel'
  });

  if (!products?.length) return null;

  return (
    <section className="mx-auto max-w-screen-2xl px-4 py-12">
      <Link href="/search" className="inline-block mb-8 group">
        <h2 className="text-3xl font-bold md:text-4xl text-neutral-900 dark:text-white underline-offset-4 hover:underline cursor-pointer transition-all group-hover:text-neutral-600 dark:group-hover:text-neutral-400">
          Explore
        </h2>
      </Link>
      <InfiniteCarousel products={products} />
    </section>
  );
}

