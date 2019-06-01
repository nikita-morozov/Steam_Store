import React, { Component } from 'react';
import './index.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Store from './pages/store/Store';
import Tester from './pages/Tester'
import Listing from './pages/Listing/Listing'
import DownloadClient from './pages/DownloadClient'
import Notfound from './pages/Notfound';

class App extends Component {

    constructor(props) {
        super(props);

        this.cartAdder = this.cartAdder.bind(this)

        this.state = {
            cartItems: [],
            wishItems: []
        }
    }

    cartAdder() {
        var arr = this.state.cartItems
        arr.push(window.location.href.substring(window.location.href.lastIndexOf('/') + 1))
        this.setState({
            cartItems: arr
        });
    }

    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <div>
                    <Switch>
                        <Route exact path="/" component={Store} />
                        <Route path="/test" component={Tester} />
                        <Route path="/clientdl" component={DownloadClient} />
                        <Route path="/listing*" render={(props) => <Listing {...props} cartAdder={this.cartAdder} />} />
                        
                        {/* DONT TOUCH THIS ONE, IT MUST STAY AT THE BOTTOM OF THE LIST */}
                        <Route path="*" component={Notfound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;