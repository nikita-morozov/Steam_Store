import React from 'react';
import './Store.css';
import SteamHeader from '../../components/SteamHeader/SteamHeader.js';
import StoreHeader from '../../components/StoreHeader/StoreHeader.js';
import Carousel from '../../components/Carousel/Carousel.js';
import SpecialOffers from '../../components/CarouselSpecialOffers/SpecialOffers.js';
import StoreTabs from '../../components/StoreTabs/StoreTabs';
import dbs from '../../dbs.json';

class Store extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      database: dbs,
      cartAdder: this.props.cartAdder,
      wishlistAdder: this.props.wishlistAdder
    }
  }


  render() {
    return (
      <div>
        <SteamHeader />
        <StoreHeader />
        <div className='body' id="test">
          {/* games={dbs} */}
          <Carousel cartAdder={this.props.cartAdder} wishlistAdder={this.props.wishlistAdder} />
          <SpecialOffers cartAdder={this.props.cartAdder} wishlistAdder={this.props.wishlistAdder} />
          <div id="grid">
            <div id="gridContainer">
              <StoreTabs cartAdder={this.props.cartAdder} wishlistAdder={this.props.wishlistAdder}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Store;
