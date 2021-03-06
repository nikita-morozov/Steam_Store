import React from 'react';
import './Listing.css';
import StoreHeader from '../../components/StoreHeader/StoreHeader.js';
import PromoImage from '../../components/PromoImage/PromoImage.js';
import dbs from '../../dbs.json';
import SteamHeader from '../../components/SteamHeader/SteamHeader';
import ListingCarousel from '../../components/ListingCarousel/ListingCarousel.js';
import Tag from '../../components/Tag/Tag.js';
import AddToCartButton from '../../components/AddToCartButton/AddToCartButton';
import AddToWishlistButton from '../../components/AddToWishlistButton/AddToWishlistButton';
//import QueueButton from '../../components/QueueButton/QueueButton';
import LinesEllipsis from 'react-lines-ellipsis';


class Listing extends React.Component {

  constructor(props) {
    super(props);

    this.cartHandler = this.cartHandler.bind(this);
    this.wishlistHandler = this.wishlistHandler.bind(this);

    this.state = {
      id: window.location.href.substring(window.location.href.lastIndexOf('/') + 1),
      price: "",
      oldprice: "",
      discount: "",
      title: "",
      promoloc: "",
      imgname: "",
      cartAdder: this.props.cartAdder,
      wishlistAdder: this.props.wishlistAdder,
      tags: dbs[window.location.href.substring(window.location.href.lastIndexOf('/') + 1)]['genre'],
      sidebar: ""
    }
  }

  cartHandler() {
    this.props.cartAdder()
  }

  wishlistHandler() {
    this.props.wishlistAdder()
  }

  componentDidMount() {
    this.setState(
      {
        price: dbs[this.state.id]["price"],
        oldprice: dbs[this.state.id]["oldprice"],
        discount: dbs[this.state.id]["discount"],
        title: dbs[this.state.id]["title"],
        promoloc: dbs[this.state.id]["img"],
        imgname: dbs[this.state.id]["imgname"],
        description: dbs[this.state.id]["description"],
        releasedate: dbs[this.state.id]["releasedate"],
        developer: dbs[this.state.id]["developer"],
        publisher: dbs[this.state.id]["publisher"],
        developerlink: dbs[this.state.id]["developerlink"],
        publisherlink: dbs[this.state.id]["publisherlink"],
        game_description: dbs[this.state.id]["game_description"],
        system_requirements: dbs[this.state.id]["system_requirements"],
        sidebar: dbs[this.state.id]["sidebarhtml"],
        recentReviews: dbs[this.state.id]["reviewsrecent"],
        allReviews: dbs[this.state.id]["reviewsall"]
      }
    )
  }

  render() {
    return (
      <div>
        <SteamHeader />
        <StoreHeader toggleCart={this.props.toggleCart} toggleWishlist={this.props.toggleWishlist} />
        <div className='body'>
          <div className='listing'>
            <div className='container'>
              <div id="topLine">
                <h1>{this.state.title}</h1>
                <div className="carousel">
                  <ListingCarousel gameId={this.state.id} />
                </div>
                <div className='info' >
                  <div id='image'>
                    <PromoImage src={this.state.promoloc} imgname={this.state.imgname} title={this.state.title} />
                  </div>
                  <div id="description">
                    <LinesEllipsis id='gameListDesc' text={dbs[this.state.id]["description"]} maxLine='4' />
                    <div id="tags">
                      {this.state.tags.map((tag) => (<Tag id='individualTag' text={tag} key={tag} />))}
                    </div>
                    <div className="user_reviews">
                      <div className="user_reviews_summary_row">
                        <div className="subtitleColumn">Recent Reviews:</div>
                        <div className="summaryColumn">
                          <span className="game_review_summaryPositive">{this.state.recentReviews}</span>
                        </div>
                      </div>
                      <div className="user_reviews_summary_row">
                        <div className="subtitleColumn">All Reviews:</div>
                        <div className="summaryColumn">
                          <span className="game_review_summaryPositive" itemProp="description">{this.state.allReviews} </span>
                        </div>
                      </div>
                      <div className="release_date">
                        <div className="subtitleColumn">Release Date:</div>
                        <div className="date">{dbs[this.state.id]["releasedate"]}</div>
                      </div>
                      <div className="dev_row">
                        <div className="subtitleColumn">Developer:</div>
                        <div className="summaryColumn" id="developers_list">
                          <a id="listingLink" href={dbs[this.state.id]["developerlink"]}>{dbs[this.state.id]["developer"]}</a>
                        </div>
                      </div>
                      <div className="dev_row">
                        <div className="subtitleColumn">Publisher:</div>
                        <div className="summaryColumn">
                          <a id="listingLink" href={dbs[this.state.id]["publisherlink"]}>{dbs[this.state.id]["publisher"]}</a>
                        </div>
                      </div>
                    </div>
                    <div id="priceLine">
                      <div id="operatingSystems">
                        <img src="https://store.steampowered.com/public/images/v6/icon_platform_win.png?v=3" alt="windows" />
                        <img src="https://store.steampowered.com/public/images/v6/icon_platform_linux.png?v=3" alt="windows" />
                        <img src="https://store.steampowered.com/public/images/v6/icon_platform_mac.png?v=3" alt="windows" />
                      </div>
                      <div id='price'>
                        {this.state.price}
                      </div>
                      <div id='oldPrice'>
                        {this.state.oldprice}
                      </div>
                      <div className='queueBreak'></div>
                      <div id="interactiveButtons">
                        <div id="cart">
                          <AddToCartButton handler={this.cartHandler} />
                        </div>
                        <div id="wishlist">
                          <AddToWishlistButton handler={this.wishlistHandler} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='queueBreak'></div>
              {/*<div className='queue'>
                <div id="follow">
                  <QueueButton text={"Follow"} />
                </div>
                <div id="ignore">
                  <QueueButton text={"Ignore"} />
                </div>
                <div id="viewqueue">
                  <QueueButton text={"View Your Queue"} />
                </div>
                </div>*/}
              <div id="content">
                <div id="game_desc" dangerouslySetInnerHTML={{ __html: this.state.game_description }}></div>
                <div id="sys_req" dangerouslySetInnerHTML={{ __html: this.state.system_requirements }}></div>
              </div>
              <div id="detailBar" dangerouslySetInnerHTML={{ __html: this.state.sidebar }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Listing;
