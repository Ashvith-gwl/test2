import React from "react";

function Header(props) {

    let label = props.data;
    //  console.log(label);
    
    

    return (
        <div>
        <h2>{label.label}</h2>

        </div>
    );
}

export default Header;