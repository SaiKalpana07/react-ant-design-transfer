import React from "react";
import "./TransferButtons.css";

function TransferButtons() {
  return (
    <>
      <div className="transfer-buttons">
        <button className="source-btn">{">"}</button>
        <button className={"target-btn"}>{"<"}</button>
      </div>
    </>
  );
}

export default TransferButtons;
