import React from 'react';
import Flexi from '../UIComponents/Flexi/Flexi';
import hoc from '../UIhoc/Hoc';

class ScreenInter extends React.Component{
 render(){
   const {config,submitfield,handleChange} =this.props;
   return(
     <Flexi config={config}
             submitfield={submitfield}
             handleChange={handleChange}/>
   );
 }
}

export default hoc()(ScreenInter);