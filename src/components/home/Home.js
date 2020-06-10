import React from "react";
import "./Home.scss";
import Navigation from "../navigation/Navigation";
import Articles from '../articles/Articles';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <div className="motto-section">
          <span className="motto-section__line--1">A simple</span>
          <span className="motto-section__line--1">Travel guide</span>
          <span className="motto-section__line--1">For future</span>
          <span className="motto-section__line--1">travelers</span>
        </div>

        <div className="overview-section">
          <h3 className="overview-section__title"> Overview </h3>
          <p className="overview-section__text"> 
          Tokyo Traveler is a simple guide, made by travelers, to help you plan your dream trip to Japan effectively! The early stages of planning a trip can be exhilarating and have you eager to venture out and explore. However, poor planning can lead to a not so fun experience. The goal of this site is to reduce the stress of traveling by offering a simple, linear guide full of helpful tips. The content is structured so that you read each article sequentially. 
          </p>
        </div>

        <Articles />
      </React.Fragment>
    );
  }
}

export default Home;



