import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import App from './app/App';
import Post from './modules/post/post';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/post" component={Post}/>
        </div>
    </Router>,
document.getElementById('root')
);
