import React from 'react';
import image from '../../data/images/post-header-face.jpg';

function PostHeader(){
    return(
        <div className='postHeaderBody'>
            <img src={image} alt="" className='postHeaderImg'/>
            <div className='postHeaderText'>
                <h3>Nick Palmucci</h3>
                <p>Coder, Thinker</p>
                <p>Brooklyn, NY</p>
            </div>
        </div>
    )
}

export default (PostHeader);