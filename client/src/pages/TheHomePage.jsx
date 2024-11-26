import React from "react";
import TheProductCategoryList from "../components/TheProductCategoryList";
import TheProductBanner from "../components/TheProductBanner";
import TheHorizontalProductCardView from "../components/TheHorizontalProductCardView";
import TheVerticalProductCardView from "../components/TheVerticalProductCardView";

const TheHomePage = () => {
  return (
    <div className="mb-5 mt-16">
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

      <TheVerticalProductCardView
        category={"mobiles"}
        heading={"Top Mobiles"}
      />

      <TheVerticalProductCardView category={"mouse"} heading={"Top Mouse"} />

      <TheVerticalProductCardView
        category={"printers"}
        heading={"Top Printers"}
      />

      <TheVerticalProductCardView
        category={"processor"}
        heading={"Top Processors"}
      />

      <TheVerticalProductCardView
        category={"refrigerator"}
        heading={"Top Refridgerator"}
      />

      <TheVerticalProductCardView
        category={"speakers"}
        heading={"Top speakers"}
      />

      <TheVerticalProductCardView
        category={"televisions"}
        heading={"Top televisions"}
      />

      <TheVerticalProductCardView
        category={"trimmers"}
        heading={"top trimmers"}
      />

      <TheVerticalProductCardView
        category={"watches"}
        heading={"top watches"}
      />
    </div>
  );
};

export default TheHomePage;
