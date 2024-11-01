import React, { useEffect, useState } from "react";
import image1 from "../assets/banner/img1.webp";
import image2 from "../assets/banner/img2.webp";
import image3 from "../assets/banner/img3.jpg";
import image4 from "../assets/banner/img4.jpg";
import image5 from "../assets/banner/img5.webp";
import img1Mob from "../assets/banner/img1_mobile.jpg";
import img2Mob from "../assets/banner/img2_mobile.webp";
import img3Mob from "../assets/banner/img3_mobile.jpg";
import img4Mob from "../assets/banner/img4_mobile.jpg";
import img5Mob from "../assets/banner/img5_mobile.png";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

const TheProductBanner = () => {
  const [currentImg, setCurrentImg] = useState(0);

  const images = [image1, image2, image3, image4, image5];
  const imgsMobileVersion = [img1Mob, img2Mob, img3Mob, img4Mob, img5Mob];

  const sliderRight = () => {
    if (images.length - 1 > currentImg) {
      setCurrentImg((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (imgsMobileVersion.length - 1 > currentImg) {
        setCurrentImg((prev) => prev + 1);
      } else {
        setCurrentImg(0);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImg]);

  // console.log(currentImg);

  return (
    <div className="">
      <div className="container mx-auto h-80 p-2 md:px-5 py-2 relative">
        {/* Next, previous button */}
        <div className=" absolute top-0 z-30 bottom-0 right-2 left-2 md:flex justify-between items-center hidden ">
          <div
            className=" text-xl text-white bg-red-500 p-1 rounded-full cursor-pointer"
            onClick={() => setCurrentImg((prev) => prev - 1)}
          >
            <FaArrowAltCircleLeft />
          </div>
          <div
            className=" text-xl text-white bg-red-500 p-1 rounded-full cursor-pointer"
            onClick={sliderRight}
          >
            <FaArrowAltCircleRight />
          </div>
        </div>

        <div className="md:flex h-full w-full overflow-hidden rounded hidden">
          {images.map((img, index) => {
            return (
              <div
                className="w-full min-w-full h-full min-h-full transition-all"
                key={img + index}
                style={{ transform: `translateX(-${currentImg * 100}%)` }}
              >
                <img src={img} className="w-full h-full object-cover" alt="" />
              </div>
            );
          })}
        </div>

        {/* Mobile version */}
        <div className="flex h-full w-full overflow-hidden rounded md:hidden">
          {imgsMobileVersion.map((img, index) => {
            return (
              <div
                className="w-full min-w-full h-full min-h-full transition-all"
                key={img + index}
                style={{ transform: `translateX(-${currentImg * 100}%)` }}
              >
                <img src={img} className="w-full h-full object-cover" alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TheProductBanner;
