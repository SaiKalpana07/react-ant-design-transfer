import React, { useState } from "react";
import "./Item.css";

function Item({ data}) {
  const[checked,setChecked] = useState(data.selected)
  const handleCheckboxChange = () => {
    setChecked(!data.selected)
  }

  console.log('dataFlag',data)
  return (
    <>
      <li>
        <input type="checkbox" checked={checked}
        onChange={handleCheckboxChange}
        />
        <label>{data.name}</label>
      </li>
    </>
  );
}

export default Item;
