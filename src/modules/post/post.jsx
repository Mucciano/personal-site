import React from 'react';
import PostHeader from './post-header';
import image from '../../data/images/takeshape-post.png';
import './post.css';
import {Link} from 'react-router-dom';

function Post(){
    return(
        <div className=''>
            <img src={image} alt="" className='postImg twelve columns'/>
            <div className='six columns offset-by-three'>
                <h1 className="postTitle">
                    TakeShape CMS - Content As a Service
                </h1>
                <div className=''>
                        Most websites are built with content management tools that come from a previous generation of web technology. These systems take tremendous amounts of time and energy to maintain and they trap your data in inflexible formats. Old content management systems sit on a rotting foundation of patches and plugins that are increasingly difficult to maintain. The longer you use them the more they drain development resources.  This technology made sense five to ten years ago but it’s come to the end of its life cycle.

                    Times have changed. Today there is a major paradigm shift underway in how websites are built and deployed. The rapid growth and low cost of cloud computing make it possible to rebuild content management from the bottom up. This time around we can prioritize customization so that there’s no added cost to giving your audience a online experience with a unique look and feel. We can turn content into a service that can be delivered to a wide array of digital channels and devices. Multiple sites should be able to share a back-end with ease and the structure of your content should be infinitely flexible.

                    That’s why we built TakeShape, to deliver on the promise of today’s opportunities in the evolution of web development. We built TakeShape with the philosophy that content is the most valuable part of the online experience so it ought to be a first class feature of our technology.
                    TakeShape gives you a richly featured interface for modeling and editing content. Everything is available immediately from a cloud API and anything can be updated instantly. We also believe in teamwork. TakeShape is built for collaboration with a sophisticated versioning and permission system. Teams can work from anywhere to put fresh content on your site in a flash.

                    You need to try it for yourself. If you’ve ever used a CMS before you’ll see that everything is different now. If you haven’t had to struggle with the relics of the past, there’s no better starting point for an online project than TakeShape.

                </div>
            </div>
        </div>
    )
}

export default (Post);