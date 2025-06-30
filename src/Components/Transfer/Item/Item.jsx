import React from "react";
import "./Item.css";

function Item({ data, handleCheckBoxChange,featureDisable }) {
  const disabledClassName = featureDisable && data.disabled ? "disable-item" : ""
  return (
    <>
      <li>
        <input
          className={disabledClassName}
          type="checkbox"
          checked={data.selected}
          disabled={featureDisable && data.disabled}
          onChange={() => handleCheckBoxChange(data.id)}
        />
        <label className={disabledClassName}>
          {data.name}
        </label>
      </li>
    </>
  );
}

export default Item;
