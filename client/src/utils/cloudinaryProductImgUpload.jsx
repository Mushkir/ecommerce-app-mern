import React from "react";

const uploadProductImage = async (imageFile) => {
  const formData = new FormData();

  formData.append("file", imageFile);
  formData.append("upload_preset", "products_data");

  const imgUploadResponse = await fetch(
    `https://api.cloudinary.com/v1_1/${
      import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
    }/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  return await imgUploadResponse.json();
};

export default uploadProductImage;
