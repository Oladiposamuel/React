import React, {useState} from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Bodywithsidebar from './Bodywithsidebar';
import Bodywithoutsidebar from './Bodywithoutsidebar';
import Bodyandsignin from "./Bodyandsignin";
import Electronics from "./Electronics";
import Electandsidebar from "./Electandsidebar";
import Electproduct from "./Electproduct";
import Electproductsidebar from './Electproductsidebar';
import Cart from "./Cart";



function App() {

  return (
    <div className="app">
      <Router>
       
        <Switch>
          <Route exact path="/">
            <Header />
            <Bodywithsidebar />
          </Route>

          <Route path="/Bodywithoutsidebar">
            <Header />
            <Bodywithoutsidebar/>
          </Route>

          <Route exact path="/Bodyandsignin">
            <Header />
            <Bodywithsidebar />
            <Bodyandsignin />
          </Route>

          <Route path="/Electronics">
            <Electronics />
          </Route>

          <Route path="/Electandsidebar">
            <Electandsidebar />
          </Route>

          <Route path="/Electproduct">
            <Electproduct />
          </Route>

          <Route path="/Electproductsidebar">
            <Electproductsidebar />
          </Route>

          <Route path="/Cart">
            <Cart />
          </Route>
        </Switch>

      </Router>
    </div>

  );
}

export default App;
