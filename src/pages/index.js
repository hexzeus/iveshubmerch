import * as React from "react";
import shuffle from "lodash.shuffle";
import { printful } from "../lib/printful-client";
import { formatVariantName } from "../lib/format-variant-name";
import ProductGrid from "../components/ProductGrid";
import dynamic from 'next/dynamic';

const DynamicSkullHeader = dynamic(() => import('../components/SkullHeader'), { ssr: false });

const IndexPage = ({ products }) => (
  <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 min-h-screen">
    <DynamicSkullHeader />
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white text-center mb-8 sm:mb-12 glitch-3d" data-text="SHOP NOW">SHOP NOW</h2>
      <ProductGrid products={products} />
    </main>
  </div>
);

export async function getStaticProps() {
  const { result: productIds } = await printful.get("sync/products");
  const allProducts = await Promise.all(
    productIds.map(async ({ id }) => await printful.get(`sync/products/${id}`))
  );
  const products = allProducts.map(
    ({ result: { sync_product, sync_variants } }) => ({
      ...sync_product,
      variants: sync_variants.map(({ name, ...variant }) => ({
        name: formatVariantName(name),
        ...variant,
      })),
    })
  );
  return {
    props: {
      products: shuffle(products),
    },
  };
}

export default IndexPage;
