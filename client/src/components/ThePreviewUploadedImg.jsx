import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import PropTypes from "prop-types";

const ThePreviewUploadedImg = ({ onClose, imgUrl, productImgName }) => {
  //   console.log(onClose);

  return (
    <div className="fixed left-0 right-0 -top-20 bottom-0 w-full h-full bg-white flex flex-col justify-center items-center bg-opacity-50">
      <div className="rounded-md overflow-hidden w-full max-w-[600px] h-full max-h-[400px] border-2 border-red-500">
        {/* Close icon */}
        <div className="p-5 flex justify-between items-center bg-red-500">
          <h3 className=" text-white">{productImgName}&apos;s image</h3>
          <div
            className="text-lg cursor-pointer hover:bg-white rounded-full text-white hover:text-red-500 transition-all"
            onClick={onClose}
          >
            <IoCloseSharp />
          </div>
        </div>
        <div className="w-full h-full">
          <img
            className="overflow-hidden w-full h-full object-cover"
            src={imgUrl}
            alt={`${productImgName}'s image`}
          />
        </div>
      </div>
    </div>
  );
};

ThePreviewUploadedImg.propTypes = {
  onClose: PropTypes.func.isRequired,
  imgUrl: PropTypes.string.isRequired,
  productImgName: PropTypes.string.isRequired,
};

export default ThePreviewUploadedImg;
