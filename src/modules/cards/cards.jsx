import React, {Component} from 'react';
import Card from '../card/card';
import {appData} from '../../data/app-data.js';


export default class Cards extends Component {

    render() {
        const cards = [];
        for (let i = 0; i< appData.length; i++) {
            const image = appData[i].cardImage;
            const title = appData[i].cardTitle;
            const body = appData[i].cardDetails;
            const postId = appData[i].postId;

            cards[i] = (
                <Card
                    key={i}
                    image={image}
                    title={title}
                    body={body}
                    postId={postId}
                />
        );
    }
        return (
            <ul>
                {cards}
            </ul>
        )
    }
}