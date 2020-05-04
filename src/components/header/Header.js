import React from "react";
import Video from "../video/Video";
import "./header.scss";
import NavBtn from '../navBtn/NavBtn';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        {/* navigation container */}
        <nav className="nav">
          <h1 className="nav__title"> Tokyo Traveler </h1>
          
          <NavBtn className="menu" />
        </nav>
        {/* section for video */}
        <div className="header__video-container">
            <Video autoPlay={true} muted={true} loop={true}/>
        </div>
      </div>
    );
  }
}

export default Header;
