import React, { useEffect, useRef } from "react";
import currencyFormat from "../utils/currencyFormat";
import { FaArrowAltCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import PropTypes from "prop-types";
import apiEndPointObj from "../common/api_uri";

const TheHorizontalProductCardView = ({ category, heading }) => {
  const navRef = useRef();

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
    console.log(results);
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
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el, index) => (
            <div
              key={index}
              className="cursor-pointer flex items-center w-full min-w-[20rem] h-[150px] bg-white shadow-lg rounded overflow-hidden"
            >
              {/* Product Img */}
              <div className="bg-yellow-500 w-full min-w-[9rem] h-full">
                <img
                  className="w-full h-full object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYx19nWwMKtIHsZ9KJn_eSwB2DQrKIBHcIsw&s"
                  alt="Product"
                />
              </div>

              {/* Product details */}
              <div className="pl-4 space-y-1">
                <h3 className="text-lg font-bold">Apple Airpods</h3>
                <p className="text-sm text-gray-500">Airpods</p>
                <div className=" space-x-2 pr-2">
                  <small className="text-sm text-red-500">
                    {currencyFormat(100)}
                  </small>
                  <small className="text-sm text-gray-500 line-through">
                    {currencyFormat(50)}
                  </small>
                </div>
                <button className="bg-red-500 px-5 py-1 rounded-full text-white hover:bg-red-600 transition-all">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
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
