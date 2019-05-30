import React from 'react';
import './Store.css';
import SteamHeader from '../../components/SteamHeader/SteamHeader.js';
import StoreHeader from '../../components/StoreHeader/StoreHeader.js';
import Carousel from '../../components/Carousel/Carousel.js';
import SpecialOffers from '../../components/CarouselSpecialOffers/SpecialOffers.js';
import StoreTabs from '../../components/StoreTabs/StoreTabs';
import {bdb} from '../../db.js';

class Store extends React.Component {
  constructor() {
    super();
    this.state = {
      database: bdb
    }
  }
  

  render() {
    return (
      <div>
        <SteamHeader />
        <StoreHeader />
        <div class='body' id="test">
          <Carousel games={bdb} />
          <SpecialOffers />
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
