import React from 'react';
import './ATWMiniButton.css';
import wishlistlogo from '../../asset/wishlist.svg';

class ATWMiniButton extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonStyle: 'ATWMbutton'
    }
  }

  clicked() {
    this.setState({buttonStyle: 'ATWMbuttonClicked'});
  }

  render() {
    return (
      <div>
        <button class={this.state.buttonStyle} style={{height: '41px', width: '41px'}} onClick={ (e) => { this.clicked(); } }>
          <img src={wishlistlogo} alt='atc' class='ATWMlogo' />
        </button>
      </div>
    );
  }
}

export default ATWMiniButton;