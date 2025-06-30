import React from "react";
import "./Item.css";
import { TARGET } from "../../constants";

function Item({
  data,
  handleCheckBoxChange,
  featureDisable,
  featureHideCheckbox,
}) {
  const disabledClassName =
    featureDisable && data.disabled ? "disable-item" : "";
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

        <label className={disabledClassName}>{data.name}</label>
      </li>
    </>
  );
}

export default Item;
