import React from 'react';
import './SeeMoreButton.css';
import cartlogo from '../../asset/cart.svg';

class SeeMoreButton extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonStyle: 'SMbutton',
      buttonText: 'see more...'
    }
  }

  clicked() {
    this.setState({ buttonStyle: 'SMbuttonClicked', buttonText: 'In Cart' });

  }

  render() {
    return (
      <div>
        <button className={this.state.buttonStyle} style={{ height: '40px', width: '265px' }} onClick={(e) => { this.clicked(); }}>
          <img src={cartlogo} alt='atc' className='SMlogo' />{this.state.buttonText}
        </button>
      </div>
    );
  }
}

export default SeeMoreButton;