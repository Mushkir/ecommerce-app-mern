import React, { useState } from "react";
import PropTypes from "prop-types";
import { MdEdit } from "react-icons/md";
import TheEditProduct from "../components/TheEditProduct";
import currencyFormat from "../utils/currencyFormat";

const TheProductCard = ({ product, fetchAllProducts }) => {
  const [openEditProduct, setOpenEditProduct] = useState(false);
  const [productData, setProductData] = useState({});

  // console.log(productData);

  const onClose = () => {
    setOpenEditProduct(false);
  };
  return (
    <div>
      <div
        className="card bg-base-100 w-72 max-w-72 shadow-xl rounded-lg p-5"
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
          <h2 className="card-title font-semibold mt-1.5 mb-2">
            {product.productName.substring(0, 18)}...
          </h2>

          <p>
            {product.description.length < 100
              ? product.description
              : product.description.substring(0, 100) + "..."}
          </p>
          <div className="flex justify-between items-center">
            <span className=" text-red-700 font-black">
              {currencyFormat(product.sellingPrice)}
            </span>
            <button
              className="bg-red-300 transition-all hover:bg-red-500 hover:text-white p-3 rounded-full"
              onClick={() => {
                setOpenEditProduct(true);
                setProductData(product);
              }}
            >
              <MdEdit />
            </button>
          </div>
        </div>
      </div>

      {/* Edit Product Component */}
      {openEditProduct && (
        <TheEditProduct
          onClose={onClose}
          productData={productData}
          updateProducts={fetchAllProducts}
        />
      )}
    </div>
  );
};

TheProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  fetchAllProducts: PropTypes.func,
};

export default TheProductCard;
