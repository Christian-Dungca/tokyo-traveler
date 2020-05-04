import React from 'react';
import './header.scss';

class Header extends React.Component {

    render() {

        return (
            <div className="header">
                <nav className="nav">
                    <h1> Tokyo Traveler </h1>
                    <button> menu </button>
                </nav>
                <video>

                </video>
            </div>
        );
    }
}

export default Header;