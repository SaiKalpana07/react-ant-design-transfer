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
  featureDisable = false,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const selectAllCheckbox =
    (!featureDisable &&
      dataSource.length > 0 &&
      dataSource.every((d) => d.selected)) ||
    (featureDisable &&
      dataSource.filter((d) => !d.disabled).length > 0 &&
      dataSource.filter((d) => !d.disabled).every((data) => data.selected));

  return (
    <>
      <div className="container">
        <div className="header-container">
          <div className="header">
            <div className="checkbox">
              <input
                type="checkbox"
                checked={selectAllCheckbox}
                disabled={dataSource.filter((d) => !d.disabled).length == 0}
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
                    {!selectAllCheckbox && (
                      <li onClick={() => handleSelectAllCheckbox(type, true)}>
                        Select all data
                      </li>
                    )}

                    {selectAllCheckbox && (
                      <li onClick={() => handleSelectAllCheckbox(type, false)}>
                        Deselect all data
                      </li>
                    )}

                    <li
                      onClick={() =>
                        handleSelectAllCheckbox(
                          type,
                          !selectAllMenu && !deselectAllMenu
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
              <p>
                {dataSource.filter((data) => data.selected == true).length}/
                {dataSource.length} items
              </p>
            </div>
          </div>
          <div className="label">
            <p>{type}</p>
          </div>
        </div>
        <hr className="divider" />

        {dataSource.length > 0 ? (
          <div className="body">
            {dataSource.map((s, index) => (
              <Item
                key={index}
                data={s}
                handleCheckBoxChange={handleCheckBoxChange}
                featureDisable={featureDisable}
              />
            ))}
          </div>
        ) : (
          <div className="empty-data-container">
            <img src={noData} className="empty-icon" />
            <p>No data</p>
          </div>
        )}
      </div>
    </>
  );
}

Container.propTypes = {
  source: PropTypes.array,
};

export default Container;
