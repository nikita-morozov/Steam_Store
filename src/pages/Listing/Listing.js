import React from 'react';
import './Listing.css';
import StoreHeader from '../../components/StoreHeader/StoreHeader.js';
import ror2 from '../../asset/ror2.jpg'

class Listing extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      price: '2',
      oldprice: '3',
      discount: '',
      title: 'RISK OF RAIN 2',
      promoloc: {ror2}
    }
  }

  render() {
    return (
      <div>
        <StoreHeader />
        <div class='body'>
          {console.log(this.state.promoloc)}
            
            <p class='price'>
                <s class='oldprice'>{this.state.oldprice}</s>
                {/* needs both parts of the BR tag for some reason??? */}
                <br></br>
                {this.state.price}
            </p>
            
            <p class='title'>{this.state.title}</p>
            
            <img class='promo_lg' src={this.state.promoloc["ror2"]} alt="Risk of Rain 2 promo" />
            
        </div>
      </div>
    );
  }
}

export default Listing;
