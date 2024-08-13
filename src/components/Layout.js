import Link from 'next/link';
import useWishlistState from '../hooks/useWishlistState';
import useSnipcartCount from '../hooks/useSnipcartCount';

const Layout = ({ children }) => {
  const { hasItems } = useWishlistState();
  const { cart } = useSnipcartCount();
  const cartHasItems = cart.items.count !== 0;

  return (
    <>
      <header className="py-6 md:py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="md:w-1/3">
              <nav className="flex items-center justify-start space-x-3 md:space-x-6">
                <Link href="/about" className="text-gray-800 hover:text-blue-600">
                  About
                </Link>
                <Link href="/terms-of-sale" className="text-gray-800 hover:text-blue-600">
                  Terms of Sale
                </Link>
              </nav>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <Link href="/" className="flex items-center text-gray-900">
                <div className="rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <svg
                    className="w-full h-full fill-current"
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M55.4994 63.3717C64.2846 57.013 70 46.674 70 35C70 15.67 54.33 0 35 0C15.67 0 0 15.67 0 35C0 46.674 5.71537 57.013 14.5006 63.3717V44.3834L4.37865 34.0052C4.36359 33.9907 4.34884 33.9758 4.33454 33.9605C3.87179 33.4664 3.89156 32.6853 4.37865 32.2159L17.0919 20.7148C17.2087 20.6068 17.345 20.5231 17.4934 20.468L26.7394 17.0744C26.8484 17.0356 26.9624 17.0127 27.0776 17.0064C27.7486 16.97 28.3216 17.4921 28.3575 18.1727C28.3696 18.4442 28.7589 24.7007 34.9635 24.7994C41.1316 24.7007 41.533 18.4442 41.533 18.1727C41.5391 18.0499 41.5632 17.9288 41.6045 17.8133C41.8338 17.1727 42.5317 16.8418 43.1633 17.0744L52.4214 20.431C52.5699 20.486 52.7061 20.5698 52.8229 20.6778L65.6214 32.2159C65.6364 32.2304 65.6512 32.2454 65.6655 32.2606C66.1282 32.7549 66.1084 33.5359 65.6214 34.0052L55.4994 44.3834V63.3717ZM53.0297 65.0049V35.1405C53.0297 34.4591 53.5745 33.9065 54.2463 33.9065C54.9182 33.9065 55.4629 34.4591 55.4629 35.1405V40.8664L62.9327 33.1908L51.3874 22.6769L43.7716 19.888C43.0748 23.5295 40.2678 26.3767 36.6778 27.0834C31.8167 28.0404 27.1111 24.8189 26.1676 19.888L18.5518 22.6769L6.96996 33.1908L14.4519 40.8788V35.1405C14.4519 34.4591 14.9967 33.9065 15.6685 33.9065C16.3404 33.9065 16.8851 34.4591 16.8851 35.1405V64.9535C22.1696 68.1563 28.3695 70 35 70C41.5949 70 47.7638 68.176 53.0297 65.0049Z"
                    />
                  </svg>
                </div>
                <span className="text-lg font-medium">
                  IVES_HUB MERCH
                </span>
              </Link>
            </div>
            <div className="md:w-1/3 flex items-center justify-end space-x-3 -mr-2.5">
              <button
                className="snipcart-customer-signin appearance-none px-2 text-gray-800 hover:text-blue-600 rounded-md cursor-pointer focus:outline-none focus:text-blue-600 transition relative"
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
              <Link href="/wishlist" className="text-gray-800 hover:text-blue-600">
                Wishlist
              </Link>
              <button
                className="snipcart-checkout appearance-none px-2 text-gray-800 hover:text-blue-600 rounded-md cursor-pointer focus:outline-none focus:text-blue-600 transition relative"
                aria-label="Cart"
              >
                {cartHasItems && (
                  <span className="absolute bg-blue-600 rounded-full w-2 h-2 top-0 right-0 -mt-1 -mr-1"></span>
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
      <main className="py-6 md:py-12">
        <div className="max-w-6xl mx-auto px-6">{children}</div>
      </main>
      <footer className="py-6 md:py-12">
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
