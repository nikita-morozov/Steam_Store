import React from 'react';
import './Listing.css';
import StoreHeader from '../../components/StoreHeader/StoreHeader.js';
import ror2 from '../../asset/ror2.jpg'
import PromoImage from '../../components/PromoImage.js';
import {bdb} from '../../db.js';

class Listing extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      price: bdb["ror2"]["price"],
      oldprice: bdb["ror2"]["oldprice"],
      discount: '',
      title: bdb["ror2"]["title"],
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
            
            <PromoImage title={this.state.title} />
            
        </div>
      </div>
    );
  }
}

export default Listing;
