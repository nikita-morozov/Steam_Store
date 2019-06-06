//built with help from dbilgili's dropdown tutorial on github.

import React from 'react';
import './DropOver.css';
import '../Carousel/Carousel.css';
import { Link } from 'react-router-dom'
import ATCMiniButton from '../ATCMiniButton/ATCMiniButton.js';
import ATWMiniButton from '../ATWMiniButton/ATWMiniButton.js';
import SeeMoreButton from '../SeeMoreButton/SeeMoreButton.js';
import Tag from '../Tag/Tag.js'
import DiscountBanner from '../DiscountBanner/DiscountBanner.js';
import LinesEllipsis from 'react-lines-ellipsis';

class DropOver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inUse: false,
      styleUpdate: 'store_capsule_column',
      id: this.props.id
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
    // const {inUse} = this.state
    // if (document.getElementById('forceView') !== null) {
    //   var lmnt = document.getElementById('forceView')
    //   lmnt.scrollIntoView({ behavior: 'smooth', block: 'nearest'});
    // }
    // setTimeout(() => {
    //   if (inUse) {
    //     window.addEventListener('click', this.exit)
    //   } else {
    //     window.removeEventListener('click', this.exit)
    //   }
    // }, 0)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.exit)
  }

  render() {
    const { img, imgType, tall, title, description, tags, oldPrice, price, link, discount } = this.props;
    const { inUse, styleUpdate } = this.state;

    var itemHeight = '170px';
    var itemCss = "store_capsule_row-new";
    var hasDiscount = false;
    var placement = 'featandrec';

    if (tall) {
      itemHeight = '355px';
      itemCss = "store_capsule_row-new-tall";
      placement = 'specoff';
    }

    if (discount !== null) {
      hasDiscount = true;
    }

    return (
      <div className={styleUpdate} id={placement} onMouseEnter={() => this.enter()} onMouseLeave={() => this.exit()}>
        <div className="store_capsule_row">
          <div className="capsule header">
            <img id={imgType} src={img} alt="" />
            {!inUse && hasDiscount && <DiscountBanner percent={discount} />}
          </div>
        </div>
        {
          inUse &&
          <div id='forceView' className={itemCss} style={{ height: itemHeight }}>
            <div id='titleContainer'>
              <LinesEllipsis id='gameTitle' text={title} maxLine='2' />
              {tall && <LinesEllipsis id='gameDesc' text={description} maxLine='7' />}
            </div>
            {tall && <div id='tagContainer'>
              {tags.map((tag) => (<Tag id='individualTag' text={tag} key={tag} />))}
            </div>}
            <div id='buttonContainer'>
              <p id='gamePrice'>{price}</p>
              <p id='gameOldPrice'>{oldPrice}</p>
              <div id='addToCart'>
                <ATCMiniButton
                  id={this.props.id}
                  cartAdder={this.props.cartAdder}
                  wishlistAdder={this.props.wishlistAdder}
                  tall='44px'
                  wide='44px'
                  size='scale(1)'
                />
              </div>
              <div id='addToWishlist'>
                <ATWMiniButton
                  id={this.props.id}
                  cartAdder={this.props.cartAdder}
                  wishlistAdder={this.props.wishlistAdder}
                  tall='44px'
                  wide='44px'
                  size='scale(1)'
                />
              </div>
              <div id='seeMore'>
                <Link to={link} onClick={() => window.scrollTo(0, 0)}>
                  <SeeMoreButton id='seeMore' tall='40px' wide='265px' />
                </Link>
              </div>
            </div>
          </div>
        }
      </div >
    );
  }
}

export default DropOver;