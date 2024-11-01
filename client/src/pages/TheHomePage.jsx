import React from "react";
import TheProductCategoryList from "../components/TheProductCategoryList";
import TheProductBanner from "../components/TheProductBanner";
import TheVerticalCardProductCardView from "../components/TheHorizontalProductCardView";
import TheHorizontalProductCardView from "../components/TheHorizontalProductCardView";

const TheHomePage = () => {
  return (
    <div>
      <TheProductCategoryList />

      {/* Product img slider */}
      <TheProductBanner />

      <TheHorizontalProductCardView />
    </div>
  );
};

export default TheHomePage;
