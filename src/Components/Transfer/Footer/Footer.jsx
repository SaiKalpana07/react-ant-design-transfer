import React from "react";
import "./Footer.css";
import leftArrow from "../../../Assets/left.png";
import rightArrow from "../../../Assets/right.png";
import divider from "../../../Assets/slash.png";

function Footer({
  enableReloadBtn,
  handleReloadBtnClick,
  reloadBtnClassName,
  reloadBtnName,
  featurePagination,
  currentPage,
  totalPageCount,
  handlePrev,
  handleNext,
  handlePagination
}) {
  
  return ( 
    <>
      <hr className="divider" />
      {enableReloadBtn && !featurePagination && (
        <div>
          <button className={reloadBtnClassName} onClick={handleReloadBtnClick}>
            {reloadBtnName}
          </button>
        </div>
      )}
      {!enableReloadBtn && featurePagination && (
        <>
          <div className="pagination">
            <button className={(currentPage === 1) ? "disable-button" : "arrow-btn"}>
              <img src={leftArrow} alt="Previous" className="left-arrow" 
              onClick={handlePrev}
               />
            </button>
            <input
              type="text"
              className="footer-textbox"
              value={currentPage}
              onChange={handlePagination}
            />
            <img src={divider} className="frontSlash" />
            <p>{totalPageCount}</p>
            <button className={(currentPage === totalPageCount) ? "disable-button" : "arrow-btn"}>
              <img src={rightArrow} alt="Next" className="right-arrow" 
              onClick={handleNext} 
              />
            </button>
          </div>
        </>
      )}
    </>
  );
}
export default Footer;
