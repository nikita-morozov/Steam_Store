import React from 'react';
import './Store.css';
import StoreHeader from '../../components/StoreHeader/StoreHeader.js';
import Carousel from '../../components/Carousel/Carousel';

class Store extends React.Component {
  render() {
    return (
      <div>
        <StoreHeader />
        <div class='body' id="test">
          <div id="test">
              heloo
          </div>
          <Carousel />
        </div>
      </div>
    );
  }
}

export default Store;
