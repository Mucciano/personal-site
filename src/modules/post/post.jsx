import React from 'react';
import PostHeader from './post-header';
import './post.css';
import {appData} from '../../data/app-data';
import Sticky from 'react-stickynode';

function parseUrl(string) {
    let array = string.split('/');
    const id = array.pop();
    const type = array.pop();
     return {
         type: type,
         id: id
     }
}

function Post(){
    const {type, id} = parseUrl(location.pathname);
    const post = appData[type];
    const data = post[id];

    return(
        <div>
            <Sticky enabled={true}>
                <PostHeader show={true}/>
            </Sticky>
            <div className="postBody container">
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
        </div>

    )
}

export default (Post);