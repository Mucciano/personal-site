import React from 'react';
import image from '../../data/images/takeshape.png';
import './card.css';

function Card(){
    return(
        <div className="cardBody">
            <div className="cardContainer">
                <div>
                    <img src={image} alt=""/>
                </div>
                <div>
                    <h1>TakeShape CMS</h1>
                </div>
            </div>
        </div>
    )
}

export default (Card);