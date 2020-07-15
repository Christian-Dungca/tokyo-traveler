import React from "react";
import allArticles from "./allArticles";
import "./Articles.scss";

const Articles = () => {
  let articleNumber = 0;
  return (
    <React.Fragment>
      <div className="Articles">
        {allArticles.map((article) => {
          // counter for dynamically adding classes names
          articleNumber += 1;
          // styling for each box
          let boxStyles = {
            backgroundImage: `url(${article.imageUrl})`,
            backgroundPosition: `${article.imagePosition}`,
            backgroundSize: "cover",
          };
          // returns box representing each article
          return (
            <div className={`box box--${articleNumber}`}>
              <div className="box__text-container">
                <h2>{article.title}</h2>
              </div>
              <div className="box__img-container" style={boxStyles}></div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
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
