import React from "react";
import './Button.css'

function Button(props) {
   
// let names = props.values;
let data =props.data

  return (
    <div className="App">
       <button className="button" onClick={props.submitfield}>{data.label}</button>
    </div>
  );
}
  
export default Button;