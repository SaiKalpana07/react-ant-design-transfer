import React, { useState } from "react";
import json from "../../data.json";
import Source from "./Source/Source.jsx";
import Target from "./Target/Target.jsx";
import { SOURCE, TARGET } from "../constants.jsx";
import "./Transfer.css";
import TransferButtons from "./TransferButtons/TransferButtons.jsx";

export default function Transfer() {
  const [data, setData] = useState(
    json.map((j) => {
      return { ...j, selected: false };
    })
  );

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
        return d.type === type ? { ...d, selected: selected } : d;
      })
    );
  };

  return (
    <>
      <div className="container">
        <Source
          source={source}
          handleCheckBoxChange={handleCheckboxChange}
          handleSelectAllCheckbox={handleSelectAllCheckbox}
        />
        <TransferButtons source={source} target={target}/>
        <Target
          target={target}
          handleCheckBoxChange={handleCheckboxChange}
          handleSelectAllCheckbox={handleSelectAllCheckbox}
        />
      </div>
    </>
  );
}
