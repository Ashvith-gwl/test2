import React,{Component} from "react";

import Navbar from '../UIComponents/Allcomponents/Navbar/Navbar'

const Hoc =(config) => Component => {
// console.log(config,"hoc");
class HocComponent extends Component{

    constructor(props) {
        super(props)

        this.state = {
           
            value1:{}
        }
    }


    handleChange = (event) => {
        let {value1}=this.state;
        const { name, value } = event.target
        // console.log(name,value);
        this.setState({
            value1 :{
                ...value1,
                [name]: value,
            }
        })
        // console.log(this.state.value1,"ans");
    }

    submitfield = (e) => {
        e.preventDefault();
        console.log(this.state.value1)
        // this.props.onFlexiSubmit(this.state)
    }

    render(){

        // const {flexConfigForHome,flexConfigForRegistration} = this.state;
        
       
  
    
    return (
        <div >
            <Navbar />
               <Component config={config} handleChange={this.handleChange} submitfield={this.submitfield}
               {...this.props}   />
        </div>
    );
}}
return HocComponent;
}
export default Hoc;