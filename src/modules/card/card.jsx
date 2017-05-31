import React from 'react';
// import image from '../../data/images/takeshapeTwo.png';
import CardHeader from './card-header'
import './card.css';
import {Link} from 'react-router-dom'

function Card(data){
    return(
        <div className="cardBody">
            <div className="cardContainer row">
                <CardHeader/>
                <Link to={`/post/${data.postId}`}>Post</Link>
                <img className='cardImg ten columns offset-by-one' src={data.image} alt=""/>

                <div className="cardText row">
                    <h3 className='six columns offset-by-one'>{data.title}</h3>
                    <h4 className="ten columns offset-by-one">{data.body}</h4>
                </div>
            </div>
        </div>
    )
}

export default (Card);
