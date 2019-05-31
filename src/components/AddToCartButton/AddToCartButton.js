import React from 'react';
import './AddToCartButton.css';
import cartlogo from '../../asset/cart.svg';

class AddToCartButton extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonStyle: 'ATCbutton',
      buttonText: 'Add to Cart'
    }
  }

  clicked() {
    this.setState({ buttonStyle: 'ATCbuttonClicked', buttonText: 'In Cart' });

  }

  render() {
    return (
      <div>
        <button className={this.state.buttonStyle} style={{ height: '32px', width: '163px' }} onClick={(e) => { this.clicked(); }}>
          <img src={cartlogo} alt='atc' className='ATClogo' />{this.state.buttonText}
        </button>
      </div>
    );
  }
}

export default AddToCartButton;