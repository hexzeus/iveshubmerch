// pages/terms.tsx
import Link from 'next/link';

const TermsPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Return and Refund Policy</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">What’s your return policy?</h2>
        <p className="text-lg text-gray-700">
          We do not offer returns or exchanges at this time. However, if there’s an issue with your order, please contact us at{" "}
          <a
            href="mailto:iveshubproducts@yahoo.com"
            className="text-blue-600 hover:text-blue-800"
          >
            iveshubproducts@yahoo.com
          </a>{" "}
          and we’ll be happy to assist you.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Do you offer refunds?</h2>
        <p className="text-lg text-gray-700">
          Refunds are available only for orders that receive incorrect or damaged items. If you receive an item that is incorrect or damaged, please contact us at{" "}
          <a
            href="mailto:iveshubproducts@yahoo.com"
            className="text-blue-600 hover:text-blue-800"
          >
            iveshubproducts@yahoo.com
          </a>{" "}
          with photos of the item and your order number. We will resolve the issue promptly.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Can I exchange an item for a different size/color?</h2>
        <p className="text-lg text-gray-700">
          Currently, we do not offer exchanges. Please refer to our sizing charts available in the product description section to ensure you select the correct size. If you receive an item with a mislabeling issue, contact us at{" "}
          <a
            href="mailto:iveshubproducts@yahoo.com"
            className="text-blue-600 hover:text-blue-800"
          >
            iveshubproducts@yahoo.com
          </a>{" "}
          within a week of receiving your order. Include your order number and photos of the mislabeled item. We will either send you a replacement or issue a refund.
        </p>
      </section>
    </div>
  );
};

export default TermsPage;
