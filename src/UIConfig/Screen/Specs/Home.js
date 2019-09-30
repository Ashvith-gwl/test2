import React, { Component } from "react";
import Hoc from '../../../UIhoc/Hoc';
import Flexi from '../../../UIComponents/Flexi/Flexi';



const  flexConfigForHome= {
  items: [
      {
          type: "Card",
          props: {
              label: "Good work labs",
              horozintalAlign: "left"
          }
      },
      {
          type: "Header",
          props: {
              label: "Technology",
              horozintalAlign: "left"
          }
      },
      {
          type: "Card",
          props: {
              color: "grey"
          },
          children: {
              items: [
                  {
                      type: "Cards",
                      props: {
                          cards: [
                              {
                                  label: "Java",
                                  horizontalAlign: "center",
                                  verticalAlign: "center",
                                  color: "orange"
                              },
                              {
                                  label: "React",
                                  horizontalAlign: "center",
                                  verticalAlign: "center",
                                  color: "blue"
                              },
                              {
                                  label: "Node",
                                  horizontalAlign: "center",
                                  verticalAlign: "center",
                                  color: "pink"
                              },
                          ]
                      }
                  }
              ]
          }
      },
      {
          type: "Header",
          props: {
              label: "Drop Message",
              horozintalAlign: "left"
          }
      },
      {
          type: "Card",
          props: {
              color: "grey",
              horizontalAlign: "center",
              verticalAlign: "center"
          },
          children: {
              items: [
                  {
                      type: "TextField",
                      props: {
                          inputType: "text",
                          label: "Name",
                          name: "name"
                      }
                  },
                  {
                      type: "TextField",
                      props: {
                          inputType: "email",
                          label: "Email",
                          name: "email"
                      }
                  },
                  {
                      type: "TextField",
                      props: {
                          inputType: "number",
                          label: "Mobile",
                          name: "Message"
                      }
                  },
                  {
                      type: "Button",
                      props: {
                          label: "Submit"
                      }
                  }
              ]
          }
      }
  ]
}


class Home extends Component {

 render(){
const {config, handleChange,submitfield}=this.props;
// console.log(config.items,"home");

   return(
<div>
 
  <Flexi items={config.items}  handleChange={handleChange} submitfield={submitfield} />
</div>
   );
 }
}

export default Hoc(flexConfigForHome)(Home);