import React from 'react';
import './AddToWishlistButton.css';
import wishlistlogo from '../../asset/wishlist.svg';

class AddToCartButton extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonStyle: 'ATWbutton',
      buttonText: 'Add to Wishlist',
      id: window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
    }
  }

  clicked() {
    this.setState({ buttonStyle: 'ATWbuttonClicked', buttonText: 'On Wishlist' });
    this.props.handler()
  }

  render() {
    return (
      <div>
        <button className={this.state.buttonStyle} style={{ height: '32px', width: '193px' }} onClick={(e) => { this.clicked(); }}>
          <img src={wishlistlogo} alt='atc' className='ATWlogo' />{ this.state.buttonText }
        </button>
      </div>
    );
  }
}

export default AddToCartButton;