import React from "react";
import PropTypes from "prop-types";

const TheListSkeleton = ({ listsToRender }) => {
  return (
    <>
      {Array(listsToRender)
        .fill(1)
        .map((card, index) => (
          // render your skeleton here
          <div
            className="card bg-base-100 w-72 max-w-72 shadow-xl rounded-lg p-5"
            key={index}
          >
            <figure className="w-full h-48 bg-slate-200 rounded animate-pulse">
              <img
              // className="w-full h-48 object-cover"
              // src={product.productImgs[0]}
              // alt={`${product.productName}'s image`}
              />
            </figure>
            <div className="grid gap-4">
              <h2 className="card-title bg-slate-200 p-2 mt-2 rounded animate-pulse">
                {/* {product.productName.substring(0, 18)}... */}
              </h2>

              <p className=" bg-slate-200 p-2 rounded animate-pulse">
                {/* {product.description.length < 100
                  ? product.description
                  : product.description.substring(0, 100) + "..."} */}
              </p>
              <div className="flex justify-end ">
                <button className="bg-slate-200 p-3 rounded-full animate-pulse">
                  {/* <MdEdit />/ */}
                </button>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

TheListSkeleton.propTypes = {
  listsToRender: PropTypes.number.isRequired,
};

export default TheListSkeleton;
