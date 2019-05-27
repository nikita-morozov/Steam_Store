import React from 'react';
import './Store.css';
import SteamHeader from '../../components/SteamHeader/SteamHeader.js';
import StoreHeader from '../../components/StoreHeader/StoreHeader.js';
import Carousel from '../../components/Carousel/Carousel.js';
import SpecialOffers from '../../components/CarouselSpecialOffers/SpecialOffers.js';
import StoreTabs from '../../components/StoreTabs/StoreTabs';

class Store extends React.Component {
  constructor() {
    super();
    this.state = {
      yourStoreOptions: [
        {
          name: 'Recently Viewed',
          id: 'a1',
          key: 'yourstore'
        },
        {
          name: 'Steam Curators',
          id: 'a2',
          key: 'yourstore'
        },
        {
          name: 'Recently Updated',
          id: 'a3',
          key: 'yourstore'
        }
      ]
    }
  }
  

  render() {
    return (
      <div>
        <SteamHeader />
        <StoreHeader />
        <div id="navbar">Navbar</div>
        <div class='body' id="test">
          <Carousel />
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
