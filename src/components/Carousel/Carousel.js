import React from 'react';
import './Carousel.css'
import DropOver from '../DropOver/DropOver.js';
import dbs from '../../dbs.json';

class Carousel extends React.Component {
    scrollRight() {
        document.getElementById('frscrollbox').scrollBy({ left: 305, behavior: 'smooth' })
    }

    scrollLeft() {
        document.getElementById('frscrollbox').scrollBy({ left: -305, behavior: 'smooth' })
    }

    render() {
        return (
            <div className="home_ctn">
                <div className="home_page_content special_offers">
                    <h2>FEATURED & RECOMMENDED</h2>
                    <div className="carousel_container" id="spotlight_carousel">
                        <button class='leftbutton' style={{ height: '170px', left: '0px' }}><u class="arrow left" onClick={() => this.scrollLeft()}></u></button>
                        <div className="carousel_item">
                            <div className="focus" id='frscrollbox'>
                                <DropOver
                                    img={dbs[Object.keys(dbs)[1]]['img']}
                                    imgType='wideImage'
                                    tall={false}
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
                                    imgType='wideImage'
                                    tall={false}
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
                                    imgType='wideImage'
                                    tall={false}
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
                                    imgType='wideImage'
                                    tall={false}
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
                                    imgType='wideImage'
                                    tall={false}
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
                        <button class='rightbutton' style={{ left: '1326px', height: '170px' }}><u class="arrow right" onClick={() => this.scrollRight()}></u></button>
                    </div>
                </div>
            </div >
        );
    }
}

export default Carousel;