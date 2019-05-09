import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Store from './pages/store/Store';
import Tester from './pages/Tester'
import DownloadClient from './pages/DownloadClient'
import Notfound from './pages/Notfound';
import * as serviceWorker from './serviceWorker';


const routing = (
    <Router>
        <div>
            <Route exact path="/" component={Store} />
            <Route path="/test" component={Tester} />
            <Route path="/clientdl" component={DownloadClient} />
            
            {/* DONT TOUCH THIS ONE, IT MUST STAY AT THE BOTTOM OF THE LIST */}
            <Route component={Notfound} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();
