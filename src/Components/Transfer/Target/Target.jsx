import PropTypes from "prop-types";
import React, { useState } from "react";
import downArrow from "../../../Assets/down-arrow.png";
import "./Target.css";
import Item from "../Item/Item";
import { TARGET } from "../../constants";

function Target({ target, handleCheckBoxChange, handleSelectAllCheckbox }) {
  const [isTargetMenuOpen, setIsTargetMenuOpen] = useState(false);

  return (
    <>
      <div className="target-container">
        <div className="target-header-container">
        <div className="target-header">
          <div className="target-checkbox">
            <input
              type="checkbox"
              checked={target.length > 0 && target.every((d) => d.selected)}
              onChange={(e) =>
                handleSelectAllCheckbox(TARGET, e.target.checked)
              }
            />
          </div>
          <div
            className="dropdown-wrapper"
            onMouseEnter={() => setIsTargetMenuOpen(true)}
            onMouseLeave={() => setIsTargetMenuOpen(false)}
          >
            <div className="target-dropdown">
              <img src={downArrow} alt="Dropdown" className="dropdown-icon" />
            </div>
            {isTargetMenuOpen && (
              <div className="dropdown-menu" id="dropdown-list">
                <ul>
                  {!target.every((d) => d.selected) && (
                    <li onClick={() => handleSelectAllCheckbox(TARGET, true)}>
                      Select all data
                    </li>
                  )}
                  {target.every((d) => d.selected) && (
                    <li onClick={() => handleSelectAllCheckbox(TARGET, false)}>
                      Deselect all data
                    </li>
                  )}
                  <li
                    onClick={() =>
                      handleSelectAllCheckbox(
                        TARGET,
                        !target.every((d) => d.selected)
                      )
                    }
                  >
                    Invert current page
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="target-items-count">
            <p>{target.length} items</p>
          </div>
          
        </div>
        <div className="target-label">
            <p>Target</p>
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
