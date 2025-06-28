import React from "react";
import PropTypes from "prop-types";
import downArrow from "../../../Assets/down-arrow.png";
import "./Source.css";
import Item from "../Item/Item";

function Source({ source }) {
  return (
    <>
      <div className="source-container">
        <div className="source-header">
          <div className="source-checkbox">
            <input type="checkbox" />
          </div>
          <div className="dropdown-wrapper">
            <div className="source-dropdown">
              <img src={downArrow} alt="Dropdown" className="dropdown-icon" />
            </div>
          </div>
          <div className="source-items-count">
            <p>{source.length} items</p>
          </div>
          <div className="source-label">
            <p>source</p>
          </div>
        </div>
        <hr className="divider" />

        <div className="source-body">
          {source.map((s) => (
            <Item data={s}/>
          ))}
        </div>
      </div>
    </>
  );
}

Source.propTypes = {
  source: PropTypes.array,
};

export default Source;
