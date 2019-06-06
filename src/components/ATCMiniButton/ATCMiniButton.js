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
    this.setState({ buttonStyle: 'ATCMbuttonClicked' });
    this.props.cartAdder(this.props.id);
  }

  render() {
    const { tall, wide, size } = this.props;
    return (
      <div>
        <button className={this.state.buttonStyle} style={{ height: tall, width: wide }} onClick={(e) => { this.clicked(); }}>
          <img src={cartlogo} alt='atc' className='ATCMlogo' style={{ transform: size }} />
        </button>
      </div>
    );
  }
}

export default ATCMiniButton;