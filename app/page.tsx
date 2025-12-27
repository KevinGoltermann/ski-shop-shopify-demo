import { Hero } from 'components/hero';
import { FeaturedProducts } from 'components/featured-products';
import { ExploreProducts } from 'components/explore-products';
import Footer from 'components/layout/footer';

export const metadata = {
  description:
    'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <ExploreProducts />
      <Footer />
    </>
  );
}
