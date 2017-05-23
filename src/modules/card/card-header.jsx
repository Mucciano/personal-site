import React from 'react';
import CloudIcon from '../../data/icons/cloud-app.jsx';
import './card-header.css';

function CardHeader(){
    return(
        <div className='cardHeaderBody'>
            <div className='cardHeaderIcon'>
                <CloudIcon/>
            </div>
            <span>Web Application: React - GraphQL - AWS Lamda</span>
        </div>
    )
}

export default (CardHeader);
