import React from 'react';
import './ATCMiniButton.css';
import cartlogo from '../../asset/cart.svg';

class ATCMiniButton extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonStyle: 'ATCMbutton'
    }
  }

  clicked() {
    this.setState({buttonStyle: 'ATCMbuttonClicked'});
  }

  render() {
    return (
      <div>
        <button class={this.state.buttonStyle} style={{height: '41px', width: '41px'}} onClick={ (e) => { this.clicked(); } }>
          <img src={cartlogo} alt='atc' class='ATCMlogo' />
        </button>
      </div>
    );
  }
}

export default ATCMiniButton;