import React from "react";
import PropTypes from "prop-types";

const TheSelectInput = ({
  id,
  label,
  selectElementLabel,
  options,
  onChange,
  value,
}) => {
  return (
    <div className="flex flex-col gap-2 mb-3">
      <label className="text-sm text-gray-500 font-bold">{label}</label>
      <select
        className="bg-slate-100 p-2 rounded-sm outline-none"
        id={id}
        value={value}
        onChange={onChange}
      >
        <option value="">{selectElementLabel}</option>
        {options.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

TheSelectInput.propTypes = {
  label: PropTypes.string,
  selectElementLabel: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
};

export default TheSelectInput;
