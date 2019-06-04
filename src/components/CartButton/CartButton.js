import React from 'react';
import './CartButton.css';
import cartlogo from '../../asset/cart.svg';

class CartButton extends React.Component {
  constructor(props) {
    super();
    this.state = {
      buttonStyle: 'Cbutton'
    }
  }

  clicked() {
    this.setState({ buttonStyle: 'CbuttonClicked' });
    this.props.toggle();
  }

  render() {
    return (
      <button className={this.state.buttonStyle} style={{ height: '32px', width: '98px' }} onClick={(e) => { this.clicked(); }}>
        <img src={cartlogo} alt='atc' className='Clogo' />Cart
      </button>
    );
  }
}

export default CartButton;