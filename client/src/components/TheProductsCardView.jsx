import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import apiEndPointObj from "../common/api_uri";
import TheListSkeleton from "./TheListSkeleton";
import currencyFormat from "../utils/currencyFormat";

const TheProductsCardView = ({ category, heading }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCategoryWiseProductData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        apiEndPointObj.getCategoryWiseProducts.url + `/${category}`,
        {
          method: apiEndPointObj.getCategoryWiseProducts.method,
          credentials: "include",
        }
      );

      const data = await response.json();
      if (!data.error) {
        setProducts(data.data);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products: " + error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategoryWiseProductData();
  }, [category]);

  return (
    <div className="container mx-auto p-2 md:p-5 font-Sen">
      <h3 className="text-2xl font-bold mt-3 capitalize">{heading}</h3>
      <div className="relative">
        {/* Card elements */}
        <div className="grid md:grid-cols-3 gap-5 mt-3">
          {loading ? (
            <TheListSkeleton
              listsToRender={10}
              content={
                <div className="animate-pulse bg-white w-full min-w-[19rem] md:min-w-[22rem] h-[28rem] rounded overflow-hidden shadow-xl">
                  <div className="w-full h-[15.5rem] bg-slate-200"></div>
                  <div className="p-4 space-y-4">
                    <h4 className="text-lg font-bold mt-3 p-3 rounded-full bg-slate-200"></h4>
                    <span className="text-slate-400 p-2 rounded-full bg-slate-200"></span>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="bg-slate-200 w-full"></span>
                      <span className="bg-slate-200 w-full"></span>
                    </div>
                    <button className="bg-slate-200 p-5 rounded-full w-full mt-4"></button>
                  </div>
                </div>
              }
            />
          ) : (
            products.map((product) => (
              <Link
                to={`/product/${product?._id}`} // Use absolute path
                key={product?._id}
                className="bg-white w-full max-w-[19rem] md:max-w-[22rem] h-[28rem] rounded shadow-xl"
              >
                <div className="bg-slate-200 w-full h-full max-h-[15.5rem] pt-3">
                  <img
                    className="w-full max-w-[14rem] object-scale-down h-full max-h-[14rem] mx-auto"
                    src={product?.productImgs[0]}
                    alt={product?.productName}
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-bold mt-3 line-clamp-1">
                    {product?.productName}
                  </h4>
                  <span className="text-slate-400 block capitalize">
                    {category}
                  </span>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-red-500">
                      <strong>{currencyFormat(product?.sellingPrice)}</strong>
                    </span>
                    <span className="text-slate-500 line-through">
                      {currencyFormat(product?.price)}
                    </span>
                  </div>
                  <button className="bg-red-500 px-5 py-1.5 rounded-full w-full mt-4 text-white hover:bg-red-600">
                    Add to cart
                  </button>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

TheProductsCardView.propTypes = {
  category: PropTypes.string,
  heading: PropTypes.string,
};

export default TheProductsCardView;
