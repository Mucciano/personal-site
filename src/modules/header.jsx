import React from 'react';
import image from '../data/images/avatar.jpg';
import  './header.css';

function Header(){
    return(
        <div className='headerBody'>
            <div className='headerContainer'>
                <div className='text'>
                    <h1>Nick Palmucci</h1>
                    <h3>Software Developer Brooklyn, New York</h3>
                    <div className='icons'>
                        <a href="">facebook</a>
                        <a href="">gmail</a>
                        <a href="">LinkedIn</a>
                    </div>
                </div>

                <div>
                    <img src={image} className="headerImage" alt=""/>
                </div>
            </div>
        </div>

    )
}

export default (Header);
