import React from 'react';
import './ATWMiniButton.css';
import wishlistlogo from '../../asset/wishlistblue.svg';

class ATWMiniButton extends React.Component {
  constructor(props) {
    super();
    this.state = {
      buttonStyle: 'ATWMbutton'
    }
  }

  clicked() {
    this.setState({buttonStyle: 'ATWMbuttonClicked'});
    this.props.wishlistAdder(this.props.id);
  }

  render() {
    return (
      <div>
        <button class={this.state.buttonStyle} style={{height: '44px', width: '44px'}} onClick={ (e) => { this.clicked(); } }>
          <img src={wishlistlogo} alt='atc' class='ATWMlogo' />
        </button>
      </div>
    );
  }
}

export default ATWMiniButton;