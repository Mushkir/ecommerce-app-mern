import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import apiEndPointObj from "../common/api_uri";
import TheSearchProductCardView from "../components/TheSearchProductCardView";

const TheSearchPage = () => {
  const location = useLocation();
  //   console.log(location.search);

  const query = new URLSearchParams(location.search).get("product");
  //   console.log(query);

  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const getSearchProductDetail = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        apiEndPointObj.searchProduct.url + `?product=${query}`,
        {
          method: apiEndPointObj.searchProduct.method,
        }
      );

      setLoading(false);
      const respData = await response.json();
      if (!respData.error) {
        setSearchResult(respData.data);
      }
      //   console.log(respData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSearchProductDetail();
  }, [query]);

  return (
    <div className="mt-20 container mx-auto px-5 font-Sen">
      <div>
        {searchResult.length > 0 && (
          <div className=" flex items-center gap-1">
            <h1 className="">Search Result:</h1>
            <span>{searchResult.length}</span>
          </div>
        )}
      </div>

      {/* Products */}
      <div>
        {searchResult.length === 0 ? (
          <div className=" flex justify-center">
            <div className="mt-20">
              <img
                // src="https://cdn.dribbble.com/users/449667/screenshots/2225584/search.gif"
                src="https://htmlburger.com/blog/wp-content/uploads/2022/08/Search-Bar-Design-Examples-Searching-by-Anton-Valihura.gif"
                className="mix-blend-multiply w-72 object-scale-down"
                alt="Empty cart img"
              />
              <h3 className="text-center text-2xl text-red-600 font-semibold">
                No Product Found.
              </h3>
              <Link
                className=" text-center block text-sm mt-2 underline text-slate-500 hover:text-red-700 transition-all"
                to={"/"}
              >
                {" "}
                Click to shop{" "}
              </Link>
            </div>
          </div>
        ) : (
          <TheSearchProductCardView loading={loading} data={searchResult} />
        )}
      </div>
    </div>
  );
};

export default TheSearchPage;
