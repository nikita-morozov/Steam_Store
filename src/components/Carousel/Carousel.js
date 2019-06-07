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
                        <button className='leftbutton' style={{ height: '170px', left: '0px' }}><u className="arrow left" onClick={() => this.scrollLeft()}></u></button>
                        <div className="carousel_item">
                            <div className="focus" id='frscrollbox'>
                                <DropOver
                                    img={dbs[Object.keys(dbs)[7]]['img']}
                                    imgType='wideImage'
                                    tall={false}
                                    title={dbs[Object.keys(dbs)[7]]['title']}
                                    description={dbs[Object.keys(dbs)[7]]['description']}
                                    tags={dbs[Object.keys(dbs)[7]]['genre']}
                                    price={dbs[Object.keys(dbs)[7]]['price']}
                                    oldPrice={dbs[Object.keys(dbs)[7]]['oldprice']}
                                    discount={dbs[Object.keys(dbs)[7]]['discount']}
                                    link={'/listing/' + Object.keys(dbs)[7]}
                                    cartAdder={this.props.cartAdder}
                                    wishlistAdder={this.props.wishlistAdder}
                                    id={Object.keys(dbs)[7]}
                                    cartItems={this.props.cartItems}
                                    wishlistItems={this.props.wishlistItems}
                                />
                                <DropOver
                                    img={dbs[Object.keys(dbs)[8]]['img']}
                                    imgType='wideImage'
                                    tall={false}
                                    title={dbs[Object.keys(dbs)[8]]['title']}
                                    description={dbs[Object.keys(dbs)[8]]['description']}
                                    tags={dbs[Object.keys(dbs)[8]]['genre']}
                                    price={dbs[Object.keys(dbs)[8]]['price']}
                                    oldPrice={dbs[Object.keys(dbs)[8]]['oldprice']}
                                    discount={dbs[Object.keys(dbs)[8]]['discount']}
                                    link={'/listing/' + Object.keys(dbs)[8]}
                                    cartAdder={this.props.cartAdder}
                                    wishlistAdder={this.props.wishlistAdder}
                                    id={Object.keys(dbs)[8]}
                                    cartItems={this.props.cartItems}
                                    wishlistItems={this.props.wishlistItems}
                                />
                                <DropOver
                                    img={dbs[Object.keys(dbs)[9]]['img']}
                                    imgType='wideImage'
                                    tall={false}
                                    title={dbs[Object.keys(dbs)[9]]['title']}
                                    description={dbs[Object.keys(dbs)[9]]['description']}
                                    tags={dbs[Object.keys(dbs)[9]]['genre']}
                                    price={dbs[Object.keys(dbs)[9]]['price']}
                                    oldPrice={dbs[Object.keys(dbs)[9]]['oldprice']}
                                    discount={dbs[Object.keys(dbs)[9]]['discount']}
                                    link={'/listing/' + Object.keys(dbs)[9]}
                                    cartAdder={this.props.cartAdder}
                                    wishlistAdder={this.props.wishlistAdder}
                                    id={Object.keys(dbs)[9]}
                                    cartItems={this.props.cartItems}
                                    wishlistItems={this.props.wishlistItems}
                                />
                                <DropOver
                                    img={dbs[Object.keys(dbs)[10]]['img']}
                                    imgType='wideImage'
                                    tall={false}
                                    title={dbs[Object.keys(dbs)[10]]['title']}
                                    description={dbs[Object.keys(dbs)[10]]['description']}
                                    tags={dbs[Object.keys(dbs)[10]]['genre']}
                                    price={dbs[Object.keys(dbs)[10]]['price']}
                                    oldPrice={dbs[Object.keys(dbs)[10]]['oldprice']}
                                    discount={dbs[Object.keys(dbs)[10]]['discount']}
                                    link={'/listing/' + Object.keys(dbs)[10]}
                                    cartAdder={this.props.cartAdder}
                                    wishlistAdder={this.props.wishlistAdder}
                                    id={Object.keys(dbs)[10]}
                                    cartItems={this.props.cartItems}
                                    wishlistItems={this.props.wishlistItems}
                                />
                                <DropOver
                                    img={dbs[Object.keys(dbs)[11]]['img']}
                                    imgType='wideImage'
                                    tall={false}
                                    title={dbs[Object.keys(dbs)[11]]['title']}
                                    description={dbs[Object.keys(dbs)[11]]['description']}
                                    tags={dbs[Object.keys(dbs)[11]]['genre']}
                                    price={dbs[Object.keys(dbs)[11]]['price']}
                                    oldPrice={dbs[Object.keys(dbs)[11]]['oldprice']}
                                    discount={dbs[Object.keys(dbs)[11]]['discount']}
                                    link={'/listing/' + Object.keys(dbs)[11]}
                                    cartAdder={this.props.cartAdder}
                                    wishlistAdder={this.props.wishlistAdder}
                                    id={Object.keys(dbs)[11]}
                                    cartItems={this.props.cartItems}
                                    wishlistItems={this.props.wishlistItems}
                                />
                            </div>
                        </div>
                        <button className='rightbutton' style={{ left: '1326px', height: '170px' }}><u className="arrow right" onClick={() => this.scrollRight()}></u></button>
                    </div>
                </div>
            </div >
        );
    }
}

export default Carousel;