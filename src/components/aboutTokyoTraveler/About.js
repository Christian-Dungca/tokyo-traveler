import React from "react";
import "./about.scss";

class About extends React.Component {
  render() {
    return (
      <div className="about-section">
        <div className="section-text">
          <div className="text-wrapper">
            <h2 className="about-section__title about-section__title--top">
              Before You Continue Reading
            </h2>
            <h2 className="about-section__title about-section__title--bottom">
              What is Tokyo Traveler
            </h2>
            <p className="about-section__paragraph">
              Tokyo Traveler is a simple guide, made by travelers, on how to
              effectively plan your dream trip to Japan! The early stages of
              planning a trip can be exhilarating and have you eager to venture
              out and explore. However, poor planning can lead to a not so fun
              experience. Other travel sites can be too bloated with information
              and the readers can feel overwhelmed, not knowing how to begin
              planning. The goal of this site is to reduce the stress of
              traveling by offering a simple, linear guide full of tips. The
              content is structured so that you read each article sequentially.
            </p>
            <h4 className="about-section__link"> Begin You Journey </h4>
          </div>
        </div>
        <div className="about-section__img-container">
          <div className="about-section__img"></div>
        </div>
      </div>
    );
  }
}

export default About;
