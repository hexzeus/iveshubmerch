import Link from 'next/link';
import useWishlistState from '../hooks/useWishlistState';
import useSnipcartCount from '../hooks/useSnipcartCount';

const Layout = ({ children }) => {
  const { hasItems } = useWishlistState();
  const { cart } = useSnipcartCount();
  const cartHasItems = cart.items.count !== 0;

  return (
    <>
      <header className="py-6 md:py-12 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="md:w-1/3">
              <nav className="flex items-center justify-start space-x-3 md:space-x-6">
                <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  About
                </Link>
                <Link href="/terms-of-sale" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  Terms of Sale
                </Link>
              </nav>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <Link href="/" className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                <img
                  src="/favicon.ico"
                  alt="IVES_HUB MERCH Logo"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <span className="text-lg font-medium">
                  IVES_HUB MERCH
                </span>
              </Link>
            </div>
            <div className="md:w-1/3 flex items-center justify-end space-x-3 -mr-2.5">
              <button
                className="snipcart-customer-signin appearance-none px-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 rounded-md cursor-pointer focus:outline-none"
                aria-label="User login"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-current"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                </svg>
              </button>
              <Link href="/wishlist" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                Wishlist
              </Link>
              <button
                className="snipcart-checkout appearance-none px-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 rounded-md cursor-pointer focus:outline-none relative"
                aria-label="Cart"
              >
                {cartHasItems && (
                  <span className="absolute bg-cyan-500 rounded-full w-2 h-2 top-0 right-0 -mt-1 -mr-1"></span>
                )}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-current"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="py-6 md:py-12 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">{children}</div>
      </main>
      <footer className="py-6 md:py-12 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <p className="text-sm text-gray-500">
              © 2024 IVES_HUB MERCH. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
