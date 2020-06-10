import React from "react";
import allArticles from "./allArticles";
import "./Articles.scss";

const Articles = () => {
  return (
    <div className="Articles">
      {allArticles.map((article) => {
        return (
          <div className="Article">
            <div className="Article__img">
              <h1 className="Article__img__title"> Time </h1>
            </div>
          </div>
        );
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
