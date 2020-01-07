import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import { axiosWithAuth } from './axiosWithAuth';
import { PubContext } from './contexts/PubStories';

function App() {
  const { pub, setPub } = useState({});

  useEffect(() => {
    axiosWithAuth()
      .get('')
      .then(res => setPub(res.data))
      .catch(err => console.log(err.message));
  });

  return (
    <PubContext.Provider value={pub}>
      <Router>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path='/portal' component={Admin} />
        <Route path='/aboutus' component={AboutUs} />
        <Route path='/stories' component={Stories} />
        <Route path='/submit' component={Submit} />
      </Router>
    </PubContext.Provider>
  );
}

export default App;
