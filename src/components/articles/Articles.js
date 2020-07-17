import React, {Fragment} from "react";
import allArticles from "./allArticles";
import "./Articles.scss";

const Articles = () => {
  return (
    <Fragment>
      {/* main container for articles */}
      <div className="Articles">
        <h2 className="Articles__title"> Discover Articles </h2>
        {/* a container that will contain two article components */}
        <div className="article-container">

          {/* an article component with 2 direct children: img & text */}
          <div className="article-container__article">
            <div className="article-container__article-img"></div>
            <div className="article-container__article-text">
              <h4> Prior Trip </h4>
              <h3> Deciding on your travel dates</h3>
              <p> Each season of Japan offers their own unique touch to the culture. Which Season are you planning to come in?</p>
            </div>
          </div>

          {/* an article component with 2 direct children: img & text */}
          <div className="article-container__article">
            <div className="article-container__article-img"></div>
            <div className="article-container__article-text">
              <h4> Prior Trip </h4>
              <h3> Deciding on your travel dates</h3>
              <p> Each season of Japan offers their own unique touch to the culture. Which Season are you planning to come in?</p>
            </div>
          </div>

        </div>
        <div className="article-container">

          {/* an article component with 2 direct children: img & text */}
          <div className="article-container__article">
            <div className="article-container__article-img"></div>
            <div className="article-container__article-text">
              <h4> Prior Trip </h4>
              <h3> Deciding on your travel dates</h3>
              <p> Each season of Japan offers their own unique touch to the culture. Which Season are you planning to come in?</p>
            </div>
          </div>

          {/* an article component with 2 direct children: img & text */}
          <div className="article-container__article">
            <div className="article-container__article-img"></div>
            <div className="article-container__article-text">
              <h4> Prior Trip </h4>
              <h3> Deciding on your travel dates</h3>
              <p> Each season of Japan offers their own unique touch to the culture. Which Season are you planning to come in?</p>
            </div>
          </div>

        </div>
        <div className="article-container">

          {/* an article component with 2 direct children: img & text */}
          <div className="article-container__article">
            <div className="article-container__article-img"></div>
            <div className="article-container__article-text">
              <h4> Prior Trip </h4>
              <h3> Deciding on your travel dates</h3>
              <p> Each season of Japan offers their own unique touch to the culture. Which Season are you planning to come in?</p>
            </div>
          </div>

          {/* an article component with 2 direct children: img & text */}
          <div className="article-container__article">
            <div className="article-container__article-img"></div>
            <div className="article-container__article-text">
              <h4> Prior Trip </h4>
              <h3> Deciding on your travel dates</h3>
              <p> Each season of Japan offers their own unique touch to the culture. Which Season are you planning to come in?</p>
            </div>
          </div>

        </div>
      </div>
    </Fragment>
  )
}

// const Articles = () => {
//   let articleNumber = 0;
//   return (
//     <React.Fragment>
//       <div className="Articles">
//         {/* <div className="Articles__article box--1"></div>
//       <div className="Articles__article box--2"></div>
//       <div className="Articles__article box--3"></div>
//     <div className="Articles__article box--4"></div> */}

//         {allArticles.map((article) => {
//           // counter for dynamically adding classes names
//           articleNumber += 1;
//           // styling for each box
//           let boxStyles = {
//             backgroundImage: `url(${article.imageUrl})`,
//             backgroundPosition: `${article.imagePosition}`,
//             backgroundSize: "cover",
//           };
//           // returns box representing each article
//           return (
//             <div className={`box box--${articleNumber}`} style={boxStyles}>
//               <div className="box__overlay">
//                 <div className="box__title">{article.title}</div>
//                 {/* <div className="box__description">Deciding on you travel date can be the hardest thing! Everyone wants travel during that perfect time. We're here to help! </div> */}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </React.Fragment>
//   );
// };

export default Articles;
