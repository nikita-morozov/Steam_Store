import React from 'react';
import './ATCMiniButton.css';
import cartlogo from '../../asset/cartgreen.svg';

class ATCMiniButton extends React.Component {
  constructor(props) {
    super();
    this.state = {
      buttonStyle: 'ATCMbutton'
    }
  }

  clicked() {
    this.setState({buttonStyle: 'ATCMbuttonClicked'});
    this.props.cartAdder();
  }

  render() {
    return (
      <div>
        <button class={this.state.buttonStyle} style={{height: '44px', width: '44px'}} onClick={ (e) => { this.clicked(); } }>
          <img src={cartlogo} alt='atc' class='ATCMlogo' />
        </button>
      </div>
    );
  }
}

export default ATCMiniButton;