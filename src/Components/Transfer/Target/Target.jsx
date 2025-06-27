import PropTypes from "prop-types";
import React from "react";
import downArrow from "../../../Assets/down-arrow.png";
import "./Target.css";

function Target({ target }) {
  console.log("t", target);
  return (
    <>
      <div className="target-container">
        <div className="target-header">
          <div className="target-checkbox">
            <input type="checkbox" />
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

        <div className="target-body"></div>
      </div>
    </>
  );
}

Target.propTypes = {
  target: PropTypes.array,
};

export default Target;
