import React, { Component } from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Store from './pages/store/Store';
import Tester from './pages/Tester'
import Listing from './pages/Listing/Listing'
import DownloadClient from './pages/DownloadClient'
import Notfound from './pages/Notfound';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Store} />
                        <Route path="/test" component={Tester} />
                        <Route path="/clientdl" component={DownloadClient} />
                        <Route path="/listing*" component={Listing} />
                        
                        {/* DONT TOUCH THIS ONE, IT MUST STAY AT THE BOTTOM OF THE LIST */}
                        <Route path="*" component={Notfound} />
                    </Switch>
                </div>
    </Router>
        );
    }
}

export default App;