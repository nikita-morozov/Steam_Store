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
    const{img, imgType, tall, title, description, tags, oldPrice, price, link, discount} = this.props;
    const{inUse, styleUpdate} = this.state;

    var itemHeight = '170px'
    var itemCss = "store_capsule_row-new"
    var fixedTitle = ''
    var fixedDesc= ''
    var hasDiscount = false;

    if (tall) {
      itemHeight = '350px'
      itemCss = "store_capsule_row-new-tall"
    }

    if (discount !== null) {
      hasDiscount = true;
    }

    if (title.length > 20 && title.includes(':')) {
      fixedTitle = title.substring(0,title.indexOf(':'))
    } else {
      fixedTitle = title;
    }

    if (description.length > 130) {
      fixedDesc = description.substring(0, 131) + '...'
    } else {
      fixedDesc = description;
    }
    return (
      <div class={styleUpdate} onClick={() => this.enter()} on>
          {/* <Link to='/listing/ror2'> */}
              <div class="store_capsule_row">
                  <div class="capsule header">
                    <img id={imgType} src={img} alt="" />
                    {hasDiscount && <DiscountBanner percent={discount} />}
                  </div>
              </div>
              {inUse && 
                <div class={itemCss} style={{height: itemHeight}}>
                  <div id='titleContainer'>
                    <h1 id='gameTitle'>{fixedTitle}</h1>
                    {tall && <p id='gameDesc'>{fixedDesc}</p>}
                  </div>
                  {tall && <div id='tagContainer'>
                    <Tag id='individualTag' text={tags} />
                  </div>}
                  <div id='buttonContainer'>
                    <p id='gamePrice'>{price}</p>
                    <p id='gameOldPrice'>{oldPrice}</p>
                    <div id='addToCart'>
                      <ATCMiniButton />
                    </div>
                    <div id='addToWishlist'>
                      <ATWMiniButton />
                    </div>
                    <div id='seeMore'>
                      <Link to={link}>
                        <SeeMoreButton id='seeMore'/>
                      </Link>
                    </div>
                  </div>
                </div>
                //src={dbs['table']['games'][this.state.co1]["img"]} 
                //alt={dbs['table']['games'][this.state.co1]["imgname"]} 
              }
      </div>
    );
  }
}

export default DropOver;