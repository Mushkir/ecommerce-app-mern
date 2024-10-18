import React from "react";
import PropTypes from "prop-types";

const TheTextArea = ({ id, label, placeholder, onChange, value, rows = 7 }) => {
  return (
    <div className="flex flex-col gap-2 mb-3">
      <label className="text-sm text-gray-500 font-bold" htmlFor={id}>
        {label}:
      </label>
      <textarea
        name={id}
        className="bg-slate-100 p-2 rounded-sm"
        id={id}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

TheTextArea.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  rows: PropTypes.number,
};

export default TheTextArea;
