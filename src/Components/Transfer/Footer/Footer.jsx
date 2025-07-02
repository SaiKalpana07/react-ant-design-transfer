import React from "react";
import "./Footer.css";

function Footer({
  handleReloadBtnClick,
  reloadBtnClassName,
  reloadBtnName,
}) {
  return (
    <>
      <hr className="divider" />
      <div>
        <button className={reloadBtnClassName} onClick={handleReloadBtnClick}>
          {reloadBtnName}
        </button>
      </div>
    </>
  );
}
export default Footer;
