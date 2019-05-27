import React from 'react';
import './Store.css';
import SteamHeader from '../../components/SteamHeader/SteamHeader.js';
import StoreHeader from '../../components/StoreHeader/StoreHeader.js';

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
        <div class='body'>

        </div>
      </div>
    );
  }
}

export default Store;
