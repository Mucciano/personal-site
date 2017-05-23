import React, { Component } from 'react';
import Header from './modules/header/header';
import Card from './modules/card/card';
import './App.css';

class App extends Component {
     render() {
        return (
            <div className="App">
                <Header/>
                <Card/>
            </div>
        );
    }
}

export default App;
