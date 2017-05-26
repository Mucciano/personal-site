import React from 'react';
import image from '../../data/images/takeshapeTwo.png';
import CardHeader from './card-header'
import './card.css';

function Card(){
    return(
        <div className="cardBody">
            <div className="cardContainer row">
                <CardHeader/>
                <img className='cardImg ten columns offset-by-one' src={image} alt=""/>

                <div className="cardText row">
                    <h3 className='six columns offset-by-one'>TakeShape CMS</h3>
                    <h4 className="ten columns offset-by-one">August, 2016 - Present React, takeshape- client takeshape-api takeshape-ssg</h4>
                </div>
            </div>
        </div>
    )
}

export default (Card);