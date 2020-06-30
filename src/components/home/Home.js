import React from "react";
import Navigation from "../navigation/Navigation";
import "./Home.scss";
// import Articles from "../articles/Articles";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <div className="Home">
          <div className="motto-section">
            <span className="motto-section__line--1">A simple</span>
            <span className="motto-section__line--2">Travel guide</span>
            <span className="motto-section__line--3">For future</span>
            <span className="motto-section__line--4">travelers</span>
          </div>

          <div className="overview">
            {/* section to the left */}
            <div className="overview-content">
              {/* top section containing title */}
              <div className="overview-content__title">
                <h2>What is <span> Tokyo Traveler </span> and how can you use it effectively?</h2>
              </div>
              {/* bottom section container image and text */}
              <div className="overview-content__bottom">
                <p className="overview-content__bottom-text">
                  Tokyo Traveler is a simple guide, aiming to help you
                  effectively plan your dream trip to Japan! The early stages of
                  planning a trip can be exhilarating and have you eager to
                  venture out and explore. However, poor planning can lead to an
                  unpleasant experience, and many people can be unsure of how to
                  begin planning. Tokyo Travelers' goal is to lessen the stress
                  of traveling by offering a simple guide full advice that will
                  aid that planning process.
                </p>
              </div>
            </div>
            {/* section to the right */}
            <div className="overview-img-container">
              <div className="overview-img-container__img"></div>
            </div>
          </div>
          {/* <div className="overview-section">
            <h3 className="overview-section__title"> Overview </h3>
            <p className="overview-section__text">
              Tokyo Traveler is a simple guide, made by travelers, to help you
              plan your dream trip to Japan effectively! The early stages of
              planning a trip can be exhilarating and have you eager to venture
              out and explore. However, poor planning can lead to a not so fun
              experience. The goal of this site is to reduce the stress of
              traveling by offering a simple, linear guide full of helpful tips.
              The content is structured so that you read each article
              sequentially.
            </p>
          </div> */}

          <div className="articles">sadfaf</div>
          <div className="footer">adfadfa</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;

// <Navigation />
//         <div className="motto-section">
//           <span className="motto-section__line--1">A simple</span>
//           <span className="motto-section__line--1">Travel guide</span>
//           <span className="motto-section__line--1">For future</span>
//           <span className="motto-section__line--1">travelers</span>
//         </div>

//         <div className="overview-section">
//           <h3 className="overview-section__title"> Overview </h3>
//           <p className="overview-section__text">
//           Tokyo Traveler is a simple guide, made by travelers, to help you plan your dream trip to Japan effectively! The early stages of planning a trip can be exhilarating and have you eager to venture out and explore. However, poor planning can lead to a not so fun experience. The goal of this site is to reduce the stress of traveling by offering a simple, linear guide full of helpful tips. The content is structured so that you read each article sequentially.
//           </p>
//         </div>
