import React, { Component } from 'react';
import Header from '../modules/header/header';
import Cards from '../modules/cards/cards';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <Cards/>
            </div>

        );
    }
}

export default App;
