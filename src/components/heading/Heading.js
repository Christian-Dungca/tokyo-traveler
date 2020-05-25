import React from 'react';
import './Heading.scss';

const Heading = (props) => {

    return (
        <div className="heading">
            <h3 className="heading__sub"> a simple guide for travelers </h3>
            <h1 className="heading__main"> 
                Tokyo Traveler
            </h1>
        </div>
    )
}

export default Heading;