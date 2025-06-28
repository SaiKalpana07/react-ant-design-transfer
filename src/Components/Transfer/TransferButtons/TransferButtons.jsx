import React from "react";
import "./TransferButtons.css";
import { SOURCE, TARGET } from "../../constants";

function TransferButtons({ source,target,handleTransferBtnClick }) {
  return (
    <>
      <div className="transfer-buttons">
        <button
          className="source-btn"
          disabled={!source.some((s) => s.selected)}
          onClick={() => handleTransferBtnClick(SOURCE)}
        >
          {">"}
        </button>
        <button
          className={"target-btn"}
          disabled={!target.some((s) => s.selected)}
          onClick={() => handleTransferBtnClick(TARGET)}
        >
          {"<"}
        </button>
      </div>
    </>
  );
}

export default TransferButtons;
