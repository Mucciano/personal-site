import React, { Component } from 'react';
import image from '../../data/images/face.png';
import  './header.css';
import FbIcon from '../../data/icons/facebook-box';
import GmailIcon from '../../data/icons/gmail.jsx';
import LinkedInIcon from '../../data/icons/linkedin-box';

export default class Header extends Component {
    render() {
        return(
            <div className='headerBody'>
                <div className='headerContainer row'>
                    <div className='text five columns offset-by-two'>
                        <h3 className='name'>Nick Palmucci</h3>
                        <h5>Software Developer Brooklyn, New York</h5>
                        <div className='icons'>
                            <FbIcon/>
                            <GmailIcon/>
                            <LinkedInIcon/>
                        </div>
                    </div>

                    <div className='headerImgCont three columns'>
                        <img src={image} className="headerImage" alt=""/>
                    </div>
                </div>
            </div>

        )
    }
}
