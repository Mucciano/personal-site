import React from 'react';
import PostHeader from './post-header';
import './post.css';
import {Link} from 'react-router-dom';
import {appData} from '../../data/app-data';

function parseId(string) {
    const matchExpression = new RegExp('[^/]+$');
    const match = matchExpression.exec(string)[0];
    return match ? parseInt(match) : 0;
}

function Post(){
    const index = parseId(location.pathname);
    const data = appData[index];

    return(
        <div>
            <img src={data.postImage} alt="" className='postImg twelve columns'/>
            <div className='six columns offset-by-three'>
                <h1 className="postTitle">
                    {data.postTitle}
                </h1>
                <div>
                    {data.postText}
                </div>
            </div>
        </div>
    )
}

export default (Post);