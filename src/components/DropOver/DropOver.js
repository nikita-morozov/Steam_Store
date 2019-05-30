//built with help from dbilgili's dropdown tutorial on github.

import React from 'react';
import './DropOver.css';
import '../Carousel/Carousel.css';
import { Link } from 'react-router-dom'

class DropOver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inUse: false,
      styleUpdate: 'store_capsule_column'
    }
    this.exit = this.exit.bind(this)
  }

  enter() {
    this.setState({
      inUse: true,
      styleUpdate: 'store_capsule_column_inuse'
    })
  }
  
  exit() {
    this.setState({
      inUse: false,
      styleUpdate: 'store_capsule_column'
    })
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
    const{img, imgType, tall} = this.props;
    const{inUse, styleUpdate} = this.state;
    var itemHeight = '170px'
    var itemCss = "store_capsule_row-new"
    if (tall) {
      itemHeight = '350px'
      itemCss = "store_capsule_row-new-tall"
    }
    return (
      <div class={styleUpdate} onClick={() => this.enter()} on>
          {/* <Link to='/listing/ror2'> */}
              <div class="store_capsule_row">
                  <div class="capsule header">
                    <img id={imgType} src={img} alt="" />
                  </div>
              </div>
              {inUse && 
                <div class={itemCss} style={{height: itemHeight}}>
                </div>
              }
      </div>
    );
  }
}

export default DropOver;