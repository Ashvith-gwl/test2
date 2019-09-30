import React from "react";
import Config from "./Root";


class Components extends React.Component {
  render() {
    // console.log(Config,"root");
    return (
      <div className="index">
          
          
        {Config.map((item, i) => {
          const Components = require(`./${item.path}`).default;
          return <Components data={item.name} />;
        })}
      </div>
    );
  }
}

export default Components;