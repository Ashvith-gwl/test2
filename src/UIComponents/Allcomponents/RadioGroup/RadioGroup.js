import React from "react";
import './radio.css'

function Radio(props) {
    
    let datas =props.data;
    let options = datas.options;

    
    return (
        <div className="radio">
            <label>{datas.label} : </label>
            {options.map((data, index) => {
                return (
                <React.Fragment>
                    <input type="radio" name={datas.name} value={data.label}  onChange={props.handleChange}  />{data.label}
                </React.Fragment>
                )
            }
            )}
          
       </div>
    );
}

export default Radio;