import React, { useEffect, useState } from "react";
import TheAddProduct from "../components/TheAddProduct";
import apiEndPointObj from "../common/api_uri";

const TheAllProductsPage = () => {
  const [openProductUploadForm, setOpenProductUploadForm] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const showProductUploadForm = () => {
    setOpenProductUploadForm(true);
  };

  const onCloseUploadForm = () => {
    setOpenProductUploadForm(false);
  };

  // Get all products from DB
  const fetchAllProducts = async () => {
    try {
      const response = await fetch(apiEndPointObj.getAllProducts.url, {
        method: apiEndPointObj.getAllProducts.method,
        credentials: "include",
      });

      const data = await response.json();
      // console.log(data);
      if (data.error === false) {
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
        <div className="mt-5 flex justify-center items-center flex-wrap gap-5">
          {allProducts.map((product) => {
            console.log(product);

            return (
              <div
                className="card bg-base-100 w-72 max-w-72 shadow-xl rounded-lg"
                key={product._id}
              >
                <figure>
                  <img
                    className="w-full h-48 object-cover"
                    src={product.productImgs[0]}
                    alt={`${product.productName}'s image`}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {/* {product.productName}! */}
                    {showMore
                      ? product.productName
                      : `${product.productName.substring(0, 50)}`}
                  </h2>
                  <p>{product.description}</p>
                  <div className="card-actions justify-end">
                    <button
                      className="btn btn-primary"
                      onClick={() => setShowMore(!showMore)}
                    >
                      View item
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {openProductUploadForm === true && (
        <TheAddProduct onClose={onCloseUploadForm} />
      )}
    </div>
  );
};

export default TheAllProductsPage;
