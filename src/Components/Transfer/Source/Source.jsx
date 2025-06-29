import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import downArrow from "../../../Assets/down-arrow.png";
import "./Source.css";
import "../../../../src/style.css";
import Item from "../Item/Item";
import {
  SOURCE,
  SELECT_ALL_DATA,
  DESELECT_ALL_DATA,
  INVERT_CURRENT_PAGE,
} from "../../constants";

function Source({ source, handleCheckBoxChange, handleSelectAllCheckbox }) {
  const [isSourceMenuOpen, setIsSourceMenuOpen] = useState(false);

  return (
    <>
      <div className="source-container">
        <div className="source-header-container">
        <div className="source-header">
          <div className="source-checkbox">
            <input
              type="checkbox"
              checked={source.length > 0 && source.every((d) => d.selected)}
              onChange={(e) =>
                handleSelectAllCheckbox(SOURCE, e.target.checked)
              }
            />
          </div>
          <div
            className="dropdown-wrapper"
            onMouseEnter={() => setIsSourceMenuOpen(true)}
            onMouseLeave={() => setIsSourceMenuOpen(false)}
          >
            <div className="source-dropdown">
              <img src={downArrow} alt="Dropdown" className="dropdown-icon" />
            </div>
            {isSourceMenuOpen && (
              <div className="dropdown-menu" id="dropdown-list">
                <ul>
                  {!source.every((d) => d.selected) && (
                    <li onClick={() => handleSelectAllCheckbox(SOURCE, true)}>
                      Select all data
                    </li>
                  )}
                  {source.every((d) => d.selected) && (
                    <li onClick={() => handleSelectAllCheckbox(SOURCE, false)}>
                      Deselect all data
                    </li>
                  )}
                  <li
                    onClick={() =>
                      handleSelectAllCheckbox(
                        SOURCE,
                        !source.every((d) => d.selected)
                      )
                    }
                  >
                    Invert current page
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="source-items-count">
            <p>{source.length} items</p>
          </div>
        </div>
        <div className="source-label">
          <p>source</p>
        </div>
        </div>
        <hr className="divider" />

        <div className="source-body">
          {source.map((s) => (
            <Item data={s} handleCheckBoxChange={handleCheckBoxChange} />
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
