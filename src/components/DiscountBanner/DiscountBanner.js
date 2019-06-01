import React from 'react';
import './DiscountBanner.css';

class DiscountBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div id='discountTag'>{this.props.percent}</div>
    );
  }
}

export default DiscountBanner;