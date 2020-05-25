import React from "react";
import Video from "../video/Video";
import Heading from "../heading/Heading";
import "./landingPage.scss";

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing">
        <Heading />
        <Video autoPlay={true} muted={true} loop={true} />
      </div>
    );
  }
}

export default LandingPage;
