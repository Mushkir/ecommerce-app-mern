import React from "react";
import TheProductCategoryList from "../components/TheProductCategoryList";
import TheProductBanner from "../components/TheProductBanner";
import TheHorizontalProductCardView from "../components/TheHorizontalProductCardView";

const TheHomePage = () => {
  return (
    <div className="mb-5">
      <TheProductCategoryList />

      {/* Product img slider */}
      <TheProductBanner />

      <TheHorizontalProductCardView
        category={"airpods"}
        heading={"Top Airpods"}
      />

      <TheHorizontalProductCardView
        category={"camera"}
        heading={"Top Cameras"}
      />

      <TheHorizontalProductCardView
        category={"earphones"}
        heading={"Top Earphones"}
      />
    </div>
  );
};

export default TheHomePage;
