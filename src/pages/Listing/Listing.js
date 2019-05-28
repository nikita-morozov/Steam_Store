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
