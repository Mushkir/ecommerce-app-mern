import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import TheListSkeleton from "./TheListSkeleton";
import currencyFormat from "../utils/currencyFormat";
import handleAddToCart from "../helpers/handleAddToCart";
import Context from "../context/context";

const TheSearchProductCardView = ({ loading, data }) => {
  // console.log(data);

  const { countCartItems } = useContext(Context);

  const handleAddToCartItems = async (e, id) => {
    await handleAddToCart(e, id);
    countCartItems();
  };

  return (
    <div className="container mx-auto p-2 md:p-5 font-Sen">
      <div className="relative">
        {/* Card elements */}
        <div className="mt-3 grid grid-cols-[repeat(auto-fit,minmax(300px,320px))] justify-center md:justify-between gap-5 md:gap-4">
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
            data.map((product) => {
              console.log(product);
              return (
                <Link
                  to={`/product/${product?._id}`}
                  key={product?._id}
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
                      {product?.category}
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
                      onClick={(e) => handleAddToCartItems(e, product?._id)}
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

TheSearchProductCardView.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.array,
};

export default TheSearchProductCardView;
