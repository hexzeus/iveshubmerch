import Product from "./Product";

const ProductGrid = ({ products }) => {
  if (!products || products.length === 0) return null;

  return (
    <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 py-6 sm:py-8 bg-gradient-to-b from-gray-900 via-black to-gray-900 rounded-lg shadow-xl">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;
