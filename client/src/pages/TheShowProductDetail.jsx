import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import currencyFormat from "../utils/currencyFormat";
import apiEndPointObj from "../common/api_uri";
import TheListSkeleton from "../components/TheListSkeleton";
import TheImageMagnifier from "../components/TheImageMagnifier";
import TheProductsCardView from "../components/TheProductsCardView";
import handleAddToCart from "../helpers/handleAddToCart";
import Context from "../context/context";

const TheShowProductDetail = () => {
  const { id } = useParams();
  const { countCartItems } = useContext(Context);

  const [productDetail, setProductDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const [activeImg, setActiveImg] = useState("");

  const getProductDetail = async () => {
    try {
      setLoading(true);
      const response = await fetch(apiEndPointObj.getProductDetailById.url, {
        method: apiEndPointObj.getProductDetailById.method,
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      const respData = await response.json();
      if (!respData.error) {
        const product = respData.data[0];
        setProductDetail(product);
        setActiveImg(product?.productImgs[0]);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product detail: ", error);
      setLoading(false);
    }
  };

  const handleAddToCartItems = async (e, id) => {
    await handleAddToCart(e, id);
    countCartItems();
  };

  useEffect(() => {
    getProductDetail();
  }, [id]);

  return (
    <div className="container mx-auto p-4 font-Sen mt-16">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="p-2 flex flex-col-reverse md:flex-row gap-3 w-full max-w-md">
          <div className="flex flex-row md:flex-col gap-3">
            {loading ? (
              <TheListSkeleton
                listsToRender={4}
                content={
                  <div className="w-[5rem] h-[5rem] bg-slate-200 rounded animate-pulse"></div>
                }
              />
            ) : (
              productDetail?.productImgs?.map((imgUrl, index) => (
                <div key={index} className="rounded">
                  <img
                    src={imgUrl}
                    alt="product"
                    onMouseEnter={() => setActiveImg(imgUrl)}
                    className="w-[5rem] h-[5rem] object-cover rounded cursor-pointer"
                  />
                </div>
              ))
            )}
          </div>
          <div className="md:w-[360px] md:h-[360px] bg-slate-200 rounded">
            {loading ? (
              <TheListSkeleton
                content={
                  <div className="w-full h-full bg-slate-200 animate-pulse"></div>
                }
              />
            ) : (
              <TheImageMagnifier
                src={activeImg}
                width={400}
                height={400}
                magnifierHeight={400}
                magnifierWidth={400}
                zoomLevel={1.5}
              />
            )}
          </div>
        </div>
        <div className="w-full py-2">
          {loading ? (
            <TheListSkeleton
              content={
                <div className="bg-slate-200 w-full h-20 animate-pulse"></div>
              }
            />
          ) : (
            <div>
              <span className="bg-red-200 text-red-700 px-2 py-1 rounded-full">
                {productDetail?.brandName}
              </span>
              <h3 className="text-2xl md:text-4xl font-semibold">
                {productDetail?.productName}
              </h3>
              <small className="text-slate-400 capitalize">
                {productDetail?.category}
              </small>
              <div className="flex items-center gap-2">
                <h2 className="text-lg md:text-2xl font-semibold text-red-600">
                  {currencyFormat(productDetail?.sellingPrice)}
                </h2>
                <h2 className="text-lg md:text-2xl font-semibold line-through text-slate-400">
                  {currencyFormat(productDetail?.price)}
                </h2>
              </div>

              <div className=" flex items-center gap-4 mt-1.5 mb-3">
                <button className=" min-w-24 text-red-600 px-5 py-1 border border-red-600 rounded hover:bg-red-600 hover:text-white transition-all">
                  Buy
                </button>
                <button
                  onClick={(e) => handleAddToCartItems(e, id)}
                  className=" min-w-24 px-5 py-1 border border-red-600 rounded bg-red-600 text-white hover:bg-white hover:text-red-600 transition-all"
                >
                  Add to cart
                </button>
              </div>
              <p className="text-slate-600">{productDetail?.description}</p>
            </div>
          )}
        </div>
      </div>
      {productDetail?.category && (
        <TheProductsCardView
          category={productDetail?.category}
          heading="Similar Products"
        />
      )}
    </div>
  );
};

export default TheShowProductDetail;
