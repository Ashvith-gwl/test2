import React from "react";
import './textfield.css'

function Textfield(props) {
   
let name = props.name;
let label =props.label
let type =props.type
  return (
    <div className="App">
      <label>{label} : </label>
      <input type={type} name={name}  onChange={props.handleChange} />
    </div>
  );
}
  
export default Textfield;