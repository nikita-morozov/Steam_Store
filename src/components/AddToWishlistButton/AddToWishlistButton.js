import React from 'react';
import './AddToWishlistButton.css';
import wishlistlogo from '../../asset/wishlist.svg';

class AddToCartButton extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonStyle: 'ATWbutton'
    }
  }

  clicked() {
    this.setState({ buttonStyle: 'ATWbuttonClicked' });
  }

  render() {
    return (
      <div>
        <button className={this.state.buttonStyle} style={{ height: '32px', width: '193px' }} onClick={(e) => { this.clicked(); }}>
          <img src={wishlistlogo} alt='atc' className='ATWlogo' />Add to Wishlist
        </button>
      </div>
    );
  }
}

export default AddToCartButton;