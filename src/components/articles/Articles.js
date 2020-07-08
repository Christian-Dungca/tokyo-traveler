import React from "react";
import allArticles from "./allArticles";
import "./Articles.scss";

const Articles = () => {
  let articleNumber = 0;
  return (
    <div className="Articles">
      {/* <div className="Articles__article box--1"></div>
      <div className="Articles__article box--2"></div>
      <div className="Articles__article box--3"></div>
      <div className="Articles__article box--4"></div> */}

      {allArticles.map(article => {
        // counter for dynamically adding classes names
        articleNumber += 1;
        // returns box representing each article
        return (
          <div className={`box box--${articleNumber}`}>
            <div className="box__overlay"> 
              <div className="box__title">Choosing Travel Dates</div>
              {/* <div className="box__description">Deciding on you travel date can be the hardest thing! Everyone wants travel during that perfect time. We're here to help! </div> */}
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default Articles;

{
  /* 

  //? code that renders each article from all articles file
  
  <div className="Articles">
  {allArticles.map((article) => {
    return <Article title={article.title} content={article.content} />;
  })}
</div> */
}
