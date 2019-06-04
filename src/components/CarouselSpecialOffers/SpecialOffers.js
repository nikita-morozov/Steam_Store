import './SpecialOffers.css'
import React from 'react';
import DropOver from '../DropOver/DropOver.js';
import dbs from '../../dbs.json'

class SpecialOffers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            co1: "565180",
            co2: "1081850",
            co3: "727130",
            co4: "857980",
            co5: "1082720",
            co6: "925460",
        }
    }

    render() {
        return (
            <div className="home_ctn2">
                <div className="home_page_content special_offers">
                    <h2>SPECIAL OFFERS</h2>
                    <div class="carousel_container" id="spotlight_carousel">
                        {/* <button class='leftbutton' style={{height: '350px', left: '0px'}}>LT</button> */}
                        <div class="carousel_items">
                            <div class="focus">
                                <DropOver
                                    img={dbs[Object.keys(dbs)[1]]['img']}
                                    imgType='imageTall'
                                    tall={true}
                                    title={dbs[Object.keys(dbs)[1]]['title']}
                                    description={dbs[Object.keys(dbs)[1]]['description']}
                                    tags={dbs[Object.keys(dbs)[1]]['genre']}
                                    price={dbs[Object.keys(dbs)[1]]['price']}
                                    oldPrice={dbs[Object.keys(dbs)[1]]['oldprice']}
                                    discount={dbs[Object.keys(dbs)[1]]['discount']}
                                    link={'/listing/' + Object.keys(dbs)[1]}
                                    cartAdder={this.props.cartAdder}
                                    wishlistAdder={this.props.wishlistAdder}
                                    id={Object.keys(dbs)[1]['id']}
                                />
                                <DropOver
                                    img={dbs[Object.keys(dbs)[2]]['img']}
                                    imgType='imageTall'
                                    tall={true}
                                    title={dbs[Object.keys(dbs)[2]]['title']}
                                    description={dbs[Object.keys(dbs)[2]]['description']}
                                    tags={dbs[Object.keys(dbs)[2]]['genre']}
                                    price={dbs[Object.keys(dbs)[2]]['price']}
                                    oldPrice={dbs[Object.keys(dbs)[2]]['oldprice']}
                                    discount={dbs[Object.keys(dbs)[2]]['discount']}
                                    link={'/listing/' + Object.keys(dbs)[2]}
                                    cartAdder={this.props.cartAdder}
                                    wishlistAdder={this.props.wishlistAdder}
                                    id={Object.keys(dbs)[2]['id']}
                                />
                                <DropOver
                                    img={dbs[Object.keys(dbs)[3]]['img']}
                                    imgType='imageTall'
                                    tall={true}
                                    title={dbs[Object.keys(dbs)[3]]['title']}
                                    description={dbs[Object.keys(dbs)[3]]['description']}
                                    tags={dbs[Object.keys(dbs)[3]]['genre']}
                                    price={dbs[Object.keys(dbs)[3]]['price']}
                                    oldPrice={dbs[Object.keys(dbs)[3]]['oldprice']}
                                    discount={dbs[Object.keys(dbs)[3]]['discount']}
                                    link={'/listing/' + Object.keys(dbs)[3]}
                                    cartAdder={this.props.cartAdder}
                                    wishlistAdder={this.props.wishlistAdder}
                                    id={Object.keys(dbs)[3]['id']}
                                />
                                <DropOver
                                    img={dbs[Object.keys(dbs)[4]]['img']}
                                    imgType='imageTall'
                                    tall={true}
                                    title={dbs[Object.keys(dbs)[4]]['title']}
                                    description={dbs[Object.keys(dbs)[4]]['description']}
                                    tags={dbs[Object.keys(dbs)[4]]['genre']}
                                    price={dbs[Object.keys(dbs)[4]]['price']}
                                    oldPrice={dbs[Object.keys(dbs)[4]]['oldprice']}
                                    discount={dbs[Object.keys(dbs)[4]]['discount']}
                                    link={'/listing/' + Object.keys(dbs)[4]}
                                    cartAdder={this.props.cartAdder}
                                    wishlistAdder={this.props.wishlistAdder}
                                    id={Object.keys(dbs)[4]['id']}
                                />
                                <DropOver
                                    img={dbs[Object.keys(dbs)[5]]['img']}
                                    imgType='imageTall'
                                    tall={true}
                                    title={dbs[Object.keys(dbs)[5]]['title']}
                                    description={dbs[Object.keys(dbs)[5]]['description']}
                                    tags={dbs[Object.keys(dbs)[5]]['genre']}
                                    price={dbs[Object.keys(dbs)[5]]['price']}
                                    oldPrice={dbs[Object.keys(dbs)[5]]['oldprice']}
                                    discount={dbs[Object.keys(dbs)[5]]['discount']}
                                    link={'/listing/' + Object.keys(dbs)[5]}
                                    cartAdder={this.props.cartAdder}
                                    wishlistAdder={this.props.wishlistAdder}
                                    id={Object.keys(dbs)[5]['id']}
                                />
                            </div>
                        </div>
                        {/* <button class='rightbutton' style={{left: '1326px', height: '350px'}}>RT</button> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default SpecialOffers;