import React, { useEffect, useState } from "react";
import productCategory from "../helpers/productCategory";
import apiEndPointObj from "../common/api_uri";
import TheProductCardView from "../components/TheProductCardView";
import { useLocation, useSearchParams } from "react-router-dom";

const TheFilterProductsPage = () => {
  const location = useLocation();
  let query = new URLSearchParams(location.search).get("q");

  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");
  // console.log(searchParams.get("q"));

  // console.log(location);

  const [selectedCategory, setSelectedCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // console.log(selectedCategory);
  // console.log(location);

  const handleOnChange = (value) => {
    setSelectedCategory((prevValue) =>
      prevValue.includes(value)
        ? prevValue.filter((categoryItem) => categoryItem !== value)
        : [...prevValue, value]
    );
  };

  const filterByCategory = async () => {
    try {
      setLoading(true);
      const response = await fetch(apiEndPointObj.filterByCategory.url, {
        method: apiEndPointObj.filterByCategory.method,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: selectedCategory }),
      });

      setLoading(false);
      const respData = await response.json();
      if (!respData.error) {
        setProducts(respData.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setSearchParams({ q: selectedCategory });
  }, [selectedCategory]);

  // Sync query parameter with selectedCategory state
  useEffect(() => {
    if (query) {
      setSelectedCategory((prevCategories) =>
        prevCategories.includes(query)
          ? prevCategories
          : [...prevCategories, query]
      );
    }
  }, [query]);

  useEffect(() => {
    filterByCategory();
  }, [selectedCategory]);

  return (
    <div className="font-Sen mt-20 container mx-auto px-5 w-full flex items-start gap-4">
      {/* Filter menu */}
      <aside className="bg-white w-full max-w-[12rem] p-2 shadow-md min-h-[calc(100vh-10rem)]">
        {/* Sort by */}
        <div>
          <h2 className="text-lg font-bold mb-2 uppercase text-slate-400 border-b">
            Sort by
          </h2>
          <form action="" method="post">
            <div className="flex items-center gap-2 mb-2">
              <input
                type="radio"
                name="sortBy"
                id="lowToHigh"
                defaultChecked={true}
              />
              <label htmlFor="lowToHigh" className="text-sm text-slate-800">
                Price - Low to High
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" name="sortBy" id="highToLow" />
              <label htmlFor="highToLow" className="text-sm text-slate-800">
                Price - High to Low
              </label>
            </div>
          </form>
        </div>

        {/* Category */}
        <div className="mt-3">
          <h2 className="text-lg font-bold mb-2 uppercase text-slate-400 border-b">
            Category
          </h2>
          {productCategory.map((category) => {
            return (
              <div key={category?.id} className="flex items-center gap-2 mb-3">
                <input
                  type="checkbox"
                  name="category"
                  id={category?.value}
                  value={category?.value}
                  checked={selectedCategory.includes(category?.value)}
                  onChange={() => handleOnChange(category?.value)}
                />
                <label
                  htmlFor={category?.value}
                  className="text-sm text-slate-800"
                >
                  {category?.label}
                </label>
              </div>
            );
          })}
        </div>
      </aside>

      {/* Products */}
      <main>
        <TheProductCardView data={products} loading={loading} />
      </main>
    </div>
  );
};

export default TheFilterProductsPage;
