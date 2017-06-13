import React, {Component} from 'react';
import Card from '../card/card';
import {appData} from '../../data/app-data.js';
import Header from '../header/header'
import VisibiltySensor from 'react-visibility-sensor'
import PostHeader from '../post/post-header';
import Sticky from 'react-stickynode';


export default class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {head: 'none'};
    }
    onChange = (isVisible) => {
        let display = isVisible ? 'none' : 'flex';
        if (this.state.head !== display) {
            this.setState({head: display})
        }
    };

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
            <div className="">
                <div className="container">
                    <VisibiltySensor
                        onChange={this.onChange}
                        partialVisibility={true}
                    >
                        <Header/>
                    </VisibiltySensor>
                </div>

                <Sticky enabled={true} innerZ={99}>
                    <PostHeader display={this.state.head}/>
                </Sticky>
                {cards}
            </div>
        )
    }
}