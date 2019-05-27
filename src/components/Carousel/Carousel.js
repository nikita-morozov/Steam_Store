import './Carousel.css'
import React from 'react';

class Carousel extends React.Component {

    render() {
        return (
            <div class="home_ctn">
                <div class="home_page_content special_offers">
                    <h2>FEATURED & RECOMMENDED</h2>
                    <div class="carousel_container spotlight" id="spotlight_carousel">
                        <div class="carousel_item">
                            <div class="focus">
                                <div class="store_capsule_column">
                                    <a class="store_capsule_row" href="https://store.steampowered.com/developer/KOEITECMO/list/46536?snr=1_4_4__43">
                                        <div class="capsule header"><img id="wideImage" src="https://steamcdn-a.akamaihd.net/steam/apps/1088360/header.jpg?t=1558460254" alt="" /></div>
                                    </a>
                                </div>
                                <div class="store_capsule_column">
                                    <a class="store_capsule_row" href="https://store.steampowered.com/developer/KOEITECMO/list/46536?snr=1_4_4__43">
                                        <div class="capsule header"><img id="wideImage" src="https://steamcdn-a.akamaihd.net/steam/subs/320795/header_ratio.jpg?t=1543527662" alt="" /></div>
                                    </a>
                                </div>
                                <div class="store_capsule_column">
                                    <a class="store_capsule_row" href="https://store.steampowered.com/developer/KOEITECMO/list/46536?snr=1_4_4__43">
                                        <div class="capsule header"><img id="wideImage" src="https://steamcdn-a.akamaihd.net/steam/apps/548430/header.jpg?t=1558098409" alt="" /></div>
                                    </a>
                                </div>
                                <div class="store_capsule_column">
                                    <a class="store_capsule_row" href="https://store.steampowered.com/developer/KOEITECMO/list/46536?snr=1_4_4__43">
                                        <div class="capsule header"><img id="wideImage" src="https://steamcdn-a.akamaihd.net/steam/apps/550/header.jpg?t=1558652556" alt="" /></div>
                                    </a>
                                </div>
                                <div class="store_capsule_column" id="last">
                                    <a class="store_capsule_row" href="https://store.steampowered.com/developer/KOEITECMO/list/46536?snr=1_4_4__43">
                                        <div class="capsule header"><img id="wideImage" src="https://steamcdn-a.akamaihd.net/steam/apps/582160/header.jpg?t=1532007112" alt="" /></div>
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