// components/AddHouseButton.js
import React from "react";

const AddHouseButton = ({ onAdd }) => {
  return (
    <button className="btn btn-primary" onClick={onAdd}>
      Add
    </button>
  );
};

export default AddHouseButton;
