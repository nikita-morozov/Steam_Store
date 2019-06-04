import React, { Component } from 'react';
import './index.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Store from './pages/store/Store';
import Tester from './pages/Tester'
import Listing from './pages/Listing/Listing'
import DownloadClient from './pages/DownloadClient'
import Notfound from './pages/Notfound';
import Cart from './components/Cart/Cart.js'

class App extends Component {

    constructor(props) {
        super(props);

        this.cartAdder = this.cartAdder.bind(this)
        this.wishlistAdder = this.wishlistAdder.bind(this)
        this.togglePopup = this.togglePopup.bind(this)

        this.state = {
            cartItems: [],
            wishItems: [],
            cartOpen: false,
            wishlistOpen: false
        }
    }

    cartAdder(id) {
        var arr = this.state.cartItems
        var itemid = ''
        if (id === undefined) {
            itemid = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
        } else {
            itemid = id
        }
        if (!(arr.includes(itemid))) {
            arr.push(itemid)
            this.setState({
                cartItems: arr
            });
        }
    }

    wishlistAdder(id) {
        var arr = this.state.wishItems
        var itemid = ''
        if (id === undefined) {
            itemid = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
        } else {
            itemid = id
        }
        if (!(arr.includes(itemid))) {
            arr.push(itemid)
            this.setState({
                wishItems: arr
            });
        }
    }

    togglePopup() {
        this.setState({
            cartOpen: !this.state.cartOpen
        })
    }

    render() {
        return (
            <div>
            <Router basename={process.env.PUBLIC_URL}>
                <div>
                    <Switch>
                        <Route exact path="/" render={(props) => <Store {...props} cartAdder={this.cartAdder} wishlistAdder={this.wishlistAdder} toggleCart={this.togglePopup}/>} />
                        <Route path="/test" component={Tester} />
                        <Route path="/clientdl" component={DownloadClient} />
                        <Route path="/listing*" render={(props) => <Listing {...props} cartAdder={this.cartAdder} wishlistAdder={this.wishlistAdder} />} />
                        
                        {/* DONT TOUCH THIS ONE, IT MUST STAY AT THE BOTTOM OF THE LIST */}
                        <Route path="*" component={Notfound} />
                    </Switch>
                </div>
            </Router>
            <div>
            {this.state.cartOpen ?  
                <Cart  
                          text='Click "Close Button" to hide popup'  
                          closePopup={this.togglePopup.bind(this)}  
                />  
                : null  
            }
            </div> 
            </div>
        );
    }
}

export default App;