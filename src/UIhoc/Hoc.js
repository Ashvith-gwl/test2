import React,{Component} from "react";

import Navbar from '../UIComponents/Allcomponents/Navbar/Navbar'

const Hoc =() => Component => {
class HocComponent extends Component{

        state = {
            value1:{},
            getUrl:false
        }


    handleChange = (event) => {
        let {value1}=this.state;
        const { name, value } = event.target
        this.setState({
            value1 :{
                ...value1,
                [name]: value,
            }
        });
    };

    submitfield = (e) => {
        e.preventDefault();
        console.log(this.state.value1)
    }


    componentDidMount(){
           const {match}=this.props;
           console.log(match);
            const {params}= match;
            const loc = params.path
            console.log(loc);
             let config = require(`../UIConfig/Screen/Specs/${loc}`).default;
             console.log(config,"path");
             this.setState({
               config,
               getUrl:true
             })
             console.log(this.state);
             
      };

    render(){
    return (
        <div >
            <Navbar />
            {this.state.getUrl?
               <Component config={this.state.config} handleChange={this.handleChange} submitfield={this.submitfield}
               {...this.props}   />
               :null}
        </div>
    );
}}
return HocComponent;
}
export default Hoc;