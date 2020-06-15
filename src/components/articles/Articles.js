import React from "react";
import allArticles from "./allArticles";
import "./Articles.scss";

const Articles = () => {
  return (
    <div className="Articles">
      <div className="articles-container">
        {allArticles.map((article) => {
          const backgroundImage = {
            backgroundImage: `url(${article.imageUrl})`,
            backgroundPosition: `${article.imagePosition}`,
          };

          return (
            <div className="article__image" style={backgroundImage}>
              {article.titleColor === "white" ? (
                <h1 className="article__heading article__heading--white">
                  {article.title}
                </h1>
              ) : (
                <h1 className="article__heading article__heading--black">
                  {article.title}
                </h1>
              )}
            </div>
          );
        })}
      </div>
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
