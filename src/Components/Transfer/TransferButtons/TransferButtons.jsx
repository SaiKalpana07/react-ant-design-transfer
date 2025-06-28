import React from "react";
import "./TransferButtons.css";

function TransferButtons({ source,target }) {
  return (
    <>
      <div className="transfer-buttons">
        <button
          className="source-btn"
          disabled={!source.some((s) => s.selected)}
          // onClick={handleClick}
        >
          {">"}
        </button>
        <button
          className={"target-btn"}
          disabled={!target.some((s) => s.selected)}
        >
          {"<"}
        </button>
      </div>
    </>
  );
}

export default TransferButtons;
