import React from 'react';
import { Link } from 'react-router-dom';
import './Carousel.css'
import DropOver from '../DropOver/DropOver.js';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    
    render() {
        return (
            <div class="home_ctn">
                <div class="home_page_content special_offers">
                    <h2 style={{marginTop: '50px'}}>FEATURED & RECOMMENDED</h2>
                    <div class="carousel_container" id="spotlight_carousel">
                    {/* <button class='leftbutton' style={{height: '170px', left: '0px'}}>LT</button> */}
                        <div class="carousel_item">
                            <div class="focus">
                                <DropOver 
                                img="https://steamcdn-a.akamaihd.net/steam/apps/1088360/header.jpg?t=1558460254" 
                                imgType='wideImage' 
                                tall={false}/>
                                <div class="store_capsule_column">
                                    <Link to='/listing/ror2'>
                                        <a class="store_capsule_row" href={{}}>
                                            <div class="capsule header"><img id="wideImage" src="https://steamcdn-a.akamaihd.net/steam/apps/1088360/header.jpg?t=1558460254" alt="" /></div>
                                        </a>
                                    </Link>
                                </div>
                                <div class="store_capsule_column">
                                    <Link to='/listing/ror2'>
                                        <a class="store_capsule_row" href={{}}>
                                            <div class="capsule header"><img id="wideImage" src="https://steamcdn-a.akamaihd.net/steam/subs/320795/header_ratio.jpg?t=1543527662" alt="" /></div>
                                        </a>
                                    </Link>
                                </div>
                                <div class="store_capsule_column">
                                    <Link to='/listing/ror4'>
                                        <a class="store_capsule_row" href={{}}>
                                            <div class="capsule header"><img id="wideImage" src="https://steamcdn-a.akamaihd.net/steam/apps/548430/header.jpg?t=1558098409" alt="" /></div>
                                        </a>
                                    </Link>
                                </div>
                                <div class="store_capsule_column">
                                    <Link to='/listing/ror4'>
                                        <a class="store_capsule_row" href={{}}>
                                            <div class="capsule header"><img id="wideImage" src="https://steamcdn-a.akamaihd.net/steam/apps/550/header.jpg?t=1558652556" alt="" /></div>
                                        </a>
                                    </Link>
                                </div>
                                <div class="store_capsule_column" id="last">
                                    <Link to='/listing/ror2'>
                                        <a class="store_capsule_row" href={{}}>
                                            <div class="capsule header"><img id="wideImage" src="https://steamcdn-a.akamaihd.net/steam/apps/582160/header.jpg?t=1532007112" alt="" /></div>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* <button class='rightbutton' style={{left: '1326px', height: '170px'}}>RT</button> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Carousel;