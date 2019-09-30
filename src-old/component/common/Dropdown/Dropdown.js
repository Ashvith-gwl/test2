import React from "react";

function Dropdown(props) {
    let datas1 = props.dropdowns

    let name = props.name;
    let label = props.label
    return (
        <div className="App">
            <div>
                <label>{label} : </label>
                <select name={name} onChange={props.handleChange}>
                    {datas1.map((row, id) => (
                        <option key={id} value={row}>{row}</option>
                    ))}
                </select>
            </div>
        </div >
    );
}

export default Dropdown;