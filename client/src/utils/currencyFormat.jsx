import React from "react";

const currencyFormat = (currencyValue) => {
  const currencyInLKR = new Intl.NumberFormat("en-SL", {
    style: "currency",
    currency: "LKR",
  }).format(currencyValue);

  return currencyInLKR;
};

export default currencyFormat;
