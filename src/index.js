import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Cards from './modules/cards/cards';
import Post from './modules/post/post';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Cards}/>
            <Route path="/post/:id" component={Post}/>
        </div>
    </Router>,
document.getElementById('root')
);
