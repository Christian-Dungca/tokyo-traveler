import React, { Fragment, useRef, useEffect } from "react";
import japanVideo from "../../assets/japan.mp4";
import "./video.scss";
import gsap from "gsap";

const Video = (props) => {
  const titleContainer = useRef(null);

  useEffect(() => {
    console.log(titleContainer);
    const tl = gsap.from(
      titleContainer.current,
      { opacity: 0, y: 400, duration: 1, ease: "easeOut"}
    );

    tl.play();
  });

  return (
    <Fragment>
      {/* creates a grey effect over video */}
      <div className="overlay"></div>
      {/* video element */}
      <video
        className="video-container"
        autoPlay={props.autoPlay}
        muted={props.muted}
        loop={props.loop}
      >
        <source src={japanVideo} className="video" />
      </video>
      {/* section for title on video container */}
      <div className="video-title__container" ref={titleContainer}>
        <h1 className="video-title__main"> Tokyo Traveler </h1>
        <h3 className="video-title__sub">
          A Simple Guide On Traveling to Japan
        </h3>
      </div>
    </Fragment>
  );
};

export default Video;
