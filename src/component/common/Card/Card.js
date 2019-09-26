import React,{Component} from "react";
// import Textfield from '../Textfield/Textfield'
// import Radiobtn from '../Radiobtn/Radio'
// import Button from '../Button/Button'
import './card.css'

// function Card(props) {
class Card extends Component{
    render(){
    let data = this.props.data;

    // let type = names.items;
    console.log(data.color)
    let color = data.color

    // console.log(this.props.childern,"text");


    const children = React.Children.map(
        this.props.children,
        child => {
          return <div>{child}</div>
        },
      )
    
    return (
        <div className="card" style={{ color: color}} >
            <div className="cardsinner">
              <h2>{data.label} </h2>  
            {children}
                {/* {type.map((data, index) => {
                    if (data.type == "TextField") {
                        return (
                            <Textfield type={data.props.type} name={data.props.name} label={data.props.label}/>
                        )
                    }
                    if (data.type == "RadioGroup") {
                        return (
                            <Radiobtn  type={data.props.type} name={data.props.name} label={data.props.label} options={data.props.options} />
                        )
                    }
                    if (data.type == "Button") {
                        return (
                            <Button />
                        )
                    }
                })
                } */}
                {/* <h2>I am card component</h2> */}

            </div>
        </div>
    );
}}

export default Card;