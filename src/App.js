import React from "react";
import Header from "./components/header/Header";
import About from "./components/aboutTokyoTraveler/About";
import Articles from "./components/articles/Articles";
import AboutBudget from "./components/aboutBudgetApp/AboutBudget";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navIsOpen: false };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav = () => {
    this.setState((prevState) => ({
      navIsOpen: !prevState.navIsOpen,
    }));
  };

  render() {
    return (
      <div className="app">
        <Header navIsOpen={this.state.navIsOpen} toggleNav={this.toggleNav} />
        <About />
        <Articles />
        <AboutBudget />
      </div>
    );
  }
}

export default App;
