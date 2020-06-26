import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Home from "./components/home/Home";
import './App.scss';

class App extends React.Component {  
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
