import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Articles from "./components/articles/Articles";

class App extends React.Component {
  render() {
    return (
      <Router>
          <div className="app">
            
          </div>
        <Switch>
          <Route path="/articles">
            <Articles />
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
