import React from "react";
import "./Item.css";
import PropTypes from "prop-types";

function Item({
  data,
  handleCheckBoxChange,
  featureDisable,
  enableDeleteIcon,
  isToggled,
  isOneWayToggled,
  featureMoveTargetToSource,
  handleDeleteItem,
  enableDescription,
}) {
  const disabledClassName =
    featureDisable && data.disabled ? "disable-item" : "";

  return (
    <>
      <li className="list-item">
        {featureMoveTargetToSource && !isOneWayToggled && (
          <input
            className={disabledClassName}
            type="checkbox"
            checked={data.selected}
            disabled={(featureDisable && data.disabled) || isToggled}
            onChange={() => handleCheckBoxChange(data.id)}
          />
        )}
        <label className={`${isToggled ? "disable-label" : disabledClassName}`}>
          {data.name}
          {enableDescription && <span>- {data.description}</span>}
        </label>
        {(!enableDeleteIcon || isOneWayToggled) && (
          <span className="delete-icon">
            <i
              className="fa-regular fa-trash-can"
              onClick={() => handleDeleteItem(data.id)}
            ></i>
          </span>
        )}
      </li>
    </>
  );
}

Item.propTypes = {
  data: PropTypes.object,
  featureDisable: PropTypes.boolean,
  isToggled: PropTypes.boolean,
  enableDescription: PropTypes.boolean,
  handleDeleteItem: PropTypes.function,
  handleCheckBoxChange: PropTypes.function,
  featureMoveTargetToSource: PropTypes.function,
};

export default Item;
