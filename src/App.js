import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './component/Home'
import Register from './component/Register'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
      </div>
    </BrowserRouter>
  );
}

export default App;
