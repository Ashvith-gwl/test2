import React, { Component } from "react";
import Navbar from './common/Navbar/Navbar'
import Header from './common/Header/Header'
import Card from './common/Card/Card'
import Cards from './common/Card/Cards'
import Button from './common/Button/Button'
import Radio from './common/Radiobtn/Radio'
import Textfield from "./common/Textfield/Textfield";
import Hoc from './hoc/Hoc'


class Home extends Component {

  render() {

    let { home, handleChange,submitfield } = this.props;
    let { items } = home;
    // console.log(items);

    const RenderField = items => {
      // console.log(items)
      // console.log(items.hasOwnProperty("children"))
      let child = 'children' in items;
      // console.log(child);

      switch (items.type) {
        case "Header":
          return <Header data={items.props} />;
        case "Card":

          if (child) {

            // console.log(items.children.items);

            return (
              <Card data={items.props} >
                {items.children.items.map((items, Index) => {
                  return <div>{RenderField(items)}
                  </div>
                })}
              </Card>
            )
          }
          else {
            return <Card data={items.props} />;
          }
        case "TextField":
          return <Textfield label={items.props.label} name={items.props.name} type={items.props.inputType} handleChange={handleChange}  />;
        case "RadioGroup":
          return <Radio label={items.props.label} name={items.props.name} options={items.props.options} handleChange={handleChange}  />;
        case "Button":
          return <Button  submitfield={submitfield} label={items.props.label} />;

        case "Cards":
          return <Cards data={items.props} />;

        default:
          break;
      }
    }

    return (
      <div className="App">
        <Navbar />

        {items.map((data, index) => {
          return RenderField(data)
        })}

      </div>
    );
  }
}

export default Hoc()(Home);