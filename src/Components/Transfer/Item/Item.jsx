import React, { useState } from "react";
import "./Item.css";

function Item({data,handleCheckBoxChange}) {

  return (
    <>
      <li>
         <input type="checkbox"  checked={data.selected}
         onChange={() => handleCheckBoxChange(data.id)}
        /> 
        <label>{data.name}</label>
      </li>
    </>
  );
}

export default Item;
