import './SpecialOffers.css'
import React from 'react';
import DropOver from '../DropOver/DropOver.js';
import dbs from '../../dbs.json'

class SpecialOffers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            co1: "1064790",
            co2: "1081850",
            co3: "1085190",
            co4: "697550",
            co5: "1082720",
            co6: "925460",
        }
    }

    render() {
        return (
            <div className="home_ctn">
                <div className="home_page_content special_offers">
                    <h2>SPECIAL OFFERS</h2>
                    <div class="carousel_container" id="spotlight_carousel">
                    {/* <button class='leftbutton' style={{height: '350px', left: '0px'}}>LT</button> */}
                        <div class="carousel_items">
                            <div class="focus">
                                <DropOver 
                                img={dbs['table']['games'][this.state.co1]['img']} 
                                imgType='wideImage' 
                                tall={true} 
                                title={dbs['table']['games'][this.state.co1]['title']}
                                description={dbs['table']['games'][this.state.co1]['description']}
                                tags={dbs['table']['games'][this.state.co1]['genre']}
                                price={dbs['table']['games'][this.state.co1]['price']}
                                link={'/listing/' + this.state.co1}/>
                                <DropOver 
                                img={dbs['table']['games'][this.state.co2]['img']} 
                                imgType='wideImage' 
                                tall={true} 
                                title={dbs['table']['games'][this.state.co2]['title']}
                                description={dbs['table']['games'][this.state.co2]['description']}
                                tags={dbs['table']['games'][this.state.co2]['genre']}
                                price={dbs['table']['games'][this.state.co2]['price']}
                                link={'/listing/' + this.state.co2}/>
                                <DropOver 
                                img={dbs['table']['games'][this.state.co3]['img']} 
                                imgType='wideImage' 
                                tall={true} 
                                title={dbs['table']['games'][this.state.co3]['title']}
                                description={dbs['table']['games'][this.state.co3]['description']}
                                tags={dbs['table']['games'][this.state.co3]['genre']}
                                price={dbs['table']['games'][this.state.co3]['price']}
                                link={'/listing/' + this.state.co3}/>
                                <DropOver 
                                img={dbs['table']['games'][this.state.co4]['img']} 
                                imgType='wideImage' 
                                tall={true} 
                                title={dbs['table']['games'][this.state.co4]['title']}
                                description={dbs['table']['games'][this.state.co4]['description']}
                                tags={dbs['table']['games'][this.state.co4]['genre']}
                                price={dbs['table']['games'][this.state.co4]['price']}
                                link={'/listing/' + this.state.co4}/>
                                <DropOver 
                                img={dbs['table']['games'][this.state.co5]['img']} 
                                imgType='wideImage' 
                                tall={true} 
                                title={dbs['table']['games'][this.state.co5]['title']}
                                description={dbs['table']['games'][this.state.co5]['description']}
                                tags={dbs['table']['games'][this.state.co5]['genre']}
                                price={dbs['table']['games'][this.state.co5]['price']}
                                link={'/listing/' + this.state.co5}/>
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