import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { IoCloseSharp } from "react-icons/io5";
import TheInput from "./TheInput";
import TheSelectInput from "./TheSelectInput";
import productCategory from "../helpers/productCategory";
// import { MdDelete } from "react-icons/md";
// import { IoMdCloudUpload } from "react-icons/io";
import TheTextArea from "./TheTextArea";

const TheEditProduct = ({ onClose, productData }) => {
  console.log(productData);

  const [formData, setFormData] = useState({
    productName: productData.productName,
    brandName: productData.brandName,
    category: productData.category,
    price: productData.price,
    sellingPrice: productData.sellingPrice,
    description: productData.description,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(e.target.value);
  };

  // const fileInputRef = useRef(null);

  return (
    <div className="bg-slate-200 fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center bg-opacity-50">
      <div className="w-full max-w-[40rem] bg-slate-200 rounded-md overflow-hidden h-full max-h-[80%]">
        <div className="p-5 bg-red-500 flex justify-between items-center overflow-hidden">
          <h3 className="text-xl font-semibold text-white">
            Edit {productData.productName} &apos;s detail
          </h3>

          {/* Close Icon */}
          <div
            onClick={onClose}
            className="text-xl text-white hover:bg-white hover:text-red-500 rounded-full cursor-pointer transition-all"
          >
            <IoCloseSharp />
          </div>
        </div>

        <div className=" overflow-y-scroll h-[calc(100%-50px)] no-scrollbar">
          <form method="post" className="p-5">
            {/* Product name */}
            <TheInput
              id="productName"
              label="Product name"
              onChange={handleChange}
              value={formData.productName}
            />

            {/* Brand name */}
            <TheInput
              id="brandName"
              label="Brand name"
              onChange={handleChange}
              value={formData.brandName}
            />

            {/* Category */}
            <TheSelectInput
              id={"category"}
              label={"Select category"}
              options={productCategory}
              onChange={handleChange}
              value={formData.category}
            />

            {/* Price */}
            <TheInput
              id="price"
              label="Price"
              type="number"
              onChange={handleChange}
              value={formData.price}
            />

            {/* Selling price */}
            <TheInput
              id="sellingPrice"
              type="number"
              label="Selling price"
              onChange={handleChange}
              value={formData.sellingPrice}
            />

            {/* Descritpion */}
            <TheTextArea
              id="description"
              label="Product Description"
              onChange={handleChange}
              value={formData.description}
            />

            <button className="bg-red-500 px-5 py-2 rounded w-full mb-5 mt-3 text-white hover:bg-red-600 transition-all">
              Save changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

TheEditProduct.propTypes = {
  onClose: PropTypes.func.isRequired,
  productData: PropTypes.object.isRequired,
};

export default TheEditProduct;
