import * as React from "react";
import shuffle from "lodash.shuffle";

import { printful } from "../lib/printful-client";
import { formatVariantName } from "../lib/format-variant-name";
import ProductGrid from "../components/ProductGrid";

const IndexPage = ({ products }) => (
  <>
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl sm:max-w-4xl px-4 py-8 sm:py-12 md:py-16 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 glitch">
          MERCH
        </h1>
      </div>

      <div className="w-full max-w-5xl sm:max-w-6xl px-4">
        <ProductGrid products={products} />
      </div>
    </div>
  </>
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
