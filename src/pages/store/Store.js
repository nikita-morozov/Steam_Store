import React from 'react';
import './Store.css';
import SteamHeader from '../../components/SteamHeader/SteamHeader.js';
import StoreHeader from '../../components/StoreHeader/StoreHeader.js';
import Carousel from '../../components/Carousel/Carousel.js';
import SpecialOffers from '../../components/CarouselSpecialOffers/SpecialOffers.js';
import StoreTabs from '../../components/StoreTabs/StoreTabs';
import dbs from '../../dbs.json';

class Store extends React.Component {
  constructor() {
    super();
    this.state = {
      database: dbs
    }
  }


  render() {
    return (
      <div>
        <SteamHeader />
        <StoreHeader />
        <div className='body' id="test">
          <Carousel />
          {/*<SpecialOffers />*/}
          <div id="grid">
            <div id="gridContainer">
              <StoreTabs />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Store;
