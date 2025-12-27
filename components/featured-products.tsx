import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import { getCollectionProducts } from 'lib/shopify';

export async function FeaturedProducts() {
  // Using the existing featured items collection
  const products = await getCollectionProducts({
    collection: 'hidden-homepage-featured-items'
  });

  if (!products?.length) return null;

  return (
    <section className="mx-auto max-w-screen-2xl px-4 py-12">
      <h2 className="mb-8 text-3xl font-bold md:text-4xl">Featured</h2>
      <Grid className="grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ProductGridItems products={products} />
      </Grid>
    </section>
  );
}

