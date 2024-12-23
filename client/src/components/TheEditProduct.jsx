import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { IoCloseSharp } from "react-icons/io5";
import TheInput from "./TheInput";
import TheSelectInput from "./TheSelectInput";
import productCategory from "../helpers/productCategory";
import { MdDelete } from "react-icons/md";
import { IoMdCloudUpload } from "react-icons/io";
import TheTextArea from "./TheTextArea";
import uploadProductImage from "../utils/cloudinaryProductImgUpload";
import apiEndPointObj from "../common/api_uri";

const TheEditProduct = ({ onClose, productData, updateProducts }) => {
  // console.log(productData);

  const { _id } = productData;
  // console.log(_id);

  const [formData, setFormData] = useState({
    productName: productData.productName,
    brandName: productData.brandName,
    category: productData.category,
    price: productData.price,
    sellingPrice: productData.sellingPrice,
    description: productData.description,
    productImgs: productData.productImgs,
  });

  const fileInputRef = useRef(null);

  const [successMsg, setSuccessMsg] = useState("");

  // console.log(formData.productImgs);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    // console.log(e.target.value);
  };

  const handleImgUploadClick = () => {
    fileInputRef.current?.click();
  };

  const updateImage = async (e) => {
    const file = e.target.files[0];
    // console.log(file);

    const productImg = await uploadProductImage(file);
    // console.log(productImg.secure_url);
    setFormData({
      ...formData,
      productImgs: [...formData.productImgs, productImg.secure_url],
    });

    // console.log(imageFile);
  };

  const handleRemoveProductImg = (imgIndex) => {
    // console.log(imgIndex);
    formData.productImgs.splice(imgIndex, 1);
    setFormData({ ...formData, productImgs: [...formData.productImgs] });
    // console.log(formData.productImgs);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);

    try {
      const data = await fetch(apiEndPointObj.updateProduct.url + `/${_id}`, {
        method: apiEndPointObj.updateProduct.method,
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const result = await data.json();
      if (result.error === false) {
        setSuccessMsg(result.message);
        setTimeout(() => {
          setSuccessMsg("");
        }, 3000);
        updateProducts();
        return;
      }

      // console.log(result.error);
    } catch (error) {
      console.error("Error: " + error.message);
    }
  };

  return (
    <div className="bg-slate-200 fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center bg-opacity-50">
      <div className="w-full max-w-[40rem] bg-slate-200 rounded-md overflow-hidden h-full max-h-[80%] border-2 border-red-500">
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

        {successMsg !== "" && (
          <small className=" block text-center text-green-700 font-semibold mt-3">
            {successMsg}
          </small>
        )}

        <div className=" overflow-y-scroll h-[calc(100%-50px)] no-scrollbar">
          <form method="post" className="p-5" onSubmit={handleSubmit}>
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

            {/* Product img */}
            <div className="flex flex-col gap-2 mb-3">
              <label
                className="text-sm text-gray-500 font-bold"
                htmlFor="productImg"
              >
                Product images
              </label>
              <div
                id="productImg"
                onClick={handleImgUploadClick}
                className="bg-slate-100 cursor-pointer p-2 rounded-sm outline-none w-full h-40 flex justify-center items-center"
              >
                <div className=" flex flex-col justify-center items-center">
                  <div className=" text-gray-500 text-3xl">
                    <IoMdCloudUpload />
                  </div>
                  <span className="font-semibold text-gray-500 text-sm">
                    Upload images
                  </span>
                </div>
                <input
                  ref={fileInputRef}
                  onChange={updateImage}
                  className="hidden"
                  id="productImg"
                  type="file"
                />
              </div>

              {/* Img files to preview */}
              <div className="flex justify-center items-center gap-4">
                {formData.productImgs.map((img, index) => {
                  // console.log(img);

                  return (
                    <div key={index} className="relative">
                      <img
                        src={img}
                        className="w-full max-w-20 h-20 object-cover rounded-md cursor-pointer"
                        alt={`${formData.productName}'s image`}
                      />
                      <div
                        onClick={() => handleRemoveProductImg(index)}
                        className="bg-red-400 hover:bg-red-500 absolute right-0 bottom-[2px] text-white p-[2px] rounded-full cursor-pointer"
                      >
                        <MdDelete />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

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
  updateProducts: PropTypes.func,
};

export default TheEditProduct;
