import React from "react";
import PropTypes from "prop-types";

const TheInput = ({
  id,
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-2 mb-3">
      <label className="text-sm text-gray-500 font-bold" htmlFor={id}>
        {label}:
      </label>
      <input
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        className="bg-slate-100 p-2 rounded-sm outline-none"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

TheInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};

export default TheInput;
