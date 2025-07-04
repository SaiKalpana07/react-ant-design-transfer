import React from "react";
import ReactDOM from "react-dom/client";
import Transfer from "./Components/Transfer/Transfer.jsx";
import "./style.css";
import {
  ADVANCED,
  BASIC,
  CUSTOM_DATASOURCE,
  ERROR_STATUS,
  ONE_WAY,
  PAGINATION,
  SEARCH,
} from "./Components/constants.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <>
        <Transfer title={BASIC} />

        <Transfer
          title={ONE_WAY}
          featureDisable={true}
          featureMoveTargetToSource={false}
          enableDeleteIcon={false}
          enableToggle={true}
        />

        <Transfer title={SEARCH} featureShowSearch={true} />

        <Transfer
          title={ADVANCED}
          featureShowSearch={true}
          enableReloadBtn={true}
        />

        <Transfer
          title={CUSTOM_DATASOURCE}
          featureShowSearch={true}
          enableDescription={true}
        />

        <Transfer
          title={PAGINATION}
          featureShowSearch={true}
          featurePagination={true}
          featureOneWayToggle={true}
        />

        <Transfer title={ERROR_STATUS} featureStatus={true} />
      </>
      ;
    </>
  </React.StrictMode>
);
