import './SpecialOffers.css'
import React from 'react';
import DropOver from '../DropOver/DropOver.js';
import dbs from '../../dbs.json'

class SpecialOffers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            co1: "606150",
            co2: "1086160",
            co3: "1081850",
            co4: "489940",
            co5: "565180",
            co6: "1085190",
            co7: "1061270",
            co8: "727130",
            co9: "1063830"
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
                                img={dbs['table']['games'][this.state.co1]['img']} 
                                imgType='imageTall' 
                                tall={true} 
                                title={dbs['table']['games'][this.state.co1]['title']}
                                description={dbs['table']['games'][this.state.co1]['description']}
                                tags={dbs['table']['games'][this.state.co1]['genre']}
                                price={dbs['table']['games'][this.state.co1]['price']}
                                oldPrice={dbs['table']['games'][this.state.co1]['oldprice']}  
                                discount={dbs['table']['games'][this.state.co1]['discount']} 
                                link={'/listing/' + this.state.co1}
                                cartAdder={this.props.cartAdder}
                                wishlistAdder={this.props.wishlistAdder}
                                id={this.state.co1}
                                />
                                <DropOver 
                                img={dbs['table']['games'][this.state.co2]['img']} 
                                imgType='imageTall' 
                                tall={true} 
                                title={dbs['table']['games'][this.state.co2]['title']}
                                description={dbs['table']['games'][this.state.co2]['description']}
                                tags={dbs['table']['games'][this.state.co2]['genre']}
                                price={dbs['table']['games'][this.state.co2]['price']} 
                                oldPrice={dbs['table']['games'][this.state.co2]['oldprice']}  
                                discount={dbs['table']['games'][this.state.co2]['discount']} 
                                link={'/listing/' + this.state.co2}
                                cartAdder={this.props.cartAdder}
                                wishlistAdder={this.props.wishlistAdder}
                                id={this.state.co2}
                                />
                                <DropOver 
                                img={dbs['table']['games'][this.state.co3]['img']} 
                                imgType='imageTall' 
                                tall={true} 
                                title={dbs['table']['games'][this.state.co3]['title']}
                                description={dbs['table']['games'][this.state.co3]['description']}
                                tags={dbs['table']['games'][this.state.co3]['genre']}
                                price={dbs['table']['games'][this.state.co3]['price']} 
                                oldPrice={dbs['table']['games'][this.state.co3]['oldprice']}  
                                discount={dbs['table']['games'][this.state.co3]['discount']} 
                                link={'/listing/' + this.state.co3}
                                cartAdder={this.props.cartAdder}
                                wishlistAdder={this.props.wishlistAdder}
                                id={this.state.co3}
                                />
                                <DropOver 
                                img={dbs['table']['games'][this.state.co4]['img']} 
                                imgType='imageTall' 
                                tall={true} 
                                title={dbs['table']['games'][this.state.co4]['title']}
                                description={dbs['table']['games'][this.state.co4]['description']}
                                tags={dbs['table']['games'][this.state.co4]['genre']}
                                price={dbs['table']['games'][this.state.co4]['price']} 
                                oldPrice={dbs['table']['games'][this.state.co4]['oldprice']}  
                                discount={dbs['table']['games'][this.state.co4]['discount']} 
                                link={'/listing/' + this.state.co4}
                                cartAdder={this.props.cartAdder}
                                wishlistAdder={this.props.wishlistAdder}
                                id={this.state.co4}
                                />
                                <DropOver 
                                img={dbs['table']['games'][this.state.co5]['img']} 
                                imgType='imageTall' 
                                tall={true} 
                                title={dbs['table']['games'][this.state.co5]['title']}
                                description={dbs['table']['games'][this.state.co5]['description']}
                                tags={dbs['table']['games'][this.state.co5]['genre']}
                                price={dbs['table']['games'][this.state.co5]['price']} 
                                oldPrice={dbs['table']['games'][this.state.co5]['oldprice']}  
                                discount={dbs['table']['games'][this.state.co5]['discount']} 
                                link={'/listing/' + this.state.co5}
                                cartAdder={this.props.cartAdder}
                                wishlistAdder={this.props.wishlistAdder}
                                id={this.state.co5}
                                />
                                <DropOver 
                                img={dbs['table']['games'][this.state.co6]['img']} 
                                imgType='imageTall' 
                                tall={true} 
                                title={dbs['table']['games'][this.state.co6]['title']}
                                description={dbs['table']['games'][this.state.co6]['description']}
                                tags={dbs['table']['games'][this.state.co6]['genre']}
                                price={dbs['table']['games'][this.state.co6]['price']} 
                                oldPrice={dbs['table']['games'][this.state.co6]['oldprice']}  
                                discount={dbs['table']['games'][this.state.co6]['discount']} 
                                link={'/listing/' + this.state.co6}
                                cartAdder={this.props.cartAdder}
                                wishlistAdder={this.props.wishlistAdder}
                                id={this.state.co6}
                                />
                                <DropOver 
                                img={dbs['table']['games'][this.state.co7]['img']} 
                                imgType='imageTall' 
                                tall={true} 
                                title={dbs['table']['games'][this.state.co7]['title']}
                                description={dbs['table']['games'][this.state.co7]['description']}
                                tags={dbs['table']['games'][this.state.co7]['genre']}
                                price={dbs['table']['games'][this.state.co7]['price']} 
                                oldPrice={dbs['table']['games'][this.state.co7]['oldprice']}  
                                discount={dbs['table']['games'][this.state.co7]['discount']} 
                                link={'/listing/' + this.state.co7}
                                cartAdder={this.props.cartAdder}
                                wishlistAdder={this.props.wishlistAdder}
                                id={this.state.co7}
                                />
                                <DropOver 
                                img={dbs['table']['games'][this.state.co8]['img']} 
                                imgType='imageTall' 
                                tall={true} 
                                title={dbs['table']['games'][this.state.co8]['title']}
                                description={dbs['table']['games'][this.state.co8]['description']}
                                tags={dbs['table']['games'][this.state.co8]['genre']}
                                price={dbs['table']['games'][this.state.co8]['price']} 
                                oldPrice={dbs['table']['games'][this.state.co8]['oldprice']}  
                                discount={dbs['table']['games'][this.state.co8]['discount']} 
                                link={'/listing/' + this.state.co8}
                                cartAdder={this.props.cartAdder}
                                wishlistAdder={this.props.wishlistAdder}
                                id={this.state.co8}
                                />
                                <DropOver 
                                img={dbs['table']['games'][this.state.co9]['img']} 
                                imgType='imageTall' 
                                tall={true} 
                                title={dbs['table']['games'][this.state.co9]['title']}
                                description={dbs['table']['games'][this.state.co9]['description']}
                                tags={dbs['table']['games'][this.state.co9]['genre']}
                                price={dbs['table']['games'][this.state.co9]['price']} 
                                oldPrice={dbs['table']['games'][this.state.co9]['oldprice']}  
                                discount={dbs['table']['games'][this.state.co9]['discount']} 
                                link={'/listing/' + this.state.co9}
                                cartAdder={this.props.cartAdder}
                                wishlistAdder={this.props.wishlistAdder}
                                id={this.state.co9}
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