import './SpecialOffers.css'
import React from 'react';
import DropOver from '../DropOver/DropOver.js';
import dbs from '../../dbs.json'

class SpecialOffers extends React.Component {
    scrollRight() {
        document.getElementById('soscrollbox').scrollBy({ left: 305, behavior: 'smooth' })
    }

    scrollLeft() {
        document.getElementById('soscrollbox').scrollBy({ left: -305, behavior: 'smooth' })
    }

    render() {
        return (
            <div className="home_ctn2">
                <div className="home_page_content special_offers">
                    <h2>SPECIAL OFFERS</h2>
                    <div className="carousel_container" id="spotlight_carousel">
                        <button className='leftbutton' style={{ height: '350px', left: '0px' }}><u className="arrow left" onClick={() => this.scrollLeft()}></u></button>
                        <div className="carousel_items">
                            <div className="focus" id='soscrollbox'>
                                <DropOver
                                    img={dbs['805550']['imgtall']}
                                    imgType='imageTall'
                                    tall={true}
                                    title={dbs['805550']['title']}
                                    description={dbs['805550']['description']}
                                    tags={dbs['805550']['genre']}
                                    price={dbs['805550']['price']}
                                    oldPrice={dbs['805550']['oldprice']}
                                    discount={dbs['805550']['discount']}
                                    link={'/listing/805550'}
                                    cartAdder={this.props.cartAdder}
                                    wishlistAdder={this.props.wishlistAdder}
                                    id={'805550'}
                                />
                                <DropOver
                                    img={dbs['215530']['imgtall']}
                                    imgType='imageTall'
                                    tall={true}
                                    title={dbs['215530']['title']}
                                    description={dbs['215530']['description']}
                                    tags={dbs['215530']['genre']}
                                    price={dbs['215530']['price']}
                                    oldPrice={dbs['215530']['oldprice']}
                                    discount={dbs['215530']['discount']}
                                    link={'/listing/215530'}
                                    cartAdder={this.props.cartAdder}
                                    wishlistAdder={this.props.wishlistAdder}
                                    id={'215530'}
                                />
                                <DropOver
                                    img={dbs['264710']['imgtall']}
                                    imgType='imageTall'
                                    tall={true}
                                    title={dbs['264710']['title']}
                                    description={dbs['264710']['description']}
                                    tags={dbs['264710']['genre']}
                                    price={dbs['264710']['price']}
                                    oldPrice={dbs['264710']['oldprice']}
                                    discount={dbs['264710']['discount']}
                                    link={'/listing/264710'}
                                    cartAdder={this.props.cartAdder}
                                    wishlistAdder={this.props.wishlistAdder}
                                    id={'264710'}
                                />
                                <DropOver
                                    img={dbs['916730']['imgtall']}
                                    imgType='imageTall'
                                    tall={true}
                                    title={dbs['916730']['title']}
                                    description={dbs['916730']['description']}
                                    tags={dbs['916730']['genre']}
                                    price={dbs['916730']['price']}
                                    oldPrice={dbs['916730']['oldprice']}
                                    discount={dbs['916730']['discount']}
                                    link={'/listing/916730'}
                                    cartAdder={this.props.cartAdder}
                                    wishlistAdder={this.props.wishlistAdder}
                                    id={'916730'}
                                />
                                <DropOver
                                    img={dbs['767930']['imgtall']}
                                    imgType='imageTall'
                                    tall={true}
                                    title={dbs['767930']['title']}
                                    description={dbs['767930']['description']}
                                    tags={dbs['767930']['genre']}
                                    price={dbs['767930']['price']}
                                    oldPrice={dbs['767930']['oldprice']}
                                    discount={dbs['767930']['discount']}
                                    link={'/listing/767930'}
                                    cartAdder={this.props.cartAdder}
                                    wishlistAdder={this.props.wishlistAdder}
                                    id={'767930'}
                                />
                                <DropOver
                                    img={dbs['1051200']['imgtall']}
                                    imgType='imageTall'
                                    tall={true}
                                    title={dbs['1051200']['title']}
                                    description={dbs['1051200']['description']}
                                    tags={dbs['1051200']['genre']}
                                    price={dbs['1051200']['price']}
                                    oldPrice={dbs['1051200']['oldprice']}
                                    discount={dbs['1051200']['discount']}
                                    link={'/listing/1051200'}
                                    cartAdder={this.props.cartAdder}
                                    wishlistAdder={this.props.wishlistAdder}
                                    id={'1051200'}
                                />
                            </div>
                        </div>
                        <button className='rightbutton' style={{ left: '1326px', height: '350px' }}><u className="arrow right" onClick={() => this.scrollRight()}></u></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SpecialOffers;