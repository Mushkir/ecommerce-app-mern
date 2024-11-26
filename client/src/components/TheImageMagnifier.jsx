import React, { useState } from "react";
import PropTypes from "prop-types";

const TheImageMagnifier = ({
  src,
  width,
  height,
  magnifierHeight = 100,
  magnifierWidth = 100,
  zoomLevel = 1.5,
}) => {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);

  return (
    <div className="">
      <img
        src={src}
        style={{ height: height, width: width, objectFit: "scale-down" }}
        onMouseEnter={(e) => {
          const elem = e.currentTarget;
          const { width, height } = elem.getBoundingClientRect();
          setSize([width, height]);
          setShowMagnifier(true);
        }}
        onMouseMove={(e) => {
          const elem = e.currentTarget;
          const { top, left } = elem.getBoundingClientRect();
          const x = e.pageX - left - window.pageXOffset;
          const y = e.pageY - top - window.pageYOffset;
          setXY([x, y]);
        }}
        onMouseLeave={() => {
          setShowMagnifier(false);
        }}
        alt={"img"}
        className="object-scale-down mix-blend-multiply cursor-pointer p-3"
      />

      <div
        style={{
          display: showMagnifier ? "" : "none",
          position: "absolute",
          pointerEvents: "none",
          height: `${magnifierHeight}px`,
          width: `${magnifierWidth}px`,
          opacity: "1",
          border: "1px solid lightgrey",
          backgroundColor: "white",
          borderRadius: "5px",
          backgroundImage: `url('${src}')`,
          backgroundRepeat: "no-repeat",
          top: `${y - magnifierHeight / 10}px`,
          left: `${x - magnifierWidth / 10}px`,
          backgroundSize: `${imgWidth * zoomLevel}px ${
            imgHeight * zoomLevel
          }px`,
          backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
          backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
        }}
      />
    </div>
  );
};

TheImageMagnifier.propTypes = {
  src: PropTypes.string.isRequired,
  zoomLevel: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  magnifierHeight: PropTypes.number,
  magnifierWidth: PropTypes.number,
};

export default TheImageMagnifier;
