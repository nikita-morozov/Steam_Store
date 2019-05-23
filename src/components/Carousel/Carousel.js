import './Carousel.css'
import React from 'react';

class Carousel extends React.Component {

    render() {
        return (
            <div class="home_ctn">
                <div class="home_page_content special_offers">
                    <h2>"Featured"</h2>
                    <div class="carousel_container spotlight" id="spotlight_carousel">
                        <div class="carousel_items">
                            <div class="focus">
                                <div class="home_area_spotlight underlined_links app_impression_tracked">
                                    <div class="spotlight_img">
                                        <a href="https://store.steampowered.com/app/794260/Outward/?snr=1_4_4__40">
                                            <img id="image" src="https://steamcdn-a.akamaihd.net/steam/spotlights/f836be3a84dabdfb88d62f56/spotlight_image_english.jpg?t=1558395285" alt="#spotlight_midweek_madness" border="0" />
                                        </a>
                                    </div>
                                </div>
                                <div class="home_area_spotlight underlined_links app_impression_tracked">
                                    <div class="spotlight_img">
                                        <a href="https://store.steampowered.com/app/255710/Cities_Skylines/?snr=1_4_4__40_1">
                                            <img id="image" src="https://steamcdn-a.akamaihd.net/steam/spotlights/eaf541713873c543cbff7e3d/spotlight_image_english.jpg?t=1558395542" alt="#spotlight_midweek_madness" border="0" />
                                        </a>
                                    </div>
                                </div>
                                <div class="store_capsule_column">
                                    <a class="store_capsule_row" href="https://store.steampowered.com/developer/KOEITECMO/list/46536?snr=1_4_4__43">
                                        <div class="capsule header"><img id="wideImage" src="https://steamcdn-a.akamaihd.net/steam/apps/1088360/header.jpg?t=1558460254" alt="" /></div>
                                    </a>
                                    <a class="store_capsule_row" href="https://store.steampowered.com/sale/grid/?snr=1_4_4__43">
                                        <div class="capsule header"> <img id="wideImage" src="https://steamcdn-a.akamaihd.net/steam/apps/380350/header.jpg?t=1558454069" alt="" /></div>
                                    </a>
                                </div>
                                <div class="store_capsule_column">
                                    <a class="store_capsule_row" href="https://store.steampowered.com/developer/KOEITECMO/list/46536?snr=1_4_4__43">
                                        <div class="capsule header"><img id="wideImage" src="https://steamcdn-a.akamaihd.net/steam/subs/320795/header_ratio.jpg?t=1543527662" alt="" /></div>
                                    </a>
                                    <a class="store_capsule_row" href="https://store.steampowered.com/sale/grid/?snr=1_4_4__43">
                                        <div class="capsule header"> <img id="wideImage" src="https://steamcdn-a.akamaihd.net/steam/apps/535480/header.jpg?t=1545242537" alt="" /></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Carousel;
;