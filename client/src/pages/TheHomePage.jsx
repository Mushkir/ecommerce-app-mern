import React from "react";
import TheProductCategoryList from "../components/TheProductCategoryList";
import TheProductBanner from "../components/TheProductBanner";

const TheHomePage = () => {
  return (
    <div>
      <TheProductCategoryList />

      {/* Product img slider */}
      <TheProductBanner />
    </div>
  );
};

export default TheHomePage;
