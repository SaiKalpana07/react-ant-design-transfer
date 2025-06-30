import React from "react";
import ReactDOM from "react-dom/client";
import Transfer from "./Components/Transfer/Transfer.jsx";
import "./style.css";
import { BASIC, ONE_WAY } from "./Components/constants.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <>
    <Transfer title={ONE_WAY} featureDisable={true} featureMoveTargetToSource={false} enableDeleteIcon={false}  />
    <Transfer title={BASIC} />
  </>

  // </React.StrictMode>
);
