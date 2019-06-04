//built with help from dbilgili's dropdown tutorial on github.

import React from 'react';
import './DropDown.css';
import '../Grid/Grid.css';
import { Link } from 'react-router-dom';
import ATCMiniButton from '../ATCMiniButton/ATCMiniButton.js';
import ATWMiniButton from '../ATWMiniButton/ATWMiniButton.js';
import SeeMoreButton from '../SeeMoreButton/SeeMoreButton.js';
import Tag from '../Tag/Tag.js'
import DiscountBanner from '../DiscountBanner/DiscountBanner.js';
import ListingCarousel from '../ListingCarousel/ListingCarousel.js';
// import dbs from '../../dbs.json';
// import ListingCarousel from '../ListingCarousel/ListingCarousel.js';

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inUse: false,
      styleUpdate: 'grid_capsule',
      id: this.props.id
    }
    this.exit = this.exit.bind(this)
  }

  enter() {
    this.setState({
      inUse: true,
      styleUpdate: 'grid_capsule-inuse'
    })
  }
  
  exit() {
    this.setState({
      inUse: false,
      styleUpdate: 'grid_capsule'
    })
  }

  componentDidUpdate() {
    const {inUse, id} = this.state;
    
    if (document.getElementById('dropdowncontainer') !== null) {
      var lmnt = document.getElementById('dropdowncontainer');
      lmnt.scrollIntoView({ behavior: 'smooth', block: 'center'});
    }
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
    const{img, imgname, title, description, tags, oldPrice, price, link, discount, id} = this.props;
    const{inUse, styleUpdate} = this.state;
    var fixedTitle = ''
    // var fixedDesc = ''
    var hasDiscount = false;
    // var placement = 'featandrec';

    if (discount !== null) {
      hasDiscount = true;
    }

    if (title.length > 30 && title.includes(':')) {
      fixedTitle = title.substring(0,title.indexOf(':'))
    } else {
      fixedTitle = title;
    }

    // if (description.length > 130) {
    //   fixedDesc = description.substring(0, 131) + '...'
    // } else {
    //   fixedDesc = description;
    // }

    //FIX CLICK CLOSE
    return (
      <div className={styleUpdate}>
          <div class='bannerUt' id={id} onClick={() => this.enter()}>
            <img 
              id="gridImage" 
              src={img} 
              alt={imgname} 
            />
            {hasDiscount && <DiscountBanner percent={discount} />}
          </div>
          {inUse && 
                <div class="ddContainer" id='dropdowncontainer' style={{height: '540px'}} onClick={e => e.stopPropagation()}>
                  <div id='imgvid'>
                    <ListingCarousel gameId={id} />
                  </div>
                  <div>
                    <div id='titleContainerDown'>
                      <h1 id='gameTitleDown'>{fixedTitle}</h1>
                      <p id='gameDescDown'>{description}</p>
                    </div>
                    <div id='tagContainerDown'>
                      <Tag id='individualTag' text={tags} />
                    </div>
                    <div id='buttonContainerDown'>
                      <p id='gamePriceDown'>{price}</p>
                      <p id='gameOldPriceDown'>{oldPrice}</p>
                      <div id='addToCartDown'>
                        <ATCMiniButton tall='66px' wide='66px' size='scale(1.5)'/>
                      </div>
                      <div id='addToWishlistDown'>
                        <ATWMiniButton tall='66px' wide='66px' size='scale(1.5)'/>
                      </div>
                      <div id='seeMoreDown'>
                        <Link to={link} onClick={() => window.scrollTo(0, 0)}>
                          <SeeMoreButton id='seeMoreDown' tall='66px' wide='475px'/>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              }
      </div>);
  }
}

export default DropDown;