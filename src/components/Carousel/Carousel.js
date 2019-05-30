import React from 'react';
import { Link } from 'react-router-dom';
import './Carousel.css'
import dbs from '../../dbs.json';

class Carousel extends React.Component {

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
                    <h2 style={{ marginTop: '50px' }}>FEATURED & RECOMMENDED</h2>
                    <div className="carousel_container spotlight" id="spotlight_carousel">
                        <div className="carousel_item">
                            <div className="focus">
                                <div className="store_capsule_column">
                                    <Link to={'/listing/' + this.state.co1}>
                                        <div className="capsule header"><img id="wideImage" src={dbs['table']['games'][this.state.co1]["img"]} alt={dbs['table']['games'][this.state.co1]["imgname"]} /></div>
                                    </Link>
                                </div>
                                <div className="store_capsule_column">
                                    <Link to={'/listing/' + this.state.co2}>
                                        <div className="capsule header"><img id="wideImage" src={dbs['table']['games'][this.state.co2]["img"]} alt={dbs['table']['games'][this.state.co2]["imgname"]} /></div>
                                    </Link>
                                </div>
                                <div className="store_capsule_column">
                                    <Link to={'/listing/' + this.state.co3}>
                                        <div className="capsule header"><img id="wideImage" src={dbs['table']['games'][this.state.co3]["img"]} alt={dbs['table']['games'][this.state.co3]["imgname"]} /></div>
                                    </Link>
                                </div>
                                <div className="store_capsule_column">
                                    <Link to={'/listing/' + this.state.co4}>
                                        <div className="capsule header"><img id="wideImage" src={dbs['table']['games'][this.state.co4]["img"]} alt={dbs['table']['games'][this.state.co4]["imgname"]} /></div>
                                    </Link>
                                </div>
                                <div className="store_capsule_column" id="last">
                                    <Link to={'/listing/' + this.state.co5}>
                                        <div className="capsule header"><img id="wideImage" src={dbs['table']['games'][this.state.co5]["img"]} alt={dbs['table']['games'][this.state.co5]["imgname"]} /></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Carousel;