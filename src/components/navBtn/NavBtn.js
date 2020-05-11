import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import "./navBtn.scss";

function NavBtn(props) {
  // setting the "state" of the button
  const [isClicked, onClick] = useState(false);
  // creating a refernce to button DOM element
  const navBtnTop = useRef(null);
  const navBtnBottom = useRef(null);
  const navBtnContainer = useRef(null);
  const tl = gsap.timeline();

  // when component mounts and unmounts change appearance
  useEffect(() => {
    if (isClicked === true) {
      tl.to(navBtnTop.current, {
        rotate: -270,
        duration: 0.5,
        top: '50%',
      }).to(
        navBtnBottom.current,
        {
          rotate: 360,
          duration: 0.5,
          top: '40%', 
        },
        "<"
      );
    } else if (isClicked === false && props.navIsOpen === true) {
      tl.reverse();
    }
  });

  return (
    <div
      className="btn-container"
      onClick={() => onClick(!isClicked)}
      ref={navBtnContainer}
    >
      <div className="nav-btn--top" ref={navBtnTop}></div>
      <div className="nav-btn--bottom" ref={navBtnBottom}></div>
    </div>
  );
}

//  function NavBtn(props) {
//   return (
//     <div className="nav-btn" onClick={() => props.toggleNavBtn}>

//     </div>
//   );
//  }

export default NavBtn;
