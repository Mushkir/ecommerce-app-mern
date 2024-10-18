import React, { useRef, useState } from "react";
import TheInput from "./TheInput";
import { IoCloseSharp } from "react-icons/io5";
import TheSelectInput from "./TheSelectInput";
import productCategory from "../helpers/productCategory";
import { IoMdCloudUpload } from "react-icons/io";
import TheTextArea from "./TheTextArea";

const TheAddProduct = () => {
  const [formData, setFormData] = useState({
    productName: "",
    brandName: "",
    category: "",
    price: "",
    sellingPrice: "",
    description: "",
  });

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    // console.log({ ...formData, [e.target.id]: e.target.value });
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSelectChange = (e) => {
    // console.log(e.target.value);
    setFormData({ ...formData, category: e.target.value });
  };

  const handleImageUpload = () => {
    fileInputRef.current?.click();
  };

  const uploadImage = (e) => {
    // console.log(e.target.files[0]);
  };

  console.log(formData);

  return (
    <div className="fixed w-full h-full left-0 right-0 top-0 bottom-0 flex justify-center items-center bg-slate-200 bg-opacity-60">
      <div className="bg-white w-full h-full max-w-[50%] max-h-[80%] rounded-md overflow-hidden">
        <div className="p-5 bg-red-500 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-white">Upload product</h3>

          {/* Close Icon */}
          <div className="text-xl text-white hover:bg-white hover:text-red-500 rounded-full cursor-pointer transition-all">
            <IoCloseSharp />
          </div>
        </div>

        <div className="overflow-y-auto h-[calc(100%-50px)]">
          <form method="post" className="p-5">
            {/* Product name */}
            <TheInput
              id="productName"
              label="Product name"
              placeholder="Enter the product name"
              onChange={handleChange}
              value={formData.productName}
            />

            {/* Brand name */}
            <TheInput
              id="brandName"
              label="Brand name"
              placeholder="Enter the brand name"
              onChange={handleChange}
              value={formData.brandName}
            />

            {/* Category */}
            <TheSelectInput
              id="category"
              label="Category"
              selectElementLabel="Select a category"
              options={productCategory}
              onChange={handleSelectChange}
              value={formData.category}
            />

            {/* Product img */}
            <div className="flex flex-col gap-2 mb-3">
              <label
                htmlFor="productImg"
                className="text-sm text-gray-500 font-bold"
              >
                Product image
              </label>
              <div
                className="bg-slate-100 rounded p-2 flex flex-col justify-center items-center h-32"
                onClick={handleImageUpload}
              >
                <span className="text-2xl">
                  <IoMdCloudUpload />
                </span>
                <input
                  id="productImg"
                  ref={fileInputRef}
                  type="file"
                  onChange={uploadImage}
                />
              </div>
              <small className="text-red-500 block text-center">
                {" "}
                <strong>*Please upload product images.</strong>{" "}
              </small>
            </div>

            {/* Price */}
            <TheInput
              id="price"
              label="Price"
              placeholder="Enter the product price"
              onChange={handleChange}
              value={formData.price}
            />

            {/* Selling price */}
            <TheInput
              id="sellingPrice"
              label="Selling Price"
              placeholder="Enter the selling price"
              onChange={handleChange}
              value={formData.sellingPrice}
            />

            {/* Description */}
            <TheTextArea
              id="description"
              label="Product Description"
              placeholder="Enter the product description"
              onChange={handleChange}
              value={formData.description}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default TheAddProduct;
