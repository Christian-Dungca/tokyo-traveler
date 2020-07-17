import React, { Fragment, useRef } from "react";
import allArticles from "./allArticles";
import "./Articles.scss";

const Articles = () => {
  // Variables for slider
  const sliderRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    const slider = sliderRef.current;

    slider.classList.add("active");
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;

    console.log(slider, isDown, startX, scrollLeft);
  };

  const handleMouseUpLeave = (e) => {
    const slider = sliderRef.current;
    isDown = false;
    slider.classList.remove("active");
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault(); 

    const slider = sliderRef.current;
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
  }

  return (
    <Fragment>
      <div className="Articles">
        <div
          className="slider"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUpLeave}
          onMouseMove={handleMouseMove}
          ref={sliderRef}
        >
          <div className="article-box">
            <div className="article-box__overlay">
              <div className="article-box__title"> When is the best time to visit Japan?</div>
              <div className="article-box__description"> Each season will add different uniqueness to your trip. Learn what time of the year is best for you visit.</div>
            </div>
          </div>
          <div className="article-box">
            <div className="article-box__overlay">
              <div className="article-box__title"> When is the best time to visit Japan?</div>
              <div className="article-box__description"> Each season will add different uniqueness to your trip. Learn what time of the year is best for you visit.</div>
            </div>
          </div>
          <div className="article-box">
            <div className="article-box__overlay">
              <div className="article-box__title"> When is the best time to visit Japan?</div>
              <div className="article-box__description"> Each season will add different uniqueness to your trip. Learn what time of the year is best for you visit.</div>
            </div>
          </div>
          <div className="article-box">
            <div className="article-box__overlay">
              <div className="article-box__title"> When is the best time to visit Japan?</div>
              <div className="article-box__description"> Each season will add different uniqueness to your trip. Learn what time of the year is best for you visit.</div>
            </div>
          </div>

        </div>
      </div>
    </Fragment>
  );
};

export default Articles;
