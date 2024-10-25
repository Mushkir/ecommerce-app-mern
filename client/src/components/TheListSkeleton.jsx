import React from "react";
import PropTypes from "prop-types";

const TheListSkeleton = ({ listsToRender, content }) => {
  //   console.log(content);

  return (
    <>
      {Array(listsToRender)
        .fill(1)
        .map((card, index) => (
          // render your skeleton here
          <div key={index}>{content}</div>
        ))}
    </>
  );
};

TheListSkeleton.propTypes = {
  listsToRender: PropTypes.number.isRequired,
  content: PropTypes.object.isRequired,
};

export default TheListSkeleton;
