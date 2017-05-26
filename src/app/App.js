import React, { Component } from 'react';
import Header from '../modules/header/header';
import Card from '../modules/card/card';


class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Card/>
            </div>

        );
    }
}

export default App;
