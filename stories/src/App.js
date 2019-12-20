import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";

function App() {
  return (
    <Router>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path='/portal' component={Admin} />
        <Route path='/aboutus' component={AboutUs} />
        <Route path='/stories' component={Stories} />
        <Route path='/submit' component={Submit} />
    </Router>
  );
}

export default App;
