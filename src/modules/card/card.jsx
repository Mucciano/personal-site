import React from 'react';
import CardHeader from './card-header'
import './card.css';
import {Link} from 'react-router-dom'

function Card(data){
    return(
        <div className="cardBody">
            <div className="cardContainer row">
                <CardHeader/>

                <img className='cardImg ten columns offset-by-one' src={data.image} alt=""/>
                <Link to={`/post/${data.postId}`}>
                    <div className="cardText row">
                        <h3 className='six columns offset-by-one'>{data.title}</h3>
                        <h4 className="ten columns offset-by-one">{data.body}</h4>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default (Card);
