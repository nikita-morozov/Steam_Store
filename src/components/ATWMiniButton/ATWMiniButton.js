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
    this.setState({ buttonStyle: 'ATWMbuttonClicked' });
    this.props.wishlistAdder(this.props.id);
  }

  render() {
    const { tall, wide, size } = this.props;
    return (
      <div>
        <button className={this.state.buttonStyle} style={{ height: tall, width: wide }} onClick={(e) => { this.clicked(); }}>
          <img src={wishlistlogo} alt='atc' className='ATWMlogo' style={{ transform: size }} />
        </button>
      </div>
    );
  }
}

export default ATWMiniButton;