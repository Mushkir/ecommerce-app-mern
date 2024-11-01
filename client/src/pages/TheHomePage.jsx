import React from "react";
import TheProductCategoryList from "../components/TheProductCategoryList";
import TheProductBanner from "../components/TheProductBanner";
import TheHorizontalProductCardView from "../components/TheHorizontalProductCardView";

const TheHomePage = () => {
  return (
    <div>
      <TheProductCategoryList />

      {/* Product img slider */}
      <TheProductBanner />

      <TheHorizontalProductCardView
        category={"airpods"}
        heading={"Top Airpods"}
      />
    </div>
  );
};

export default TheHomePage;
