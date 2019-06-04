import './SpecialOffers.css'
import React from 'react';
import DropOver from '../DropOver/DropOver.js';
import dbs from '../../dbs.json'

class SpecialOffers extends React.Component {
    scrollRight() {
        document.getElementById('soscrollbox').scrollBy({left: 305, behavior: 'smooth'})
    }

    scrollLeft() {
        document.getElementById('soscrollbox').scrollBy({left: -305, behavior: 'smooth'})
    }

    render() {
        return (
            <div className="home_ctn2">
                <div className="home_page_content special_offers">
                    <h2>SPECIAL OFFERS</h2>
                    <div class="carousel_container" id="spotlight_carousel">
                        <button class='leftbutton' style={{height: '350px', left: '0px'}}><i class="arrow left" onClick={() => this.scrollLeft()}></i></button>
                        <div class="carousel_items">
                            <div class="focus" id='soscrollbox'>
                                <DropOver
                                    img={dbs[Object.keys(dbs)[21]]['img']}
                                    imgType='imageTall'
                                    tall={true}
                                    title={dbs[Object.keys(dbs)[21]]['title']}
                                    description={dbs[Object.keys(dbs)[1]]['description']}
                                    tags={dbs[Object.keys(dbs)[21]]['genre']}
                                    price={dbs[Object.keys(dbs)[21]]['price']}
                                    oldPrice={dbs[Object.keys(dbs)[21]]['oldprice']}
                                    discount={dbs[Object.keys(dbs)[21]]['discount']}
                                    link={'/listing/' + Object.keys(dbs)[1]}
                                    cartAdder={this.props.cartAdder}
                                    wishlistAdder={this.props.wishlistAdder}
                                    id={Object.keys(dbs)[21]['id']}
                                />
                                <DropOver
                                    img={dbs[Object.keys(dbs)[22]]['img']}
                                    imgType='imageTall'
                                    tall={true}
                                    title={dbs[Object.keys(dbs)[22]]['title']}
                                    description={dbs[Object.keys(dbs)[22]]['description']}
                                    tags={dbs[Object.keys(dbs)[22]]['genre']}
                                    price={dbs[Object.keys(dbs)[22]]['price']}
                                    oldPrice={dbs[Object.keys(dbs)[22]]['oldprice']}
                                    discount={dbs[Object.keys(dbs)[22]]['discount']}
                                    link={'/listing/' + Object.keys(dbs)[22]}
                                    cartAdder={this.props.cartAdder}
                                    wishlistAdder={this.props.wishlistAdder}
                                    id={Object.keys(dbs)[22]['id']}
                                />
                                <DropOver
                                    img={dbs[Object.keys(dbs)[23]]['img']}
                                    imgType='imageTall'
                                    tall={true}
                                    title={dbs[Object.keys(dbs)[23]]['title']}
                                    description={dbs[Object.keys(dbs)[23]]['description']}
                                    tags={dbs[Object.keys(dbs)[23]]['genre']}
                                    price={dbs[Object.keys(dbs)[23]]['price']}
                                    oldPrice={dbs[Object.keys(dbs)[23]]['oldprice']}
                                    discount={dbs[Object.keys(dbs)[23]]['discount']}
                                    link={'/listing/' + Object.keys(dbs)[23]}
                                    cartAdder={this.props.cartAdder}
                                    wishlistAdder={this.props.wishlistAdder}
                                    id={Object.keys(dbs)[23]['id']}
                                />
                                <DropOver
                                    img={dbs[Object.keys(dbs)[24]]['img']}
                                    imgType='imageTall'
                                    tall={true}
                                    title={dbs[Object.keys(dbs)[24]]['title']}
                                    description={dbs[Object.keys(dbs)[24]]['description']}
                                    tags={dbs[Object.keys(dbs)[24]]['genre']}
                                    price={dbs[Object.keys(dbs)[24]]['price']}
                                    oldPrice={dbs[Object.keys(dbs)[24]]['oldprice']}
                                    discount={dbs[Object.keys(dbs)[24]]['discount']}
                                    link={'/listing/' + Object.keys(dbs)[24]}
                                    cartAdder={this.props.cartAdder}
                                    wishlistAdder={this.props.wishlistAdder}
                                    id={Object.keys(dbs)[24]['id']}
                                />
                                <DropOver
                                    img={dbs[Object.keys(dbs)[25]]['img']}
                                    imgType='imageTall'
                                    tall={true}
                                    title={dbs[Object.keys(dbs)[25]]['title']}
                                    description={dbs[Object.keys(dbs)[25]]['description']}
                                    tags={dbs[Object.keys(dbs)[25]]['genre']}
                                    price={dbs[Object.keys(dbs)[25]]['price']}
                                    oldPrice={dbs[Object.keys(dbs)[25]]['oldprice']}
                                    discount={dbs[Object.keys(dbs)[25]]['discount']}
                                    link={'/listing/' + Object.keys(dbs)[25]}
                                    cartAdder={this.props.cartAdder}
                                    wishlistAdder={this.props.wishlistAdder}
                                    id={Object.keys(dbs)[25]['id']}
                                />
                            </div>
                        </div>
                        <button class='rightbutton' style={{left: '1326px', height: '350px'}}><i class="arrow right" onClick={() => this.scrollRight()}></i></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SpecialOffers;