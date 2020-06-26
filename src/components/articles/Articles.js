import React from "react";
import allArticles from "./allArticles";
import "./Articles.scss";

const Articles = () => {
  return (
    <div className="Articles">
      {/* <div className="articles-container">
        {allArticles.map((article) => {
          const articleStyle = {
            backgroundImage: `url(${article.imageUrl})`,
            backgroundPosition: `${article.imagePosition}`,
            backgroundSize: 'cover'
          }; 

          const articleShortDescription = article.content.toString().substring(0, 80);

          return (
            <div className="article-container"> 
              <div className="article__img" style={articleStyle}></div>
              <div className="article-text-container">
                <h3 className="article-text-container__title">
                  {article.title}-
                </h3>
                <p className="article-text-container__description">
                  {articleShortDescription}...
                </p>
              </div>
            </div>
          );
        })}
      </div> */}
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
