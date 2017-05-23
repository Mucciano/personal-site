import React from 'react';
import image from '../../data/images/takeshape-post.png';

function Post(){
    return(
        <div className='postBody'>
            <h1 className="postTitle">
              TakeShape CMS - Content As a Service
            </h1>
            <img src={image} alt="" className='postHero'/>
            <div className='postText'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cumque deleniti eaque et fuga incidunt, quis repellendus sequi unde ut. Dolorum ducimus eveniet, illo non numquam quisquam sapiente tenetur ut! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, harum, quas! Ab ea magnam necessitatibus nobis non nostrum praesentium quisquam quod reiciendis, vero. Consequuntur eum, libero nam neque veniam voluptas?
            </div>
        </div>
    )
}

export default (Post);