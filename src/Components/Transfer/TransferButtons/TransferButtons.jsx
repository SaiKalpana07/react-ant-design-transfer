import React from "react";
import "./TransferButtons.css";
import { SOURCE, TARGET } from "../../constants";
import PropTypes from "prop-types";


function TransferButtons({
  source,
  target,
  handleTransferBtnClick,
  featureMoveTargetToSource = true,
}) {
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
        {featureMoveTargetToSource && (
          <button
            className={"target-btn"}
            disabled={!target.some((s) => s.selected)}
            onClick={() => handleTransferBtnClick(TARGET)}
          >
            {"<"}
          </button>
        )}
      </div>
    </>
  );
}

TransferButton.propTypes = {
  source:PropTypes.object,
  target:PropTypes.object,
  handleTransferBtnClick:PropTypes.function,
  featureMoveTargetToSource:PropTypes.boolean,
};

export default TransferButtons;
