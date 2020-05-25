import React from "react";
import Video from "../video/Video";
import "./landingPage.scss";
import NavBtn from '../navBtn/NavBtn';

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing">
        <Video autoPlay={true} muted={true} loop={true} />
      </div>
    );
  }
}

export default LandingPage;
