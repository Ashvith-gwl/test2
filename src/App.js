import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
// import Home from './component/Home'
// import Register from './component/Register'

import Routes from './UIComponents/Allcomponents/Routes/Routes'

function App() {
  return (
    // <BrowserRouter>
    //   <div className="App">
    //     <Route exact path="/" component={Home} />
    //     <Route path="/register" component={Register} />
    //   </div>
    // </BrowserRouter>
    
    <div>    
    <Routes />
    </div>
  );
}

export default App;
