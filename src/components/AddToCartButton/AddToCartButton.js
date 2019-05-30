import React from 'react';
import './AddToCartButton.css';
import cartlogo from '../../asset/cart.svg';

class AddToCartButton extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonStyle: 'ATCbutton'
    }
  }

  clicked() {
    this.setState({ buttonStyle: 'ATCbuttonClicked' });
  }

  render() {
    return (
      <div>
        <button className={this.state.buttonStyle} style={{ height: '32px', width: '163px' }} onClick={(e) => { this.clicked(); }}>
          <img src={cartlogo} alt='atc' className='ATClogo' />Add to Cart
        </button>
      </div>
    );
  }
}

export default AddToCartButton;