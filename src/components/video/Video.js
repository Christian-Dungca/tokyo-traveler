import React, { Fragment } from "react";
import japanVideo from "../../assets/japan.mp4";
import "./video.scss";

const Video = (props) => {
  return (
    <React.Fragment>
      <div className="overlay"></div>
      <video
        className="video-container"
        autoPlay={props.autoPlay}
        muted={props.muted}
        loop={props.loop}
      >
        <source src={japanVideo} className="video" />
      </video>
    </React.Fragment>
  );
};

export default Video;
