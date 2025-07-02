import React, { useEffect, useState } from "react";
import json from "../../data.json";
import { SOURCE, TARGET } from "../constants.jsx";
import "./Transfer.css";
import TransferButtons from "./TransferButtons/TransferButtons.jsx";
import Container from "./Container/Container.jsx";

export default function Transfer({
  title,
  enableToggle,
  featureMoveTargetToSource,
  featureDisable = false,
  enableDeleteIcon = true,
}) {
  const [isToggled, setIsToggled] = useState(false);
  const [baseData, setBaseData] = useState(
    json.map((j) => {
      return { ...j, selected: false };
    })
  );
  const [data, setData] = useState(baseData);
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
      }
      setBaseData(baseData);
    }
  }, [data]);

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

  // const handleInvertCurrentPage = (type,selected,id) => {console.log('type',type,selected,id)
  //   console.log(data.filter((d) => {
  //     d.id === id && d.type === type ? {...d, selected: selected == true ? false: true}:d;
  //   }),'checkData')
  //   setData(
  //     data.filter((d) => {
  //       d.id === id && d.type === type ? {...d, selected: selected === true ? false: true}:d;
  //     })
  //   )
  //   console.log(data,'data')
  // }

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
    console.log('base',baseData)
    setData(baseData);
    console.log('base1',baseData)

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
            handleSearch={handleSearch}
            handleClearSearch={handleClearSearch}
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
            handleSearch={handleSearch}
            handleClearSearch={handleClearSearch}
          />
        </div>

        {enableToggle && (
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
        )}
      </div>
    </>
  );
}
