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

  const [cartProductDetails, setCartProductDetails] = useState([]);
  const [loading, setLoading] = useState(false);

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

  const increaseQty = async (id, qty) => {
    try {
      const response = await fetch(apiEndPointObj.updateCartProductQty.url, {
        method: apiEndPointObj.updateCartProductQty.method,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cartId: id,
          quantity: qty + 1,
        }),
      });

      const respData = await response.json();
      if (!respData.error) {
        getUserCartItemDetail();
      }
      // console.log(respData);
    } catch (error) {
      console.log(error);
    }
  };

  const decreaseQty = async (id, qty) => {
    try {
      if (qty > 1) {
        const response = await fetch(apiEndPointObj.updateCartProductQty.url, {
          method: apiEndPointObj.updateCartProductQty.method,
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cartId: id,
            quantity: qty - 1,
          }),
        });

        const respData = await response.json();
        if (!respData.error) {
          getUserCartItemDetail();
        }
        console.log(respData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      const response = await fetch(
        apiEndPointObj.deleteCartItem.url + `/${id}`,
        {
          method: apiEndPointObj.deleteCartItem.method,
          credentials: "include",
        }
      );

      const respData = await response.json();
      console.log(respData);
    } catch (error) {
      console.log(error);
    }
  };

  const totalCartItemsQty = cartProductDetails.reduce(
    (accumulator, productDetail) => {
      return accumulator + productDetail?.qty;
    },
    0
  );

  const totalPrice = cartProductDetails.reduce((accumulator, productDetail) => {
    return (accumulator +=
      productDetail?.productId?.sellingPrice * productDetail?.qty);
  }, 0);

  useEffect(() => {
    getUserCartItemDetail();
  }, []);

  // cartProductDetails.forEach((el) => {
  //   console.log(el.qty);
  // });

  // console.log(totalPrice);

  return (
    <div className="mt-20 font-Sen container mx-auto px-2 sm:px-5">
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

      <div className="flex flex-col lg:flex-row lg:justify-between gap-5 items-start">
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
                  className=" bg-white shadow-md rounded overflow-hidden w-full h-64 sm:h-32 sm:flex"
                >
                  {/* Product Img */}
                  <div className="w-full sm:max-w-36 h-32 sm:h-full bg-slate-200 p-1.5">
                    <img
                      className="w-full h-full object-scale-down sm:object-cover mix-blend-multiply"
                      src={product?.productId?.productImgs[0]}
                      alt=""
                    />
                  </div>
                  {/* Product details */}
                  <div className="px-5 pt-2 relative w-full">
                    {/* Delete icon */}
                    <div
                      onClick={() => handleDeleteProduct(product?._id)}
                      className="absolute right-0 mr-3 mt-1.5 text-red-600 bg-red-50 p-1 hover:bg-red-600 hover:text-white transition-all cursor-pointer rounded-full"
                    >
                      <MdDelete />
                    </div>

                    <h3 className="lg:text-2xl font-semibold line-clamp-1">
                      {product?.productId?.productName}
                    </h3>

                    <span className=" text-slate-400 capitalize text-sm">
                      {product?.productId?.category}
                    </span>

                    <div className=" flex items-center justify-between gap-3 lg:gap-0">
                      <span className=" text-red-600 text-sm lg:text-base">
                        {currencyFormat(product?.productId?.sellingPrice)}
                      </span>

                      <span className=" text-slate-700 text-sm lg:text-base">
                        {currencyFormat(
                          product?.productId?.sellingPrice * product?.qty
                        )}
                      </span>
                    </div>

                    {/* Buttons */}
                    <div className=" flex items-center gap-3 mt-1.5">
                      <button
                        onClick={() => decreaseQty(product?._id, product?.qty)}
                        className=" border flex items-center justify-center border-red-600 w-6 h-6 rounded text-red-600 hover:bg-red-600 hover:text-white transition-all"
                      >
                        -
                      </button>
                      <span>{product?.qty}</span>
                      <button
                        onClick={() => increaseQty(product?._id, product?.qty)}
                        className=" border flex items-center justify-center border-red-600 w-6 h-6 rounded text-red-600 hover:bg-red-600 hover:text-white transition-all"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Total */}
        <div className="w-full md:max-w-sm">
          {countCartItem > 0 && loading ? (
            <div className=" bg-white w-full rounded overflow-hidden animate-pulse">
              <h3 className="w-full h-10 bg-slate-200 text-white"></h3>

              <div className=" px-5 py-2">
                <div className=" flex items-center justify-between mb-2 h-7 bg-slate-200 rounded">
                  <span></span>
                  <span></span>
                </div>

                <div className=" flex items-center justify-between mb-2 bg-slate-200 h-7 rounded">
                  <span></span>
                  <span></span>
                </div>
              </div>

              <button className=" bg-slate-200 w-full h-10"></button>
            </div>
          ) : (
            <div className=" bg-white w-full rounded overflow-hidden">
              <h3 className="px-5 p-2 bg-red-600 text-white font-semibold">
                Summary
              </h3>

              <div className=" px-5 py-2">
                <div className=" flex items-center justify-between mb-2">
                  <span className=" font-semibold">Quantity</span>
                  <span>
                    {totalCartItemsQty < 10
                      ? `0${totalCartItemsQty}`
                      : totalCartItemsQty}
                  </span>
                </div>

                <div className=" flex items-center justify-between mb-2">
                  <span className=" font-semibold">Total Price</span>
                  <span>{currencyFormat(totalPrice)}</span>
                </div>
              </div>

              <button className=" bg-blue-500 w-full px-5 py-2 hover:bg-blue-600 text-white transition-all">
                Payment
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TheCartPage;
