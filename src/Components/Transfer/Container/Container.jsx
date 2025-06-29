import React, { useState } from "react";
import PropTypes from "prop-types";
import downArrow from "../../../Assets/down-arrow.png";
import noData from "../../../Assets/no-data.png";

import "./Container.css";
import Item from "../Item/Item";

function Container({
  type,
  dataSource,
  handleCheckBoxChange,
  handleSelectAllCheckbox,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="container">
        <div className="header-container">
          <div className="header">
            <div className="checkbox">
              <input
                type="checkbox"
                checked={
                  dataSource.length > 0 && dataSource.every((d) => d.selected)
                }
                disabled={dataSource.length == 0}
                onChange={(e) =>
                  handleSelectAllCheckbox(type, e.target.checked)
                }
              />
            </div>
            <div
              className="dropdown-wrapper"
              onMouseEnter={() => setIsMenuOpen(true)}
              onMouseLeave={() => setIsMenuOpen(false)}
            >
              <div className="dropdown">
                <img src={downArrow} alt="Dropdown" className="dropdown-icon" />
              </div>
              {isMenuOpen && (
                <div className="dropdown-menu" id="dropdown-list">
                  <ul>
                    {!dataSource.every((d) => d.selected) && (
                      <li onClick={() => handleSelectAllCheckbox(type, true)}>
                        Select all data
                      </li>
                    )}
                    {dataSource.every((d) => d.selected) && (
                      <li onClick={() => handleSelectAllCheckbox(type, false)}>
                        Deselect all data
                      </li>
                    )}
                    <li
                      onClick={() =>
                        handleSelectAllCheckbox(
                          type,
                          !dataSource.every((d) => d.selected)
                        )
                      }
                    >
                      Invert current page
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="items-count">
              <p>{dataSource.length} items</p>
            </div>
          </div>
          <div className="label">
            <p>{type}</p>
          </div>
        </div>
        <hr className="divider" />

       {dataSource.length > 0 ? (<div className="body">
          {dataSource.map((s,index) => (
            <Item key = {index}data={s} handleCheckBoxChange={handleCheckBoxChange} />
          ))}
        </div>): (<div className="empty-data-container">
          <img src={noData} className="empty-icon" />
            <p>No data</p>
          </div>)} 
       
      </div>
    </>
  );
}

Container.propTypes = {
  source: PropTypes.array,
};

export default Container;
