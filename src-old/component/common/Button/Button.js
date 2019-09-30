import React from "react";
import './Button.css'

function Button(props) {
   
// let names = props.values;
let label =props.label
  return (
    <div className="App">
       <button className="button" onClick={props.submitfield}>{label}</button>
    </div>
  );
}
  
export default Button;