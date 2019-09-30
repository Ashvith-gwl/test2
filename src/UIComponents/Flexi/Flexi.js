
import React from "react";
const Flexi = props => {
 let { items = [], handleChange, submitfield } = props;


 const FlexiConfig = item => {
  let isChild = "children" in item;
  const Components = require(`../Allcomponents/${item.type}/${item.type}`).default;
  if (isChild) {
    return (
      <Components data={item.props}>
        {item.children.items.map((Data, Index) => {
          return <div key={Index}>{FlexiConfig(Data)}</div>;
        })}
      </Components>
    );
  } else {
    return (
      <Components
        data={item.props}
        handleChange={handleChange}
        submitfield={submitfield}
      />
    );
  }
};
 return <div>{items.map((item, index) => FlexiConfig(item))}</div>;
};

export default Flexi;