import React from 'react';
import './Articles.scss';
import allArticles from './allArticles';
import Article from '../article/Article';

class Articles extends React.Component {
    render() {
        return (
            <div className="Articles">
                {allArticles.map((article) => {
                   return (<h1> hello world </h1>)
                })}
            </div>
        )
    }
}

export default Articles;