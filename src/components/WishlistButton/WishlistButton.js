import React from 'react';
import './WishlistButton.css';
import wishlistlogo from '../../asset/wishlist.svg';

class WishlistButton extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonStyle: 'Wbutton'
    }
  }

  clicked() {
    //this.setState({ buttonStyle: 'WbuttonClicked' });
    this.props.toggle();
  }

  render() {
    return (
      <button className={this.state.buttonStyle} style={{ height: '28px', width: '128px' }} onClick={(e) => { this.clicked(); }}>
        <img src={wishlistlogo} alt='atc' className='Wlogo' />Wishlist
      </button>
    );
  }
}

export default WishlistButton;