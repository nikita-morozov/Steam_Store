import React from 'react';
import './SeeMoreButton.css';

class SeeMoreButton extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonStyle: 'SMbutton',
      buttonText: 'see more...'
    }
  }

  clicked() {
    this.setState({ buttonStyle: 'SMbuttonClicked'});

  }

  render() {
    const{tall, wide} = this.props;
    return (
      <div>
        <button className={this.state.buttonStyle} style={{ height: tall, width: wide }} onClick={(e) => { this.clicked(); }}>
          {this.state.buttonText}
        </button>
      </div>
    );
  }
}

export default SeeMoreButton;