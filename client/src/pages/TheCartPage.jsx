import React, { useContext, useEffect, useState } from "react";
import Context from "../context/context";
// import { useSelector } from "react-redux";
import currencyFormat from "../utils/currencyFormat";
import apiEndPointObj from "../common/api_uri";
import { Link } from "react-router-dom";
import TheListSkeleton from "../components/TheListSkeleton";
import { MdDelete } from "react-icons/md";

const TheCartPage = () => {
  const { countCartItems, countCartItem } = useContext(Context);
  // const context = useContext(Context);
  // console.log(context);

  // const currentUser = useSelector((state) => state?.user?.currentUser);
  // console.log(currentUser);

  const [cartProductDetails, setCartProductDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  // console.log(countCartItems);

  const getUserCartItemDetail = async () => {
    try {
      setLoading(true);
      const response = await fetch(apiEndPointObj.getCartItemsDetail.url, {
        method: apiEndPointObj.getCartItemsDetail.method,
        credentials: "include",
      });

      setLoading(false);
      const respData = await response.json();
      if (!respData.error) {
        setCartProductDetails(respData.data);
      }
      // console.log(respData.message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserCartItemDetail();
  }, []);

  console.log(cartProductDetails);

  return (
    <div className="mt-20 font-Sen container mx-auto px-5">
      {/* Empty message */}
      <div className=" flex justify-center">
        {countCartItem === 0 && (
          <div className="mt-20">
            <img
              src="https://bakestudio.in/assets/images/cart/empty-cart.gif"
              className=" mix-blend-multiply w-72 object-scale-down"
              alt="Empty cart img"
            />
            <h3 className="text-center text-2xl text-red-600 font-semibold">
              No items in cart...
            </h3>
            <Link
              className=" text-center block text-sm mt-2 underline text-slate-500 hover:text-red-700 transition-all"
              to={"/"}
            >
              {" "}
              Click to shop{" "}
            </Link>
          </div>
        )}
      </div>

      <div className="flex flex-col md:flex-row md:justify-between gap-5 items-start">
        {/* Products */}
        <div className="w-full max-w-3xl flex flex-col gap-2">
          {countCartItem > 0 && loading ? (
            <TheListSkeleton
              listsToRender={5}
              content={
                <div className=" bg-white shadow-md rounded overflow-hidden w-full h-32 flex animate-pulse">
                  {/* Product Img */}
                  <div className=" w-full max-w-36 h-full bg-slate-200"></div>

                  {/* Product details */}
                  <div className="px-5 pt-2 flex flex-col w-full">
                    <h3 className=" text-2xl font-semibold bg-slate-200 p-4 w-full rounded"></h3>

                    <span className=" text-slate-400 text-sm bg-slate-200 p-2 mt-1.5 rounded"></span>
                    <span className=" text-red-600 bg-slate-200 p-2 mt-1.5 rounded"></span>

                    {/* Buttons */}
                    <div className=" flex items-center gap-3 mt-1.5">
                      <button className="p-3 bg-slate-200 rounded"></button>
                      <span className=" bg-slate-200 p-2 rounded"></span>
                      <button className="p-3 bg-slate-200 rounded"></button>
                    </div>
                  </div>
                </div>
              }
            />
          ) : (
            cartProductDetails.map((product) => {
              return (
                <div
                  key={product?._id}
                  className=" bg-white shadow-md rounded overflow-hidden w-full min-h-32 flex"
                >
                  {/* Product Img */}
                  <div className=" w-full max-w-36 h-full bg-slate-200 p-1.5">
                    <img
                      className=" w-full h-full object-cover mix-blend-multiply"
                      src={product?.productId?.productImgs[0]}
                      alt=""
                    />
                  </div>
                  {/* Product details */}
                  <div className="px-5 pt-2 flex flex-col">
                    <h3 className=" text-2xl font-semibold">
                      {product?.productId?.productName}
                    </h3>

                    <span className=" text-slate-400 capitalize text-sm">
                      {product?.productId?.category}
                    </span>
                    <span className=" text-red-600">
                      {currencyFormat(product?.productId?.sellingPrice)}
                    </span>

                    {/* Buttons */}
                    <div className=" flex items-center gap-3 mt-1.5">
                      <button className=" border border-red-600 px-2 rounded text-red-600 hover:bg-red-600 hover:text-white transition-all">
                        -
                      </button>
                      <span>{product?.qty}</span>
                      <button className=" border border-red-600 px-2 rounded text-red-600 hover:bg-red-600 hover:text-white transition-all">
                        +
                      </button>
                    </div>
                  </div>

                  {/* Total Price  */}
                  <div className=" ml-auto flex flex-col items-end justify-evenly pr-3">
                    {/* Delete Icon */}
                    <div className="text-red-600 bg-red-50 p-1 hover:bg-red-600 hover:text-white transition-all cursor-pointer rounded-full">
                      <MdDelete />
                    </div>

                    <span className=" text-base font-semibold">
                      {currencyFormat(1000)}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Total */}
        <div className=" bg-yellow-500 p-5 w-full md:max-w-sm"></div>
      </div>
    </div>
  );
};

export default TheCartPage;
