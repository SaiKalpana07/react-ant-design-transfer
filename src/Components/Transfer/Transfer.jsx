import React, { useState } from "react";
import json from "../../data.json";
import Source from "./Source/Source.jsx";
import Target from "./Target/Target.jsx";
import { SOURCE, TARGET } from "../constants.jsx";
import "./Transfer.css";

export default function Transfer() {
  const [data, setData] = useState(
    json.map((j) => {
      return { ...j, selected: false };
    })
  );

  console.log('datajson',data)
  const source = data.filter((d) => d.type === SOURCE);
  const target = data.filter((d) => d.type === TARGET);

  return (
    <>
      <div className="container">
        <Source source={source} />
        <Target target={target} />
      </div>
    </>
  );
}
