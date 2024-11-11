import React, { useRef } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const TheVerticalProductCardView = () => {
  const navRef = useRef();

  const handleNav = (direction) => {
    if (direction === "left") {
      navRef ? (navRef.current.scrollLeft -= 200) : null;
    } else {
      navRef ? (navRef.current.scrollLeft += 200) : null;
    }
  };

  return (
    <div className="container mx-auto p-2 md:p-5 font-Sen">
      <h3 className="text-2xl font-bold mt-3">Top Mobiles</h3>
      <div className="relative">
        <div className="hidden md:flex justify-between items-center">
          <button
            className="absolute top-[14rem] -left-3 bg-red-500 p-1 rounded-full text-white text-2xl"
            onClick={() => handleNav("left")}
          >
            <FaArrowCircleLeft />
          </button>

          <button
            className="bg-red-500 p-1 rounded-full text-white text-2xl absolute -right-3 top-[14rem]"
            onClick={() => handleNav("right")}
          >
            <FaArrowCircleRight />
          </button>
        </div>

        {/* Card elements */}
        <div
          className=" flex items-center gap-5 mt-3 overflow-scroll no-scrollbar"
          ref={navRef}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el, index) => {
            return (
              <div
                key={index}
                className=" bg-white w-full min-w-[19rem] md:min-w-[22rem] h-[28rem] rounded overflow-hidden shadow-xl"
              >
                {/* Img */}
                <div className=" w-full h-[15.5rem]">
                  <img
                    className=" w-full"
                    src="https://cdn.prod.website-files.com/62be7e9a601a60e47d2a2154/639902cc76db9918ef183ee0_img-holding-stethoscope-in-heart-shape-1024x683.jpeg"
                    alt=""
                  />
                </div>

                {/* Details */}
                <div className="p-4">
                  <h4 className="text-lg font-bold mt-3">Samsung Galaxy A52</h4>
                  <span className=" text-slate-400 mt-1 block">Mobiles</span>

                  {/* Price */}
                  <div className=" flex items-center gap-4 mt-2">
                    <span className=" text-red-500">
                      <strong>LKR 5000.00</strong>
                    </span>
                    <span className=" text-slate-500 line-through">
                      LKR 3000.00
                    </span>
                  </div>

                  <button className=" bg-red-500 px-5 py-1.5 rounded-full w-full mt-4 text-white">
                    Add to card
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TheVerticalProductCardView;
