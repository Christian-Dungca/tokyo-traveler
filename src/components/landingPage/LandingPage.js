import React from "react";
import Video from "../video/Video";
import "./landingPage.scss";

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing">
        <div className="heading-container">
          <h1 className="heading__title">
            Tokyo Travele<span className="heading__title--last-char">r</span>
          </h1>
          <div className="heading__subtitle">a simple travel guide</div>
        </div>
        <Video autoPlay={true} muted={true} loop={true} />
      </div>
    );
  }
}

export default LandingPage;
