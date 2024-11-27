import React from "react";
import apiEndPointObj from "../common/api_uri";

const handleAddToCart = async (e, id) => {
  e.preventDefault();
  e.stopPropagation();

  try {
    const response = await fetch(apiEndPointObj.addToCart.url, {
      method: apiEndPointObj.addToCart.method,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId: id }),
    });

    const data = await response.json();
    if (data.message === "Unauthorized") {
      window.location.href = "/login";
    }
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

export default handleAddToCart;
