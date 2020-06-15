import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import "./navBtn.scss";

const NavBtn = ({ open, setOpen }) => {
  const navBtnTop = useRef(null);
  const navBtnBottom = useRef(null);
  const navBtnContainer = useRef(null);
  const tl = gsap.timeline({paused: true});

  useEffect(() => {
    if (open) {
      tl.fromTo(navBtnTop.current, {rotate: 0, top: 0},{
        rotate: -270,
        duration: 0.5,
        top: "50%",
        // backgroundColor: "white"
      }).fromTo(
        navBtnBottom.current, {rotate: 0, top: 0},
        {
          rotate: 360,
          duration: 0.5,
          top: "40%",
          // backgroundColor: "white"
        },
        "<"
      )
      .reversed(true)
      .play();
      console.log(open);
    } else if (open === false) {
      tl.reverse();
    }
  });

  return (
    <div
      className="btn-container"
      ref={navBtnContainer}
      open={open}
      onClick={() => setOpen(!open)}
    >
      <div className="nav-btn--top" ref={navBtnTop}></div>
      <div className="nav-btn--bottom" ref={navBtnBottom}></div>
    </div>
  );
};
export default NavBtn;
