import React from 'react';
import image from '../../data/images/takeshape.png';
import CardHeader from './card-header'
import './card.css';

function Card(){
    return(
        <div className="cardBody">
            <div className="cardContainer">
                <CardHeader/>
                <div>
                    <img src={image} alt=""/>
                </div>
                <div className="cardText">
                    <h1>TakeShape CMS</h1>
                    <h4 className="cardSubText">August, 2016 - Present React, takeshape- client takeshape-api takeshape-ssg</h4>
                </div>
            </div>
        </div>
    )
}

export default (Card);