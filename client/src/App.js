import React from "react";

// We use Route in order to define the different routes of our application
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Edit from "./components/edit";
import Rewards from "./components/rewards";
import Redemption from "./components/redemption";
import Home from "./components/home";

const App = () => {
  return (

    // this portion is to allow the app to route to specific paths
    <BrowserRouter>
      <Route exact path="/">
        <Redirect to='/home'/>
      </Route>

      {/* set the path to which link u want to route to, the component is the function in its respective js file */}
      {/* <Route path='/redemption' component={Redemption}/> */}
      
      <Route path='/rewards' component={Rewards}/>

      <Route path='/home' component={Home}/>
    </BrowserRouter>

    
  );
};

export default App;