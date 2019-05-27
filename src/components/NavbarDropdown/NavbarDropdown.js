//built with help from dbilgili's dropdown tutorial on github.

import React from 'react';
import './NavbarDropdown.css';
import '../StoreHeader/StoreHeader.css';

class NavbarDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inUse: false,
      timeout: null,
      ddName: this.props.name,
      styleType: this.props.styleType,
      posOffset: this.props.posOffset
    }
    this.exit = this.exit.bind(this)
  }

  enter() {
    this.setState({
      inUse: true
    })
  }
  
  exit() {
    this.setState({inUse: false})
  }

  componentDidUpdate() {
    const {inUse} = this.state
    setTimeout(() => {
      if (inUse) {
        window.addEventListener('click', this.exit)
      } else {
        window.removeEventListener('click', this.exit)
      }
    }, 0)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.exit)
  }

  render() {
    const{options} = this.props;
    const{inUse, ddName} = this.state;
    return (
      <div class='dropdown' onMouseOut={() => this.exit()}>{/* dd-wrapper */}
        <div class='dropdownHeader'>
          <button class={this.state.styleType} style={{height: '38px', width: '85px'}} onMouseOver={() => this.enter()}>{ddName}</button>
        </div>
        {inUse && <ul className='dropdownList' style={{left: this.state.posOffset}} onClick={e => e.stopPropagation()}>
        {options.map((instance) => (
          <li className='dropdownListItem' key={instance.name}>
            {instance.name}
          </li>))}
        </ul>}
      </div>
    );
  }
}

export default NavbarDropdown;