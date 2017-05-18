import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {appData} from './data/app-data';

ReactDOM.render(
  <App appData={appData}/>,
  document.getElementById('root')
);
