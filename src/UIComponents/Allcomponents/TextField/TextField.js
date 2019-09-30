import React from "react";
import './textfield.css'

function Textfield(props) {
   
let data = props.data;
  return (
    <div className="App">
      <label>{data.label} : </label>
      <input type={data.inputType} name={data.name}  onChange={props.handleChange} />
    </div>
  );
}
  
export default Textfield;