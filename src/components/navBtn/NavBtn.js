import React, { useState, useEffect } from "react";
import gsap from "gsap";
import "./navBtn.scss";

function NavBtn() {
  const [isClicked, onClick] = useState(false);


//   useEffect(() => {
//       tl = gsap.timeline;

//       tl.to()
//   })

  return (
    <div className="nav-btn" 
        onClick={() => onClick(!isClicked)}>
    </div>
    );
}

export default NavBtn;
