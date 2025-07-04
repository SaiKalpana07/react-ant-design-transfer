import React, { useEffect, useState } from "react";
import json from "../../data.json";
import {
  SOURCE,
  TARGET,
  LEFT_RELOAD_BUTTON_NAME,
  RIGHT_RELOAD_BUTTON_NAME,
  LEFT_RELOAD_BUTTON_CLASSNAME,
  RIGHT_RELOAD_BUTTON_CLASSNAME,
  ONE_WAY_TOGGLE_NAME,
  DISABLED_TOGGLE_NAME,
} from "../constants.jsx";
import "./Transfer.css";
import TransferButtons from "./TransferButtons/TransferButtons.jsx";
import Container from "./Container/Container.jsx";
import ErrorBoundary from "../ErrorBoundary.jsx";
import PropTypes from "prop-types";

function Transfer({
  title,
  enableToggle,
  featureMoveTargetToSource,
  enableReloadBtn = false,
  featureDisable = false,
  enableDeleteIcon = true,
  enableDescription = false,
  featurePagination = false,
  featureStatus = false,
  featureShowSearch = false,
  featureOneWayToggle = false,
}) {
  const jsonData = json.map((j) => {
    return { ...j, selected: false };
  });

  const [isToggled, setIsToggled] = useState(false);
  const [isOneWayToggled, setIsOneWayToggled] = useState(false);
  const [rootData, setRootData] = useState(structuredClone(jsonData));
  const [baseData, setBaseData] = useState(structuredClone(rootData));
  const [data, setData] = useState(structuredClone(baseData));
  const [sourceSearchText, setSourceSearchText] = useState("");
  const [targetSearchText, setTargetSearchText] = useState("");

  const source = Object.values(data).filter((d) => d.type === SOURCE);
  const target = Object.values(data).filter((d) => d.type === TARGET);

  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < baseData.length; j++) {
        if (data[i].id === baseData[j].id) {
          baseData[j].selected = data[i].selected;
          baseData[j].type = data[i].type;
        }

        for (let k = 0; k < rootData.length; k++) {
          if (baseData[j].id === rootData[k].id) {
            rootData[k].selected = baseData[j].selected;
          }
        }
      }
      setBaseData(baseData);
      setRootData(rootData);
    }
  }, [data]);

  const handleCheckboxChange = (id) => {
    setData(
      data.map((d) => {
        return d.id === id ? { ...d, selected: !d.selected } : d;
      })
    );
  };

  const handleSelectAllCheckbox = (type, selected, paginatedDataSource) => {
    if (paginatedDataSource == undefined) {
      let updatedData = data.map((d) => {
        return (!featureDisable && d.type === type) ||
          (featureDisable && d.type === type && !d.disabled)
          ? { ...d, selected: selected }
          : d;
      });
      setData(updatedData);
    } else {
      let updatedData = paginatedDataSource.map((d) => {
        return d.type === type && { ...d, selected: selected };
      });
      setData(updatedData);
    }
  };

  const handleSelectCurrentPage = (type, selected, data) => {
    setData(
      data.map((d) => {
        return d.type === type && { ...d, selected: selected };
      })
    );
  };

  const handleInvertCurrentPage = (type) => {
    setData(
      data.map((d) => {
        return d.type === type ? { ...d, selected: !d.selected } : d;
      })
    );
  };

  const handleTransferBtnClick = (
    type,
    selected = true,
    paginatedDataSource
  ) => {
    if (paginatedDataSource == undefined) {
      let updatedData = data.map((d) => {
        return d.selected === selected && d.type === type
          ? { ...d, selected: false, type: type == SOURCE ? TARGET : SOURCE }
          : d;
      });
      setData(updatedData);
    } else {
      let updatedData = paginatedDataSource.map((d) => {
        return (
          d.type === type && {
            ...d,
            selected: false,
            type: type == SOURCE ? TARGET : SOURCE,
          }
        );
      });
      setData(updatedData);
    }
  };

  const handleDeleteItem = (id) => {
    setData(
      data.map((d) => {
        return d.id === id ? { ...d, type: SOURCE, selected: false } : d;
      })
    );
  };

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const handleOneWayToggle = () => {
    setIsOneWayToggled(!isOneWayToggled);
  };

  const handleSearch = (searchValue, type) => {
    const existingData = baseData;
    if (type == SOURCE) setSourceSearchText(searchValue);
    else setTargetSearchText(searchValue);

    if (sourceSearchText === "" && targetSearchText === "") {
      setData(existingData);
      return;
    }

    let filteredData = existingData.filter((d) => {
      return (
        (d.type === SOURCE &&
          sourceSearchText != "" &&
          d.name.includes(sourceSearchText.toLowerCase())) ||
        (d.type === SOURCE && sourceSearchText === "") ||
        (d.type === TARGET &&
          targetSearchText != "" &&
          d.name.includes(targetSearchText.toLowerCase())) ||
        (d.type === TARGET && targetSearchText === "")
      );
    });
    setData(filteredData);
  };

  const handleClearSearch = () => {
    setData(baseData);
  };

  const handleReloadBtnClick = () => {
    setData(rootData);
  };

  return (
    <>
      <div className="parent-container">
        <p className="title">{title}</p>
        <div className="parent-container-grouping">
          <ErrorBoundary>
            <Container
              type={SOURCE}
              dataSource={featureStatus ? [] : source}
              featureStatus={featureStatus}
              featureDisable={featureDisable}
              featureShowSearch={featureShowSearch}
              isToggled={isToggled}
              enableReloadBtn={enableReloadBtn}
              reloadBtnClassName={LEFT_RELOAD_BUTTON_CLASSNAME}
              reloadBtnName={LEFT_RELOAD_BUTTON_NAME}
              enableDescription={enableDescription}
              featurePagination={featurePagination}
              handleCheckBoxChange={handleCheckboxChange}
              handleSelectAllCheckbox={handleSelectAllCheckbox}
              handleSearch={handleSearch}
              handleClearSearch={handleClearSearch}
              handleInvertCurrentPage={handleInvertCurrentPage}
              handleSelectCurrentPage={handleSelectCurrentPage}
              handleReloadBtnClick={handleReloadBtnClick}
            />
            <TransferButtons
              source={source}
              target={target}
              isOneWayToggled={isOneWayToggled}
              featureMoveTargetToSource={featureMoveTargetToSource}
              handleTransferBtnClick={handleTransferBtnClick}
            />
            <Container
              type={TARGET}
              dataSource={featureStatus ? [] : target}
              featureStatus={featureStatus}
              featureDisable={featureDisable}
              featureShowSearch={featureShowSearch}
              featureMoveTargetToSource={featureMoveTargetToSource}
              enableDeleteIcon={enableDeleteIcon}
              isToggled={isToggled}
              isOneWayToggled={isOneWayToggled}
              enableReloadBtn={enableReloadBtn}
              reloadBtnClassName={RIGHT_RELOAD_BUTTON_CLASSNAME}
              reloadBtnName={RIGHT_RELOAD_BUTTON_NAME}
              enableDescription={enableDescription}
              featurePagination={featurePagination}
              handleCheckBoxChange={handleCheckboxChange}
              handleSelectAllCheckbox={handleSelectAllCheckbox}
              handleDeleteItem={handleDeleteItem}
              handleTransferBtnClick={handleTransferBtnClick}
              handleSearch={handleSearch}
              handleClearSearch={handleClearSearch}
              handleInvertCurrentPage={handleInvertCurrentPage}
              handleSelectCurrentPage={handleSelectCurrentPage}
              handleReloadBtnClick={handleReloadBtnClick}
            />
          </ErrorBoundary>
        </div>

        {(enableToggle || featureOneWayToggle) && (
          <div className="bottom-container">
            <label className="toggle">
              <input
                type="checkbox"
                onChange={
                  featureOneWayToggle ? handleOneWayToggle : handleToggle
                }
                checked={featureOneWayToggle ? isOneWayToggled : isToggled}
              />
              <span className="slider">
                <span className="toggle-label">
                  {featureOneWayToggle
                    ? ONE_WAY_TOGGLE_NAME
                    : DISABLED_TOGGLE_NAME}
                </span>
              </span>
            </label>
          </div>
        )}
      </div>
    </>
  );
}

Transfer.propTypes = {
  title: PropTypes.string,
  enableToggle: PropTypes.boolean,
  featureMoveTargetToSource: PropTypes.boolean,
  enableReloadBtn: PropTypes.boolean,
  featureDisable: PropTypes.boolean,
  enableDeleteIcon: PropTypes.boolean,
  enableDescription: PropTypes.boolean,
  featurePagination: PropTypes.boolean,
  featureStatus: PropTypes.boolean,
  featureShowSearch: PropTypes.boolean,
};

export default Transfer;
