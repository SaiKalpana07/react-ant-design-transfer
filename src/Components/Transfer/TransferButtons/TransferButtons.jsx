import React from 'react'

function TransferButtons() {
    return (
        <>
         {/* <div className="transfer-buttons">
            <button
              className={reloadButton ? "rename-source-btn" : "source-btn"}
              disabled={selected.length > 0 ? false : true}
              onClick={handleSourceBtnClick}
              style={{ display: sourceButton ? "block" : "none" }}
            >
              {reloadButton ? "> to right" : ">"}
            </button>
            <button
              className={reloadButton ? "rename-target-btn" : "target-btn"}
              disabled={targetSelected.length === 0}
              onClick={handleTargetBtnClick}
              style={{
                display: toggleOneWay
                  ? "none"
                  : targetButton
                  ? "block"
                  : "none",
              }}
            >
              {reloadButton ? "< to left" : "<"}
            </button>
          </div> */}
        </>
    )
}

export default TransferButtons;