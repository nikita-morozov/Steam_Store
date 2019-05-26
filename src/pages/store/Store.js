import React from 'react';
import './Store.css';
import StoreHeader from '../../components/StoreHeader/StoreHeader.js';
import Carousel from '../../components/Carousel/Carousel.js';
import SpecialOffers from '../../components/CarouselSpecialOffers/SpecialOffers.js';
import Grid from '../../components/Grid/Grid.js';

class Store extends React.Component {
  render() {
    return (
      <div>
        <StoreHeader />
        <div id="navbar">Navbar</div>
        <div class='body' id="test">
          <Carousel />
          <SpecialOffers />
          <div id="grid">
            <Grid />
          </div>
        </div>
      </div>
    );
  }
}

export default Store;
