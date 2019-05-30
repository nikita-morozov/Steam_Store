import './SpecialOffers.css'
import React from 'react';
import DropOver from '../DropOver/DropOver.js';

class SpecialOffers extends React.Component {

    render() {
        return (
            <div class="home_ctn">
                <div class="home_page_content special_offers">
                    <h2>SPECIAL OFFERS</h2>
                    <div class="carousel_container" id="spotlight_carousel">
                    {/* <button class='leftbutton' style={{height: '350px', left: '0px'}}>LT</button> */}
                        <div class="carousel_items">
                            <div class="focus">
                                <DropOver 
                                img='https://steamcdn-a.akamaihd.net/steam/spotlights/f836be3a84dabdfb88d62f56/spotlight_image_english.jpg?t=1558395285' 
                                imgType='image' 
                                tall={true}/>
                                <DropOver 
                                img="https://steamcdn-a.akamaihd.net/steam/spotlights/eaf541713873c543cbff7e3d/spotlight_image_english.jpg?t=1558395542" 
                                imgType='image' 
                                tall={true}/>
                                <div class="store_capsule_column">
                                    <div class="spotlight_img">
                                        <a href="https://store.steampowered.com/app/794260/Outward/?snr=1_4_4__40">
                                            <img id="image" src="https://steamcdn-a.akamaihd.net/steam/spotlights/f836be3a84dabdfb88d62f56/spotlight_image_english.jpg?t=1558395285" alt="#spotlight_midweek_madness" border="0" />
                                        </a>
                                    </div>
                                </div>
                                <div class="store_capsule_column">
                                    <div class="spotlight_img">
                                        <a href="https://store.steampowered.com/app/255710/Cities_Skylines/?snr=1_4_4__40_1">
                                            <img id="image" src="https://steamcdn-a.akamaihd.net/steam/spotlights/eaf541713873c543cbff7e3d/spotlight_image_english.jpg?t=1558395542" alt="#spotlight_midweek_madness" border="0" />
                                        </a>
                                    </div>
                                </div>
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