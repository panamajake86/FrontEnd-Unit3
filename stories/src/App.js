import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Stories from "./components/Stories";
import SubmitStories from "./components/SubmitStories";
import Navigation from "./components/Navigation";
import Carousel from "./components/StoriesCarousel";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <h1 className="header">Refugee Stories</h1>
          <div className="nav-links">
            <Navigation />
          </div>
        </nav>
        <Route exact path="/" component={Login} />
        <Route path="/stories" component={Stories} />
        <Route path="/submit" component={SubmitStories} />

        <PrivateRoute exact path="/carousel-stories" component={Carousel} />
      </div>
    </Router>
  );
}

export default App;
