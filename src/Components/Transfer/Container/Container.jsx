import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import downArrow from "../../../Assets/down-arrow.png";
import noData from "../../../Assets/no-data.png";
import searchIcon from "../../../Assets/search-icon.png";
import closeIcon from "../../../Assets/delete.png";
import "./Container.css";
import Item from "../Item/Item";
import Footer from "../Footer/Footer";

function Container({
  type,
  dataSource,
  handleCheckBoxChange,
  handleSelectAllCheckbox,
  handleDeleteItem,
  handleTransferBtnClick,
  isToggled,
  handleSearch,
  handleClearSearch,
  handleInvertCurrentPage,
  handleReloadBtnClick,
  enableReloadBtn,
  reloadBtnClassName,
  reloadBtnName,
  featureDisable = false,
  enableDeleteIcon = true,
  featureMoveTargetToSource = true,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

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

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSearchTextChange(searchText, type);
    }, 10);
    return () => clearTimeout(timer);
  }, [searchText, dataSource]);

  const handleSearchTextChange = (e, type) => {
    handleSearch(e, type);
    setSearchText(e);
  };

  const handleClearSearchText = () => {
    setSearchText("");
    handleClearSearch();
  };

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
                    featureDisable
                      ? dataSource.filter((d) => !d.disabled).length === 0
                      : dataSource.length === 0 || isToggled
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
                      <li onClick={() => handleInvertCurrentPage(type)}>
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
                  : totalNumberOfItems}{" "}
                items
              </p>
            </div>
          </div>
          <div className="label">
            <p>{type}</p>
          </div>
        </div>
        <hr className="divider" />
        <div className="search-box-container">
          <img src={searchIcon} id="search-icon" alt="search" />
          {searchText.length > 0 && (
            <img
              src={closeIcon}
              id="close-icon"
              alt="close"
              onClick={handleClearSearchText}
            />
          )}
          <input
            type="text"
            className="search-box"
            placeholder="Search here"
            value={searchText}
            onChange={(e) => handleSearchTextChange(e.target.value, type)}
          />
        </div>

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
        {enableReloadBtn && (
          <Footer
            type={type}
            reloadBtnClassName={reloadBtnClassName}
            reloadBtnName={reloadBtnName}
            handleReloadBtnClick={handleReloadBtnClick}
          />
        )}
      </div>
    </>
  );
}

Container.propTypes = {
  source: PropTypes.array,
};

export default Container;
