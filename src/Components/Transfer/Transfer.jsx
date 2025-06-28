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
      return { ...j, selected: true };
    })
  );

  const source = Object.values(data).filter((d) => d.type === SOURCE);
  const target = Object.values(data).filter((d) => d.type === TARGET);

  const handleCheckboxChange = (id) => {
    const selectedValue = data.map((d) => {
      if (d.id === id) {
        return { ...d, selected: false };
      } else {
        return d;
      }
    });
    setData(selectedValue);
  };

  return (
    <>
      <div className="container">
        <Source source={source} handleCheckBoxChange={handleCheckboxChange} />
        <TransferButtons />
        <Target target={target} />
      </div>
    </>
  );
}
