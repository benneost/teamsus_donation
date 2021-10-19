import React from "react";

// We use Route in order to define the different routes of our application
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

// We import all the components we need in our app
import Rewards from "./components/rewards";
import Home from "./components/home";
import Redemption from "./components/redemption";
import Payment from "./components/payment";
import Payment_outcome from "./components/payment_outcome";
import Beneficiary from "./components/beneficiary";
import NavBar from "./components/navbar";
import createCard from "./components/contact";

// To connect to our db
// require('dotenv').config()

// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const connection = require('../../server/database');

// Start here

const App = () => {
  return (
    
    // this portion is to allow the app to route to specific paths
    <BrowserRouter>
      <Route exact path="/">
        <Redirect to='/NavBar'/>
      </Route>

      {/* set the path to which link u want to route to, the component is the function in its respective js file */}
      {/* <Route path='/redemption' component={Redemption}/> */}
      <Route path='/home' component={Home}/>
      <Route path='/payment' component={Payment}/>
      <Route path='/payment_outcome' component={Payment_outcome}/>
      <Route path='/beneficiary' component={Beneficiary}/>
      <Route path='/contact' component={createCard}/>
      <Route path='/rewards' component={Rewards}/>

      <Route path='/NavBar' component={NavBar}/>
    </BrowserRouter>
  );
};

export default App;