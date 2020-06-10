import React from "react";
import "./Articles.scss";
import allArticles from "./allArticles";
import Article from "../article/Article";
import Navigation from "../navigation/Navigation";

class Articles extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <div className="motto-section">
          <span className="motto-section__line--1">A simple</span>
          <span className="motto-section__line--1">Travel guide</span>
          <span className="motto-section__line--1">For future</span>
          <span className="motto-section__line--1">travelers</span>
        </div>
      </React.Fragment>
    );
  }
}

export default Articles;



{/* 

  //? code that renders each article from all articles file
  
  <div className="Articles">
  {allArticles.map((article) => {
    return <Article title={article.title} content={article.content} />;
  })}
</div> */}