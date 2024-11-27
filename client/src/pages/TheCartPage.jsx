import React, { useContext } from "react";
import Context from "../context/context";
import { useSelector } from "react-redux";
import currencyFormat from "../utils/currencyFormat";

const TheCartPage = () => {
  const { countCartItems } = useContext(Context);
  const currentUser = useSelector((state) => state?.user?.currentUser);
  // console.log(currentUser);

  return (
    <div className="mt-20 font-Sen container mx-auto flex flex-col md:flex-row md:justify-between gap-5 items-start px-5">
      {/* Products */}
      <div className="w-full max-w-3xl flex flex-col gap-2">
        {[1, 2, 3, 4, 5].map((el) => {
          return (
            <div
              key={el}
              className=" bg-white shadow-md rounded overflow-hidden w-full h-32 flex"
            >
              {/* Product Img */}
              <div className=" w-full max-w-36 h-full">
                <img
                  className=" w-full h-full object-cover"
                  src="https://www.ama-assn.org/sites/ama-assn.org/files/styles/related_article_stub_image_1200x800_3_2/public/2024-04/2024-03-19-CARESIGNAL_1170x780px.png?itok=2VfMKhBy"
                  alt=""
                />
              </div>

              {/* Product details */}
              <div className="px-5 pt-2 flex flex-col">
                <h3 className=" text-2xl font-semibold">Airpods</h3>

                <span className=" text-slate-400 text-sm">Airpods</span>
                <span className=" text-red-600">{currencyFormat(800)}</span>

                {/* Buttons */}
                <div className=" flex items-center gap-3 mt-1.5">
                  <button className=" border border-red-600 px-2 rounded text-red-600 hover:bg-red-600 hover:text-white transition-all">
                    -
                  </button>
                  <span>1</span>
                  <button className=" border border-red-600 px-2 rounded text-red-600 hover:bg-red-600 hover:text-white transition-all">
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Total */}
      <div className=" bg-yellow-500 p-5 w-full md:max-w-sm"></div>
    </div>
  );
};

export default TheCartPage;
