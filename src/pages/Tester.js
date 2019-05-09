import React from 'react';
import './store/Store.css'
import StoreHeader from '../components/StoreHeader/StoreHeader.js';

class Tester extends React.Component {
  render() {
    return (
      <div>
        <StoreHeader />
        <div class='body'>
            <p>If you can see this, the test was successful!</p>
        </div>
      </div>
    );
  }
}

export default Tester;
