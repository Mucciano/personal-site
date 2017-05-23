import React from 'react';
import image from '../../data/images/face.png';
import  './header.css';
import FbIcon from '../../data/icons/facebook-box';
import GmailIcon from '../../data/icons/gmail.jsx';
import LinkedInIcon from '../../data/icons/linkedin-box';

function Header(){
    return(
        <div className='headerBody'>
            <div className='headerContainer'>
                <div className='text'>
                    <h1 className='name'>Nick Palmucci</h1>
                    <h3>Software Developer Brooklyn, New York</h3>
                    <div className='icons'>
                        <FbIcon/>
                        <GmailIcon/>
                        <LinkedInIcon/>
                    </div>
                </div>

                <div className='headerImgCont'>
                    <img src={image} className="headerImage" alt=""/>
                </div>
            </div>
        </div>

    )
}

export default (Header);
