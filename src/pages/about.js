import Link from 'next/link';

const TermsPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-900 px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-3xl sm:max-w-4xl mx-auto p-6 sm:p-8 bg-gray-800 shadow-2xl rounded-lg">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6 sm:mb-8">
          Welcome to IVES_HUB MERCH
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-6">
          You are currently exploring the official terms and conditions for{" "}
          <Link
            href="https://iveshubproducts.vercel.app/"
            title="Learn more about IVES_HUB MERCH"
            className="text-cyan-500 hover:text-cyan-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            IVES_HUB MERCH
          </Link>
          , the premier destination for cutting-edge merchandise and seamless eCommerce solutions.
        </p>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-6">
          Powered by Next.js, TailwindCSS, and Printful, our platform offers a streamlined, headless eCommerce experience, designed to provide you with a smooth and stylish shopping journey. We take pride in delivering top-tier products and services, all hosted and optimized on Vercel.
        </p>

        <p className="text-base sm:text-lg md:text-xl text-gray-300">
          For any inquiries or support, feel free to contact our dedicated team at{" "}
          <a
            href="mailto:support@iveshub.com"
            className="text-cyan-500 hover:text-cyan-300"
          >
            support@iveshub.com
          </a>.
        </p>
      </div>
    </div>
  );
};

export default TermsPage;
