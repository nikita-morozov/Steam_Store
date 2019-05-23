import React from 'react';
import './Listing.css';
import StoreHeader from '../../components/StoreHeader/StoreHeader.js';
import ror2 from '../../asset/ror2.jpg'
import PromoImage from '../../components/PromoImage.js';
import {bdb} from '../../db.js';

class Listing extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      id: "ror2",
      price: "",
      oldprice: "",
      discount: '',
      title: "",
      promoloc: "",
      imgname: ""
    }
  }

  componentDidMount() {
    if (this.props.id !== undefined) {
      this.setState({
        id: this.props.id
      })
    }
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
        <StoreHeader />
        <div class='body'>
          {console.log(this.state.promoloc)}
            
            <p class='price'>
                <s class='oldprice'>{this.state.oldprice}</s>
                {/* needs both parts of the BR tag for some reason??? */}
                <br></br>
                {this.state.price}
            </p>
            
            <p class='title'>{this.state.title}</p>
            
            <PromoImage src={this.state.promoloc} imgname={this.state.imgname} title={this.state.title} />
            
        </div>
      </div>
    );
  }
}

export default Listing;
