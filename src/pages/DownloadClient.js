import React from 'react';
import './store/Store.css'
import StoreHeader from '../components/StoreHeader/StoreHeader.js';

class DownloadClient extends React.Component {
  render() {
    return (
      <div>
        <StoreHeader />
        <div class='body'>
            <p>This is where a download would go if it existed.</p>
        </div>
      </div>
    );
  }
}

export default DownloadClient;
