import React from "react";
import TheProductCategoryList from "../components/TheProductCategoryList";
import TheProductBanner from "../components/TheProductBanner";
import TheHorizontalProductCardView from "../components/TheHorizontalProductCardView";
import TheVerticalProductCardView from "../components/TheVerticalProductCardView";

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

      <TheVerticalProductCardView />
    </div>
  );
};

export default TheHomePage;
