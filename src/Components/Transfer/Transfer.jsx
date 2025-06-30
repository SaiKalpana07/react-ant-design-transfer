import React, { useState } from "react";
import json from "../../data.json";
import { SOURCE, TARGET } from "../constants.jsx";
import "./Transfer.css";
import TransferButtons from "./TransferButtons/TransferButtons.jsx";
import Container from "./Container/Container.jsx";

export default function Transfer({
  title,
  featureMoveTargetToSource,
  featureDisable = false,
  enableDeleteIcon = true,
}) {
  const [data, setData] = useState(
    json.map((j) => {
      return { ...j, selected: false };
    })
  );
  const [isToggled, setIsToggled] = useState(false);

  const source = Object.values(data).filter((d) => d.type === SOURCE);
  const target = Object.values(data).filter((d) => d.type === TARGET);

  const handleCheckboxChange = (id) => {
    setData(
      data.map((d) => {
        return d.id === id ? { ...d, selected: !d.selected } : d;
      })
    );
  };

  const handleSelectAllCheckbox = (type, selected) => {
    setData(
      data.map((d) => {
        return (!featureDisable && d.type === type) ||
          (featureDisable && d.type === type && !d.disabled)
          ? { ...d, selected: selected }
          : d;
      })
    );
  };

  const handleTransferBtnClick = (type, selected = true) => {
    setData(
      data.map((d) => {
        return d.selected === selected && d.type === type
          ? { ...d, selected: false, type: type == SOURCE ? TARGET : SOURCE }
          : d;
      })
    );
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

  return (
    <>
      <div className="parent-container">
        <p className="title">{title}</p>
        <div className="parent-container-grouping">
          <Container
            type={SOURCE}
            dataSource={source}
            featureDisable={featureDisable}
            isToggled={isToggled}
            handleCheckBoxChange={handleCheckboxChange}
            handleSelectAllCheckbox={handleSelectAllCheckbox}
          />
          <TransferButtons
            source={source}
            target={target}
            featureMoveTargetToSource={featureMoveTargetToSource}
            handleTransferBtnClick={handleTransferBtnClick}
          />
          <Container
            type={TARGET}
            dataSource={target}
            featureDisable={featureDisable}
            featureMoveTargetToSource={featureMoveTargetToSource}
            enableDeleteIcon={enableDeleteIcon}
            isToggled={isToggled}
            handleCheckBoxChange={handleCheckboxChange}
            handleSelectAllCheckbox={handleSelectAllCheckbox}
            handleDeleteItem={handleDeleteItem}
            handleTransferBtnClick={handleTransferBtnClick}
          />
        </div>

        <div className="bottom-container">
          <label className="toggle">
            <input
              type="checkbox"
              onChange={handleToggle}
              checked={isToggled}
            />
            <span className="slider">
              <span className="toggle-label">disabled</span>
            </span>
          </label>
        </div>
      </div>
    </>
  );
}
