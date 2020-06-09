import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Articles from "./components/articles/Articles";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Link to="/articles">
          <div className="app">
            {/* <LandingPage /> */}
            {/* <Articles /> */}
          </div>
        </Link>
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
