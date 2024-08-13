import useWishlistState from "../hooks/useWishlistState";
import ProductGrid from "../components/ProductGrid";

const WishlistPage = () => {
  const { hasItems, items } = useWishlistState();

  return (
    <>
      <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 min-h-screen flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl px-4 py-8 md:py-16 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Your Wishlist
          </h1>
        </div>

        {hasItems ? (
          <div className="w-full max-w-6xl px-4">
            <ProductGrid products={items} />
          </div>
        ) : (
          <p className="text-center text-gray-400 text-xl md:text-2xl lg:text-3xl">
            Your list is empty.
          </p>
        )}
      </div>
    </>
  );
};

export default WishlistPage;
