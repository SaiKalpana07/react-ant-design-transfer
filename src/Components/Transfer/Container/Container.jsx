import React, { useState } from "react";
import PropTypes from "prop-types";
import downArrow from "../../../Assets/down-arrow.png";
import noData from "../../../Assets/no-data.png";
import searchIcon from "../../../Assets/search-icon.png";
import closeIcon from "../../../Assets/delete.png";
import "./Container.css";
import Item from "../Item/Item";

function Container({
  type,
  dataSource,
  handleCheckBoxChange,
  handleSelectAllCheckbox,
  handleDeleteItem,
  handleTransferBtnClick,
  isToggled,
  featureDisable = false,
  enableDeleteIcon = true,
  featureMoveTargetToSource = true,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const selectAllCheckbox =
    (!featureDisable &&
      dataSource.length > 0 &&
      dataSource.every((d) => d.selected)) ||
    (featureDisable &&
      dataSource.filter((d) => !d.disabled).length > 0 &&
      dataSource.filter((d) => !d.disabled).every((data) => data.selected));
  const numberOfItemsSelected = dataSource.filter(
    (data) => data.selected == true
  ).length;
  const totalNumberOfItems = dataSource.length;

  return (
    <>
      <div className="container">
        <div className="header-container">
          <div className="header">
            {featureMoveTargetToSource && (
              <div className="checkbox">
                <input
                  type="checkbox"
                  checked={selectAllCheckbox}
                  disabled={
                    dataSource.filter((d) => !d.disabled).length == 0 ||
                    isToggled
                  }
                  onChange={(e) =>
                    handleSelectAllCheckbox(type, e.target.checked)
                  }
                />
              </div>
            )}
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
                    {!selectAllCheckbox && featureMoveTargetToSource && (
                      <li onClick={() => handleSelectAllCheckbox(type, true)}>
                        Select all data
                      </li>
                    )}

                    {selectAllCheckbox && featureMoveTargetToSource && (
                      <li onClick={() => handleSelectAllCheckbox(type, false)}>
                        Deselect all data
                      </li>
                    )}
                    {featureMoveTargetToSource && (
                      <li
                        onClick={() =>
                          handleSelectAllCheckbox(type, !selectAllCheckbox)
                        }
                      >
                        Invert current page
                      </li>
                    )}

                    {!featureMoveTargetToSource && (
                      <li onClick={() => handleTransferBtnClick(type, false)}>
                        Remove all data
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
            <div className="items-count">
              <p>
                {featureMoveTargetToSource
                  ? `${numberOfItemsSelected} / ${totalNumberOfItems}`
                  : totalNumberOfItems} items
              </p>
            </div>
          </div>
          <div className="label">
            <p>{type}</p>
          </div>
        </div>
        <hr className="divider" />
        {/* <div className="search-box-container">
          <img src={searchIcon} id="search-icon" />
          <img src={closeIcon} id="close-icon" />
          <input type="text" className="search-box" />
        </div> */}

        {dataSource.length > 0 ? (
          <div className="body">
            {dataSource.map((s, index) => (
              <Item
                key={index}
                data={s}
                isToggled={isToggled}
                handleCheckBoxChange={handleCheckBoxChange}
                featureDisable={featureDisable}
                enableDeleteIcon={enableDeleteIcon}
                featureMoveTargetToSource={featureMoveTargetToSource}
                handleDeleteItem={handleDeleteItem}
              />
            ))}
          </div>
        ) : (
          <div className="empty-data-container">
            <img src={noData} alt="No data" className="empty-icon" />
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
