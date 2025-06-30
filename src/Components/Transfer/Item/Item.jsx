import React from "react";
import "./Item.css";

function Item({
  data,
  handleCheckBoxChange,
  featureDisable,
  enableDeleteIcon,
  isToggled,
  featureMoveTargetToSource,
  handleDeleteItem
}) {
  const disabledClassName =
    featureDisable && data.disabled ? "disable-item" : "";

  return (
    <>
      <li className="list-item">
        {featureMoveTargetToSource && (
          <input
            className={disabledClassName}
            type="checkbox"
            checked={data.selected}
            disabled={featureDisable && data.disabled || isToggled}
            onChange={() => handleCheckBoxChange(data.id)}
          />
        )}
        <label className={`${isToggled ? "disable-label" :disabledClassName}`}>{data.name}</label>
        {!enableDeleteIcon && (
          <span className="delete-icon">
            <i className="fa-regular fa-trash-can" onClick={() => handleDeleteItem(data.id)}></i>
          </span>
        )}
      </li>
    </>
  );
}

export default Item;
