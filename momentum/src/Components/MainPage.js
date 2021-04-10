import React from 'react';
import Clock from './Clock';
import BigMessage from './BigMessage';
import Focus from './Focus';

const MainPage = () => {
    return (
        <div className="center-container">
            <div className="center-wrapper">
                <Clock />
                <BigMessage />
                <Focus />
            </div>
        </div>
    )
}

export default MainPage;