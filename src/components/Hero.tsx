import * as React from "react";

import type { PrintfulProduct } from "../types";

type HeroProps = {
  product: PrintfulProduct;
};

const Hero: React.FC<HeroProps> = ({ product }) => (
  <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 p-4 sm:p-6 md:p-12 shadow-lg rounded-lg">
    <div className="flex flex-col md:flex-row items-center">
      <div className="flex items-center justify-center w-full md:w-1/3 p-4 sm:p-6 bg-gray-800 rounded-lg">
        <span className="text-gray-500">image</span>
      </div>
      <div className="w-full md:w-2/3 text-center md:text-left mt-6 md:mt-0">
        <h1 className="text-white text-xl sm:text-2xl md:text-4xl font-extrabold">
          {product.name}
        </h1>
      </div>
    </div>
  </div>
);

export default Hero;
