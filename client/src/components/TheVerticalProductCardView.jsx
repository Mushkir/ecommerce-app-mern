import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import PropTypes from "prop-types";
import apiEndPointObj from "../common/api_uri";
import TheListSkeleton from "./TheListSkeleton";
import currencyFormat from "../utils/currencyFormat";
import handleAddToCart from "../helpers/handleAddToCart";

const TheVerticalProductCardView = ({ category, heading }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navRef = useRef();

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
      if (data.error === false) {
        setLoading(false);
        setProducts(data.data);
      }
      // console.log(data);
    } catch (error) {
      console.error(
        "Error from get product in vertical view: " + error.message
      );
    }
  };

  useEffect(() => {
    getCategoryWiseProductData();
  }, []);

  const handleNav = (direction) => {
    if (direction === "left") {
      navRef ? (navRef.current.scrollLeft -= 200) : null;
    } else {
      navRef ? (navRef.current.scrollLeft += 200) : null;
    }
  };

  return (
    <div className="container mx-auto p-2 md:p-5 font-Sen">
      <h3 className="text-2xl font-bold mt-3 capitalize">{heading}</h3>
      <div className="relative">
        <div className="hidden md:flex justify-between items-center">
          <button
            className="absolute top-[14rem] -left-3 bg-red-500 p-1 rounded-full text-white text-2xl"
            onClick={() => handleNav("left")}
          >
            <FaArrowCircleLeft />
          </button>

          <button
            className="bg-red-500 p-1 rounded-full text-white text-2xl absolute -right-3 top-[14rem]"
            onClick={() => handleNav("right")}
          >
            <FaArrowCircleRight />
          </button>
        </div>

        {/* Card elements */}
        <div
          className=" flex items-center gap-5 mt-3 overflow-scroll no-scrollbar"
          ref={navRef}
        >
          {loading ? (
            <TheListSkeleton
              listsToRender={10}
              content={
                <div className=" animate-pulse bg-white w-full min-w-[19rem] md:min-w-[22rem] h-[28rem] rounded overflow-hidden shadow-xl">
                  {/* Img */}
                  <div className=" w-full h-[15.5rem] bg-slate-200">
                    <img
                      className=" w-full bg-slate-200"
                      // src="https://cdn.prod.website-files.com/62be7e9a601a60e47d2a2154/639902cc76db9918ef183ee0_img-holding-stethoscope-in-heart-shape-1024x683.jpeg"
                      alt=""
                    />
                  </div>

                  {/* Details */}
                  <div className="p-4 space-y-4">
                    <h4 className="text-lg font-bold mt-3 p-3 rounded-full bg-slate-200"></h4>
                    <span className=" text-slate-400 mt-1 block capitalize p-2 rounded-full bg-slate-200"></span>

                    {/* Price */}
                    <div className="flex items-center gap-4 mt-2 w-full">
                      <span className=" text-red-500 p-2 rounded-full bg-slate-200 w-full">
                        <strong></strong>
                      </span>
                      <span className=" text-slate-500 line-through p-2 rounded-full bg-slate-200 w-full"></span>
                    </div>

                    <button className=" bg-slate-200 p-5 rounded-full w-full mt-4 text-white"></button>
                  </div>
                </div>
              }
            />
          ) : (
            products.map((product, index) => {
              // console.log(product);

              return (
                <Link
                  to={`product/${product?._id}`}
                  key={index}
                  className=" bg-white w-full min-w-[19rem] md:min-w-[22rem] h-[28rem] rounded overflow-hidden shadow-xl"
                >
                  {/* Img */}
                  <div className="bg-slate-200 w-full h-full max-h-[15.5rem] pt-3">
                    <img
                      className="w-full max-w-[14rem] mix-blend-multiply object-scale-down h-full max-h-[14rem] mx-auto"
                      src={product?.productImgs[0]}
                      alt=""
                    />
                  </div>

                  {/* Details */}
                  <div className="p-4">
                    <h4 className="text-lg font-bold mt-3 line-clamp-1">
                      {product?.productName}
                    </h4>
                    <span className=" text-slate-400 mt-1 block capitalize">
                      {category}
                    </span>

                    {/* Price */}
                    <div className=" flex items-center gap-4 mt-2">
                      <span className=" text-red-500">
                        <strong>{currencyFormat(product?.sellingPrice)}</strong>
                      </span>
                      <span className=" text-slate-500 line-through">
                        {currencyFormat(product?.price)}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => handleAddToCart(e, product?._id)}
                      className=" bg-red-500 px-5 py-1.5 rounded-full w-full mt-4 text-white hover:bg-red-600"
                    >
                      Add to card
                    </button>
                  </div>
                </Link>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

TheVerticalProductCardView.propTypes = {
  category: PropTypes.string,
  heading: PropTypes.string,
};

export default TheVerticalProductCardView;
