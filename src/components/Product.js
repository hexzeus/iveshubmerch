import { useState } from "react";
import Image from "next/image";
import useWishlistDispatch from "../hooks/useWishlistDispatch";
import useWishlistState from "../hooks/useWishlistState";
import VariantPicker from "./VariantPicker";

const Product = ({ id, name, variants }) => {
  const { addItem } = useWishlistDispatch();
  const { isSaved } = useWishlistState();

  const [firstVariant] = variants;
  const oneStyle = variants.length === 1;

  const [activeVariantExternalId, setActiveVariantExternalId] = useState(
    firstVariant.external_id
  );

  const activeVariant = variants.find(
    (v) => v.external_id === activeVariantExternalId
  );

  const activeVariantFile = activeVariant?.files.find(
    ({ type }) => type === "preview"
  );

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: activeVariant?.currency || "USD",
  }).format(activeVariant?.retail_price || 0);

  const addToWishlist = () => addItem({ id, name, variants });

  const onWishlist = isSaved(id);

  return (
    <article className="border border-gray-700 rounded-lg bg-gray-900 flex flex-col relative shadow-xl transition-transform transform hover:scale-105">
      <button
        aria-label="Add to wishlist"
        className="appearance-none absolute top-0 right-0 mt-2 mr-2 sm:mt-3 sm:mr-3 text-gray-400 focus:text-gray-600 hover:text-red-500 transition focus:outline-none"
        onClick={addToWishlist}
      >
        {onWishlist ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-red-500"
          >
            <path fill="none" d="M0 0H24V24H0z" />
            <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-gray-400"
          >
            <path fill="none" d="M0 0H24V24H0z" />
            <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z" />
          </svg>
        )}
      </button>
      <div className="flex items-center justify-center flex-1 sm:flex-shrink-0 w-full p-4 sm:p-6 bg-gray-800 rounded-t-lg">
        {activeVariantFile && (
          <Image
            src={activeVariantFile.preview_url}
            width={250}
            height={250}
            alt={`${activeVariant.name} ${name}`}
            title={`${activeVariant.name} ${name}`}
            className="rounded-lg"
          />
        )}
      </div>
      <div className="flex-1 p-4 sm:p-6 pt-0 text-center">
        <p className="mb-1 font-semibold text-white text-base sm:text-lg">{name}</p>
        <p className="text-sm sm:text-md text-cyan-400">{formattedPrice}</p>
      </div>
      <div className="p-3 sm:p-4 flex flex-col sm:flex-row justify-center items-center">
        <VariantPicker
          value={activeVariantExternalId}
          onChange={({ target: { value } }) =>
            setActiveVariantExternalId(value)
          }
          variants={variants}
          disabled={oneStyle}
          className="w-full sm:w-auto mb-2 sm:mb-0"
        />
        <button
          className="snipcart-add-item w-full sm:w-auto transition flex-shrink-0 py-2 px-4 border border-gray-600 hover:border-transparent shadow-sm text-sm font-medium bg-gray-700 text-white hover:bg-cyan-600 hover:text-white focus:bg-cyan-600 focus:outline-none rounded-lg"
          data-item-id={activeVariantExternalId}
          data-item-price={activeVariant.retail_price}
          data-item-url={`/api/products/${activeVariantExternalId}`}
          data-item-description={activeVariant.name}
          data-item-image={activeVariantFile?.preview_url}
          data-item-name={name}
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default Product;
