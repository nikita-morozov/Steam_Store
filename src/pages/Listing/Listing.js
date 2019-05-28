import React from 'react';
import './Listing.css';
import StoreHeader from '../../components/StoreHeader/StoreHeader.js';
import PromoImage from '../../components/PromoImage/PromoImage.js';
import { bdb } from '../../db.js';
import SteamHeader from '../../components/SteamHeader/SteamHeader';
import ListingCarousel from '../../components/ListingCarousel/ListingCarousel.js';

class Listing extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      id: window.location.href.substring(window.location.href.lastIndexOf('/') + 1),
      price: "",
      oldprice: "",
      discount: "",
      title: "",
      promoloc: "",
      imgname: ""
    }
  }

  componentDidMount() {
    this.setState(
      {
        price: bdb[this.state.id]["price"],
        oldprice: bdb[this.state.id]["oldprice"],
        discount: '',
        title: bdb[this.state.id]["title"],
        promoloc: bdb[this.state.id]["img"],
        imgname: bdb[this.state.id]["imgname"]
      }
    )
  }

  render() {
    return (
      <div>
        <SteamHeader />
        <StoreHeader />
        <div class='body'>
          <div class='listing'>
            <div class='container'>
              <h1>{this.state.title}</h1>
              <div class="carousel">
                <ListingCarousel />
              </div>
              <div class='info' >
                <div id='image'>
                  <PromoImage src={this.state.promoloc} imgname={this.state.imgname} title={this.state.title} />
                </div>
                <div id="description">
                  <p>The classic multiplayer roguelike, Risk of Rain, returns with an extra dimension and more challenging action. Play solo, or team up with up to three friends to fight your way through hordes of monsters, unlock new loot, and find a way to escape the planet.</p>
                  <div class="user_reviews">
                    <div class="user_reviews_summary_row">
                      <div class="subtitleColumn">Recent Reviews:</div>
                      <div class="summaryColumn">
                        <span class="game_review_summaryPositive">Very Positive </span>
                        <span class="responsive_hidden">
                          (2,116)
                            </span>
                      </div>
                    </div>
                    <div class="user_reviews_summary_row">
                      <div class="subtitleColumn">All Reviews:</div>
                      <div class="summaryColumn">
                        <span class="game_review_summaryPositive" itemprop="description">Very Positive </span>
                        <span class="responsive_hidden">
                          (15,675)
                            </span>
                        <meta itemprop="reviewCount" content="15675" />
                        <meta itemprop="ratingValue" content="9" />
                        <meta itemprop="bestRating" content="10" />
                        <meta itemprop="worstRating" content="1" />
                      </div>
                    </div>
                    <div class="release_date">
                      <div class="subtitleColumn">Release Date:</div>
                      <div class="date">Mar 28, 2019</div>
                    </div>
                    <div class="dev_row">
                      <div class="subtitleColumn">Developer:</div>
                      <div class="summaryColumn" id="developers_list">
                        <a id="listingLink" href="https://store.steampowered.com/search/?developer=Hopoo%20Games&amp;snr=1_5_9__400">Hopoo Games</a>
                      </div>
                    </div>
                    <div class="dev_row">
                      <div class="subtitleColumn">Publisher:</div>
                      <div class="summaryColumn">
                        <a id="listingLink" href="https://store.steampowered.com/search/?publisher=Gearbox%20Publishing&amp;snr=1_5_9__422">Gearbox Publishing</a>
                      </div>
                    </div>
                  </div>
                  <div id="tags"></div>
                </div>
              </div>
              <div class='queue'>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Listing;
