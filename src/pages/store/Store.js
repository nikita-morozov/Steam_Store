import React from 'react';
import {Link} from 'react-router-dom'
import './Store.css';
import StoreHeader from '../../components/StoreHeader/StoreHeader.js';

class Store extends React.Component {
  render() {
    return (
      <div>
        <StoreHeader />
        <div class='body'>
        <Link to="listing" params={{ id: "ror2" }}>GO</Link>
        </div>
      </div>
    );
  }
}

export default Store;
