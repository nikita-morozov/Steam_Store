import React from 'react';
import './Carousel.css'
import DropOver from '../DropOver/DropOver.js';
import dbs from '../../dbs.json';

class Carousel extends React.Component {

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
            <div className="home_ctn">
                <div className="home_page_content special_offers">
                    <h2>FEATURED & RECOMMENDED</h2>
                    <div className="carousel_container" id="spotlight_carousel">
                        {/* <button class='leftbutton' style={{height: '170px', left: '0px'}}>LT</button> */}
                        <div className="carousel_item">
                            <div className="focus">
                                <DropOver 
                                img={dbs['table']['games'][this.state.co1]['img']} 
                                imgType='wideImage' 
                                tall={false}
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
                                imgType='wideImage' 
                                tall={false}
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
                                imgType='wideImage' 
                                tall={false}
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
                                imgType='wideImage' 
                                tall={false}
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
                                imgType='wideImage' 
                                tall={false}
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
                            </div>
                        </div>
                        {/* <button class='rightbutton' style={{left: '1326px', height: '170px'}}>RT</button> */}
                    </div>
                </div>
            </div >
        );
    }
}

export default Carousel;