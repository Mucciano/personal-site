import React, { Component } from 'react';
import Header from './modules/header';
import Card from './modules/card/card';
import image from './data/images/avatar.jpg';
import './App.css';

class App extends Component {
    render() {
        const headerImg = '../data/images/avatar.jpg';

        return (
            <div className="App">
                <Header/>
                <Card/>
            </div>
        );
    }
}

export default App;
