import React from "react";
import './radio.css'

function Radio(props) {
    
    let label =props.label;
    let name = props.name;
    
    let options =props.options;
    // console.log(name);
    
    return (
        <div className="radio">
            <label>{label} : </label>
            {options.map((data, index) => {
                return (
                <React.Fragment>
                    <input type="radio" name={name} value={data.label}  onChange={props.handleChange}  />{data.label}
                </React.Fragment>
                )
            }
            )}
          
       </div>
    );
}

export default Radio;