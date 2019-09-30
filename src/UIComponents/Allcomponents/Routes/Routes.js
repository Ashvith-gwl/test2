import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../../../UIConfig/Screen/Specs/Home'
import Register from '../../../UIConfig/Screen/Specs/Register'


function Routes() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
      </div>
    </BrowserRouter>
  );
}

export default Routes;