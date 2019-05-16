import React from 'react';
import './Listing.css';
import StoreHeader from '../../components/StoreHeader/StoreHeader.js';
import ror2 from '../../asset/ror2.jpg'

class Listing extends React.Component {
  render() {
    return (
      <div>
        <StoreHeader />
        <div class='body'>
            
            <p class='price'>
                <s class='oldprice'>$29.99</s>
                {/* needs both parts of the BR tag for some reason??? */}
                <br></br>
                $19.99
            </p>
            
            <p>Risk of Rain 2</p>
            
            <img src={ror2} alt="Risk of Rain 2 promo" />
            
        </div>
      </div>
    );
  }
}

export default Listing;
