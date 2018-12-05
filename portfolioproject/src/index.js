import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter} from 'react-router-dom'

var http = require("http");
setInterval(function() {
    http.get("mgoldfi1.herokuapp.com");
}, 100000);

ReactDOM.render(
 <BrowserRouter>
    <App />
 </BrowserRouter>
    
    ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
