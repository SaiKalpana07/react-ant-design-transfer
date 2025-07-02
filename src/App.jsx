import React from "react";
import ReactDOM from "react-dom/client";
import Transfer from "./Components/Transfer/Transfer.jsx";
import "./style.css";
import { ADVANCED, BASIC, ONE_WAY, SEARCH } from "./Components/constants.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <>
    <Transfer title={ADVANCED} enableReloadBtn={true} />

    <Transfer title={SEARCH} />

    <Transfer
      title={ONE_WAY}
      featureDisable={true}
      featureMoveTargetToSource={false}
      enableDeleteIcon={false}
      enableToggle={true}
    />
    <Transfer title={BASIC} />
  </>

  // </React.StrictMode>
);
