import React from 'react';
import './Article.scss'

const Article = (props) => {
    return (
        <div className="article">
            <h1 className="article__title"> {props.title} </h1>
            { props.content.map(paragraph => <p className="article__paragraph"> {paragraph} </p>)}
        </div>
    )
}

export default Article;

