import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import ScreenInter from "../../../UIPages/Screenhoc";


function Routes() {
  return (
    <BrowserRouter>
      <div className="App">
      <Route exact path={"/screen-interface/:path"} component={ScreenInter} />
      </div>
    </BrowserRouter>
  );
}

export default Routes;