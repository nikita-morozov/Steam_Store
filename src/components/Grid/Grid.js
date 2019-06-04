import './Grid.css'
import React from 'react';
import { Link } from 'react-router-dom';
import dbs from '../../dbs.json';
import DropDown from '../DropDown/DropDown.js'

class Grid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            co1: "857980",
            co2: "1061270",
            co3: "727130",
            co4: "944300",
            co5: "1086160",
            co6: "732690",
            co7: "1063830",
            co8: "956580",
            co9: "565180",
        }
    }
    render() {
        return (
            <div className="grid_items">
                <DropDown 
                    img={dbs['table']['games'][this.state.co1]['img']}
                    imgname={dbs['table']['games'][this.state.co1]['imgname']}
                    title={dbs['table']['games'][this.state.co1]['title']}
                    description={dbs['table']['games'][this.state.co1]['description']}
                    tags={dbs['table']['games'][this.state.co1]['genre']}
                    price={dbs['table']['games'][this.state.co1]['price']} 
                    oldPrice={dbs['table']['games'][this.state.co1]['oldprice']} 
                    discount={dbs['table']['games'][this.state.co1]['discount']} 
                    link={'/listing/' + this.state.co1} 
                    id={this.state.co1}
                />
                <DropDown 
                    img={dbs['table']['games'][this.state.co2]['img']}
                    imgname={dbs['table']['games'][this.state.co2]['imgname']}
                    title={dbs['table']['games'][this.state.co2]['title']}
                    description={dbs['table']['games'][this.state.co2]['description']}
                    tags={dbs['table']['games'][this.state.co2]['genre']}
                    price={dbs['table']['games'][this.state.co2]['price']} 
                    oldPrice={dbs['table']['games'][this.state.co2]['oldprice']} 
                    discount={dbs['table']['games'][this.state.co2]['discount']} 
                    link={'/listing/' + this.state.co2} 
                    id={this.state.co2}
                />
                <DropDown 
                    img={dbs['table']['games'][this.state.co3]['img']}
                    imgname={dbs['table']['games'][this.state.co3]['imgname']}
                    title={dbs['table']['games'][this.state.co3]['title']}
                    description={dbs['table']['games'][this.state.co3]['description']}
                    tags={dbs['table']['games'][this.state.co3]['genre']}
                    price={dbs['table']['games'][this.state.co3]['price']} 
                    oldPrice={dbs['table']['games'][this.state.co3]['oldprice']} 
                    discount={dbs['table']['games'][this.state.co3]['discount']} 
                    link={'/listing/' + this.state.co3}
                    id={this.state.co3}
                />
                <DropDown 
                    img={dbs['table']['games'][this.state.co4]['img']}
                    imgname={dbs['table']['games'][this.state.co4]['imgname']}
                    title={dbs['table']['games'][this.state.co4]['title']}
                    description={dbs['table']['games'][this.state.co4]['description']}
                    tags={dbs['table']['games'][this.state.co4]['genre']}
                    price={dbs['table']['games'][this.state.co4]['price']} 
                    oldPrice={dbs['table']['games'][this.state.co4]['oldprice']} 
                    discount={dbs['table']['games'][this.state.co4]['discount']} 
                    link={'/listing/' + this.state.co4}
                    id={this.state.co4}
                />
                <DropDown 
                    img={dbs['table']['games'][this.state.co5]['img']}
                    imgname={dbs['table']['games'][this.state.co5]['imgname']}
                    title={dbs['table']['games'][this.state.co5]['title']}
                    description={dbs['table']['games'][this.state.co5]['description']}
                    tags={dbs['table']['games'][this.state.co5]['genre']}
                    price={dbs['table']['games'][this.state.co5]['price']} 
                    oldPrice={dbs['table']['games'][this.state.co5]['oldprice']} 
                    discount={dbs['table']['games'][this.state.co5]['discount']} 
                    link={'/listing/' + this.state.co5}
                    id={this.state.co5}
                />
                <DropDown 
                    img={dbs['table']['games'][this.state.co6]['img']}
                    imgname={dbs['table']['games'][this.state.co6]['imgname']}
                    title={dbs['table']['games'][this.state.co6]['title']}
                    description={dbs['table']['games'][this.state.co6]['description']}
                    tags={dbs['table']['games'][this.state.co6]['genre']}
                    price={dbs['table']['games'][this.state.co6]['price']} 
                    oldPrice={dbs['table']['games'][this.state.co6]['oldprice']} 
                    discount={dbs['table']['games'][this.state.co6]['discount']} 
                    link={'/listing/' + this.state.co6}
                    id={this.state.co6}
                />
                <DropDown 
                    img={dbs['table']['games'][this.state.co7]['img']}
                    imgname={dbs['table']['games'][this.state.co7]['imgname']}
                    title={dbs['table']['games'][this.state.co7]['title']}
                    description={dbs['table']['games'][this.state.co7]['description']}
                    tags={dbs['table']['games'][this.state.co7]['genre']}
                    price={dbs['table']['games'][this.state.co7]['price']} 
                    oldPrice={dbs['table']['games'][this.state.co7]['oldprice']} 
                    discount={dbs['table']['games'][this.state.co7]['discount']} 
                    link={'/listing/' + this.state.co7}
                    id={this.state.co7}
                />
                <DropDown 
                    img={dbs['table']['games'][this.state.co8]['img']}
                    imgname={dbs['table']['games'][this.state.co8]['imgname']}
                    title={dbs['table']['games'][this.state.co8]['title']}
                    description={dbs['table']['games'][this.state.co8]['description']}
                    tags={dbs['table']['games'][this.state.co8]['genre']}
                    price={dbs['table']['games'][this.state.co8]['price']} 
                    oldPrice={dbs['table']['games'][this.state.co8]['oldprice']} 
                    discount={dbs['table']['games'][this.state.co8]['discount']} 
                    link={'/listing/' + this.state.co8}
                    id={this.state.co8}
                />
                <DropDown 
                    img={dbs['table']['games'][this.state.co9]['img']}
                    imgname={dbs['table']['games'][this.state.co9]['imgname']}
                    title={dbs['table']['games'][this.state.co9]['title']}
                    description={dbs['table']['games'][this.state.co9]['description']}
                    tags={dbs['table']['games'][this.state.co9]['genre']}
                    price={dbs['table']['games'][this.state.co9]['price']} 
                    oldPrice={dbs['table']['games'][this.state.co9]['oldprice']} 
                    discount={dbs['table']['games'][this.state.co9]['discount']} 
                    link={'/listing/' + this.state.co9}
                    id={this.state.co9}
                />
            </div>
        );
    }
}

export default Grid;
;