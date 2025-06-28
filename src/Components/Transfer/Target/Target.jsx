import PropTypes from "prop-types";
import React from "react";
import downArrow from "../../../Assets/down-arrow.png";
import "./Target.css";
import Item from "../Item/Item";
import { TARGET } from "../../constants";

function Target({ target, handleCheckBoxChange, handleSelectAllCheckbox }) {
  return (
    <>
      <div className="target-container">
        <div className="target-header">
          <div className="target-checkbox">
            <input
              type="checkbox"
              checked={target.every((d) => d.selected)}
              onChange={(e) =>
                handleSelectAllCheckbox(TARGET, e.target.checked)
              }
            />
          </div>
          <div className="dropdown-wrapper">
            <div className="target-dropdown">
              <img src={downArrow} alt="Dropdown" className="dropdown-icon" />
            </div>
          </div>
          <div className="target-items-count">
            <p>{target.length} items</p>
          </div>
          <div className="target-label">
            <p>target</p>
          </div>
        </div>
        <hr className="divider" />

        <div className="target-body">
          {target.map((t) => (
            <Item data={t} handleCheckBoxChange={handleCheckBoxChange} />
          ))}
        </div>
      </div>
    </>
  );
}

Target.propTypes = {
  target: PropTypes.array,
};

export default Target;
