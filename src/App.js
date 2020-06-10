import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Home from "./components/home/Home";

class App extends React.Component {
  render() {
    return (
      <Router>
          <div className="app">
            
          </div>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
