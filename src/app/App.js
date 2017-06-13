import React, { Component } from 'react';
import Header from '../modules/header/header';
import PostHeader from '../modules/post/post-header'
import Cards from '../modules/cards/cards';
import Sticky from 'react-stickynode';
import VisibiltySensor from 'react-visibility-sensor'
import './App.css';
import  '../modules/post/post.css';


class App extends Component {
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
        return (
            <div className='metaContainer'>
                <div className="container">
                    <VisibiltySensor onChange={this.onChange} partialVisibility={true}>
                        <Header/>
                    </VisibiltySensor>
                </div>
                <Sticky enabled={true} className='stickyHeader'>
                    <PostHeader display={this.state.head}/>
                </Sticky>
                <div className="container zBox">
                    <Cards/>
                </div>
            </div>
        );
    }
}

export default App;
