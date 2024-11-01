import React, { useEffect, useState } from "react";
import apiEndPointObj from "../common/api_uri";
import TheListSkeleton from "./TheListSkeleton";

const TheProductCategoryList = () => {
  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(false);

  const getAllCategories = async () => {
    try {
      setLoading(true);
      const data = await fetch(apiEndPointObj.getAllCategories.url, {
        method: apiEndPointObj.getAllCategories.method,
      });

      const results = await data.json();
      //   console.log(results.data);
      if (results.error === false) {
        setLoading(false);
        setCategories(results.data);
      }
    } catch (error) {
      console.error("Error: " + error.message);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div className="container mx-auto font-Sen">
      <div className="flex justify-between items-center p-2 md:p-5 overflow-x-scroll no-scrollbar">
        {loading ? (
          <TheListSkeleton
            listsToRender={13}
            content={
              <div className="text-center flex flex-col justify-center items-center cursor-pointer animate-pulse transition-all">
                <div className="bg-slate-200 p-2 w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mx-auto">
                  <img className="" alt="" />
                </div>
              </div>
            }
          />
        ) : (
          categories.map((category, index) => {
            // console.log(category);

            return (
              <div
                className="text-center flex flex-col justify-center items-center cursor-pointer"
                key={index}
              >
                <div className="bg-slate-200 p-2 w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mx-auto">
                  <img
                    className="w-full h-full mx-auto object-cover mix-blend-multiply hover:scale-110 transition-all"
                    src={category.productImgs[0]}
                    alt=""
                  />
                </div>
                <span className=" capitalize">{category.category}</span>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default TheProductCategoryList;
