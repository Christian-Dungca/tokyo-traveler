import React from "react";
import LandingPage from "./components/landingPage/LandingPage";
import Articles from './components/articles/Articles';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        {/* <LandingPage /> */}
        <Articles />
      </div>
    );
  }
}

export default App;
