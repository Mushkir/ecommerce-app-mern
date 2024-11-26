import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import currencyFormat from "../utils/currencyFormat";
import apiEndPointObj from "../common/api_uri";
import TheListSkeleton from "../components/TheListSkeleton";

const TheShowProductDetail = () => {
  const { id } = useParams();

  const [productDetail, setProductDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const [activeImg, setActiveImg] = useState("");
  // console.log(id);

  const getProductDetail = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        apiEndPointObj.getProductDetailById.url + `/${id}`,
        {
          method: apiEndPointObj.getProductDetailById.method,
          credentials: "include",
        }
      );
      setLoading(false);
      const respData = await response.json();
      if (!respData.error) {
        setProductDetail(respData.data[0]);
        setActiveImg(respData.data[0].productImgs[0]);
        // console.log(respData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  console.log(productDetail);

  return (
    <div className=" container mx-auto p-4 flex flex-col md:flex-row gap-3 font-Sen">
      {/* Product Imgs */}
      <div className="p-2 flex flex-col-reverse md:flex-row gap-3 w-full max-w-md">
        <div className=" flex flex-row md:flex-col gap-3">
          {loading ? (
            <TheListSkeleton
              listsToRender={4}
              content={
                <div className="overflow-hidden animate-pulse w-[5rem] h-[5rem] object-cover rounded bg-slate-200"></div>
              }
            />
          ) : (
            productDetail?.productImgs?.map((imgUrl, index) => {
              return (
                <div className=" rounded overflow-hidden" key={index}>
                  <img
                    src={imgUrl}
                    alt="img"
                    onMouseEnter={() => setActiveImg(imgUrl)}
                    className="w-[5rem] h-[5rem] object-cover rounded mix-blend-multiply bg-slate-200 cursor-pointer"
                  />
                </div>
              );
            })
          )}
        </div>

        {/* Main Img */}
        <div className=" bg-slate-200 md:w-[360px] md:h-[360px]">
          {loading ? (
            <TheListSkeleton
              content={
                <div className="w-full h-full bg-slate-200 animate-pulse"></div>
              }
            />
          ) : (
            <img
              src={activeImg}
              alt="img"
              className="w-full h-full object-scale-down mix-blend-multiply"
            />
          )}
        </div>
      </div>

      {/* Product Detail */}
      <div className="w-full py-2">
        {loading ? (
          <TheListSkeleton
            content={
              <div className="px-3">
                {/* Brand Name */}
                <span className="rounded-full bg-slate-200 px-10 py-1 animate-pulse"></span>

                {/* Product name */}
                <h3 className=" my-2 text-4xl font-semibold px-20 py-5 rounded-full bg-slate-200 animate-pulse w-52"></h3>

                {/* Category */}
                <small className=" bg-slate-200 px-10 animate-pulse py-1 rounded-full"></small>

                {/* Price */}
                <div className=" flex items-center gap-2 mt-4">
                  {/* Selling Price */}
                  <h2 className=" text-2xl font-semibold bg-slate-200 px-20 py-5 rounded-full animate-pulse">
                    {/* {currencyFormat(999)} */}
                  </h2>

                  {/* Original price */}
                  <h2 className=" text-2xl font-semibold line-through bg-slate-200 px-20 py-5 rounded-full animate-pulse">
                    {/* {currencyFormat(999)} */}
                  </h2>
                </div>

                {/* Buttons */}
                <div className=" flex items-center gap-4 mt-3 mb-3">
                  <button className=" px-5 animate-pulse min-w-24 rounded py-5 bg-slate-200">
                    {/* Buy */}
                  </button>
                  <button className=" px-5 animate-pulse min-w-24 rounded py-5 bg-slate-200">
                    {/* Add To Cart */}
                  </button>
                </div>

                {/* Description */}
                <span className=" font-semibold bg-slate-200 px-20 animate-pulse rounded py-1"></span>
                <p className="bg-slate-200 px-10 py-14 rounded mt-3 animate-pulse"></p>
              </div>
            }
          />
        ) : (
          <div className="w-full">
            {/* Brand Name */}
            <span className=" bg-red-200 text-red-700 px-2 py-1 rounded-full">
              {productDetail?.brandName}
            </span>

            {/* Product name */}
            <h3 className=" mt-2 text-4xl font-semibold">
              {productDetail?.productName}
            </h3>

            {/* Category */}
            <small className=" text-slate-400 capitalize text-[1rem] mt-3 block">
              {productDetail?.category}
            </small>

            {/* Price */}
            <div className=" flex items-center gap-2">
              {/* Selling Price */}
              <h2 className=" text-2xl font-semibold text-red-600">
                {currencyFormat(productDetail?.sellingPrice)}
              </h2>

              {/* Original price */}
              <h2 className=" text-2xl font-semibold line-through text-slate-400">
                {currencyFormat(productDetail?.price)}
              </h2>
            </div>

            {/* Buttons */}
            <div className=" flex items-center gap-4 mt-3 mb-3">
              <button className=" px-5 min-w-24 border border-red-600 rounded py-1 text-red-600 hover:bg-red-600 hover:text-white transition-all">
                Buy
              </button>
              <button className=" px-5 min-w-24 bg-red-600 border border-red-600 rounded py-1 text-white hover:bg-white hover:text-red-600 transition-all">
                Add To Cart
              </button>
            </div>

            {/* Description */}
            <span className=" font-semibold">Description:</span>
            <p className="text-justify text-slate-600">
              {productDetail?.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TheShowProductDetail;
