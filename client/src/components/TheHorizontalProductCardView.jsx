import React, { useEffect, useRef, useState } from "react";
import currencyFormat from "../utils/currencyFormat";
import { FaArrowAltCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import PropTypes from "prop-types";
import apiEndPointObj from "../common/api_uri";

const TheHorizontalProductCardView = ({ category, heading }) => {
  const navRef = useRef();

  const [products, setProducts] = useState([]);

  const handleNav = (direction) => {
    if (navRef.current) {
      if (direction === "left") {
        navRef.current.scrollLeft -= 200;
      } else {
        navRef.current.scrollLeft += 200;
      }
    }
  };

  const getProductsData = async () => {
    const data = await fetch(
      apiEndPointObj.getCategoryWiseProducts.url + `/${category}`,
      {
        method: apiEndPointObj.getCategoryWiseProducts.method,
        credentials: "include",
      }
    );

    const results = await data.json();
    if (results.error === false) {
      setProducts(results.data);
    }
    console.log(results.data);
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div className="container mx-auto p-2 md:p-5 font-Sen">
      <h3 className="text-2xl font-bold mt-3">{heading}</h3>
      <div className="relative">
        {/* Slider buttons */}
        <div className="md:flex md:flex-col justify-between items-center hidden">
          <button
            className="bg-red-500 text-xl p-1 rounded-full text-white absolute -left-3 top-[74px]"
            onClick={() => handleNav("left")}
          >
            <FaArrowCircleLeft />
          </button>
          <button
            className="bg-red-500 text-xl p-1 rounded-full text-white absolute -right-3 top-[74px]"
            onClick={() => handleNav("right")}
          >
            <FaArrowAltCircleRight />
          </button>
        </div>

        {/* Scrollable product container */}
        <div
          className="mt-3 flex items-center gap-5 overflow-x-scroll no-scrollbar"
          ref={navRef}
        >
          {products.map((product, index) => {
            console.log(product);
            return (
              <div
                key={index}
                className="cursor-pointer flex items-center w-full min-w-[20rem] h-[150px] bg-white shadow-lg rounded overflow-hidden"
              >
                {/* Product Img */}
                <div className="w-full min-w-[9rem] h-full">
                  <img
                    className="w-full bg-slate-200 h-full object-cover"
                    src={product?.productImgs[0]}
                    alt={`${product?.productName}'s image`}
                  />
                </div>

                {/* Product details */}
                <div className="pl-4 space-y-1">
                  <h3 className="text-lg font-bold line-clamp-1">
                    {product?.productName}
                  </h3>
                  <p className="text-sm text-gray-500 capitalize">{category}</p>
                  <div className=" space-x-2 pr-2">
                    <small className="text-xs text-red-500">
                      {currencyFormat(product?.sellingPrice)}
                    </small>
                    <small className="text-xs text-gray-500 line-through">
                      {currencyFormat(product?.price)}
                    </small>
                  </div>
                  <button className="bg-red-500 px-5 py-1 rounded-full text-white hover:bg-red-600 transition-all">
                    Add to cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

TheHorizontalProductCardView.propTypes = {
  category: PropTypes.string,
  heading: PropTypes.string,
};

export default TheHorizontalProductCardView;
