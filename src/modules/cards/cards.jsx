import React, {Component} from 'react';
import Card from '../card/card';
import {appData} from '../../data/app-data.js';
import Header from '../header/header'
import VisibiltySensor from 'react-visibility-sensor'
import PostHeader from '../post/post-header';
import Sticky from 'react-stickynode';
import CardTypes from './cards-nav';

export default class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            cardType: 'code'
        };
    }

    onChange = (isVisible) => {
        if (isVisible === false && this.state.show === false) {
            this.setState({show: true})
        } else if (isVisible === true && this.state.show === true) {
            this.setState({show: false})
        }
    };

    handleChangeToCode = () => {
        if (this.state.cardType !== 'code') {
            this.setState({cardType: 'code'});
        }
    };

    handleChangeToBlog = () => {
        if (this.state.cardType !== 'blog') {
            this.setState({cardType: 'blog'});
        }
    };




    render() {
        const cards = [];
        const cardData = appData[this.state.cardType];
        const show = this.onChange;
        for (let i = 0; i< cardData.length; i++) {
            const image = cardData[i].cardImage;
            const title = cardData[i].cardTitle;
            const body = cardData[i].cardDetails;
            const postId = cardData[i].postId;

            cards[i] = (
                <Card
                    key={i}
                    image={image}
                    title={title}
                    body={body}
                    postId={postId}
                    type={this.state.cardType}
                />
            );
        }

        return (
            <div>

                <Sticky enabled={true} innerZ={99}>
                    <PostHeader show={this.state.show}/>
                </Sticky>

                <div className="container">
                    <VisibiltySensor
                        onChange={this.onChange}
                        partialVisibility={true}
                    >
                        <Header/>
                    </VisibiltySensor>
                    <CardTypes
                        code={this.handleChangeToCode}
                        blog={this.handleChangeToBlog}
                        cardType={this.state.cardType}
                    />
                </div>
                {cards}
            </div>
        )
    }
}