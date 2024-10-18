import React from "react";
import TheAddProduct from "../components/TheAddProduct";

const TheAllProductsPage = () => {
  return (
    <div>
      <div>
        {/* Header */}
        <div className="bg-red-500 rounded-md p-3 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">All Products</h3>
          <button className="text-white border-2 px-5 py-1.5 rounded-md border-white hover:bg-white hover:text-red-500 transition-all">
            Upload a product
          </button>
        </div>

        {/* All Products body */}
      </div>

      <TheAddProduct />
    </div>
  );
};

export default TheAllProductsPage;
