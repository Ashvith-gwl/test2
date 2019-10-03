import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Screenhoc from '../../UIPages/Screenhoc';



function Routes() {
  return (
    <BrowserRouter>
      <div className="App">
      <Route exact path={"/screen-interface/:path"} component={Screenhoc} />
      </div>
    </BrowserRouter>
  );
}

export default Routes;