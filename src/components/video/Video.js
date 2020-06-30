import React from "react";
import japanVideo from "../../assets/japan.mp4";
import "./video.scss";

const Video = (props) => {
  return (
    <div className="video-wrapper">
      {/* creates a grey effect over video */}
      <div className="overlay"></div>
      {/* video element */}
      <video
        className="video-container"
        autoPlay={props.autoPlay}
        muted={props.muted}
        loop={props.loop}
      >
        <source src={japanVideo} />
      </video>
    </div>
  );
};

export default Video;
