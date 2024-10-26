import React, { useEffect, useState } from "react";
import TheAddProduct from "../components/TheAddProduct";
import apiEndPointObj from "../common/api_uri";
import TheProductCard from "../components/TheProductCard";
import TheListSkeleton from "../components/TheListSkeleton";

const TheAllProductsPage = () => {
  const [openProductUploadForm, setOpenProductUploadForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [allProducts, setAllProducts] = useState([]);

  const showProductUploadForm = () => {
    setOpenProductUploadForm(true);
  };

  const onCloseUploadForm = () => {
    setOpenProductUploadForm(false);
  };

  // Get all products from DB
  const fetchAllProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(apiEndPointObj.getAllProducts.url, {
        method: apiEndPointObj.getAllProducts.method,
        credentials: "include",
      });

      const data = await response.json();
      // console.log(data);
      if (data.error === false) {
        setLoading(false);
        setAllProducts(data.allProducts);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  // console.log(allProducts);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div>
      <div>
        {/* Header */}
        <div className="bg-red-500 rounded-md p-3 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">All Products</h3>
          <button
            type="button"
            onClick={showProductUploadForm}
            className="text-white border-2 px-5 py-1.5 rounded-md border-white hover:bg-white hover:text-red-500 transition-all"
          >
            Upload a product
          </button>
        </div>

        {/* All Products body */}
        <div className="mt-5 flex justify-center items-center flex-wrap gap-5 overflow-y-scroll h-[calc(100vh-130px)] pb-5">
          {loading ? (
            <TheListSkeleton
              listsToRender={9}
              content={
                <div className="card bg-base-100 w-72 max-w-72 shadow-xl rounded-lg p-5">
                  <figure className="w-full h-48 bg-slate-200 rounded animate-pulse">
                    <img
                    // className="w-full h-48 object-cover"
                    // src={product.productImgs[0]}
                    // alt={`${product.productName}'s image`}
                    />
                  </figure>
                  <div className="grid gap-4">
                    <h2 className="card-title bg-slate-200 p-2 mt-2 rounded animate-pulse">
                      {/* {product.productName.substring(0, 18)}... */}
                    </h2>

                    <p className=" bg-slate-200 p-2 rounded animate-pulse">
                      {/* {product.description.length < 100
                    ? product.description
                    : product.description.substring(0, 100) + "..."} */}
                    </p>
                    <div className="flex justify-end ">
                      <button className="bg-slate-200 p-3 rounded-full animate-pulse">
                        {/* <MdEdit />/ */}
                      </button>
                    </div>
                  </div>
                </div>
              }
            />
          ) : allProducts.length > 0 ? (
            allProducts.map((product, index) => {
              // console.log(product);
              return (
                <TheProductCard
                  product={product}
                  key={index}
                  fetchAllProducts={fetchAllProducts}
                />
              );
            })
          ) : (
            <div className="text-center text-red-500 text-lg font-bold mt-10">
              No products available!
            </div>
          )}
        </div>
      </div>

      {openProductUploadForm === true && (
        <TheAddProduct onClose={onCloseUploadForm} />
      )}
    </div>
  );
};

export default TheAllProductsPage;
