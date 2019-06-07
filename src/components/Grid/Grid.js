import './Grid.css'
import React from 'react';
import dbs from '../../dbs.json';
import DropDown from '../DropDown/DropDown.js'

class Grid extends React.Component {

    render() {
        return (
            <div className="grid_items">
                <DropDown
                    img={dbs[Object.keys(dbs)[11 + (this.props.modifier * 12)]]['img']}
                    imgname={dbs[Object.keys(dbs)[11 + (this.props.modifier * 12)]]['imgname']}
                    title={dbs[Object.keys(dbs)[11 + (this.props.modifier * 12)]]['title']}
                    description={dbs[Object.keys(dbs)[11 + (this.props.modifier * 12)]]['description']}
                    tags={dbs[Object.keys(dbs)[11 + (this.props.modifier * 12)]]['genre']}
                    price={dbs[Object.keys(dbs)[11 + (this.props.modifier * 12)]]['price']}
                    oldPrice={dbs[Object.keys(dbs)[11 + (this.props.modifier * 12)]]['oldprice']}
                    discount={dbs[Object.keys(dbs)[11 + (this.props.modifier * 12)]]['discount']}
                    link={'/listing/' + Object.keys(dbs)[11 + (this.props.modifier * 12)]}
                    id={Object.keys(dbs)[11 + (this.props.modifier * 12)]}
                    cartAdder={this.props.cartAdder}
                    wishlistAdder={this.props.wishlistAdder}
                />
                <DropDown
                    img={dbs[Object.keys(dbs)[12 + (this.props.modifier * 12)]]['img']}
                    imgname={dbs[Object.keys(dbs)[12 + (this.props.modifier * 12)]]['imgname']}
                    title={dbs[Object.keys(dbs)[12 + (this.props.modifier * 12)]]['title']}
                    description={dbs[Object.keys(dbs)[12 + (this.props.modifier * 12)]]['description']}
                    tags={dbs[Object.keys(dbs)[12 + (this.props.modifier * 12)]]['genre']}
                    price={dbs[Object.keys(dbs)[12 + (this.props.modifier * 12)]]['price']}
                    oldPrice={dbs[Object.keys(dbs)[12 + (this.props.modifier * 12)]]['oldprice']}
                    discount={dbs[Object.keys(dbs)[12 + (this.props.modifier * 12)]]['discount']}
                    link={'/listing/' + Object.keys(dbs)[12 + (this.props.modifier * 12)]}
                    id={Object.keys(dbs)[12 + (this.props.modifier * 12)]}
                    cartAdder={this.props.cartAdder}
                    wishlistAdder={this.props.wishlistAdder}
                />
                <DropDown
                    img={dbs[Object.keys(dbs)[13 + (this.props.modifier * 12)]]['img']}
                    imgname={dbs[Object.keys(dbs)[13 + (this.props.modifier * 12)]]['imgname']}
                    title={dbs[Object.keys(dbs)[13 + (this.props.modifier * 12)]]['title']}
                    description={dbs[Object.keys(dbs)[13 + (this.props.modifier * 12)]]['description']}
                    tags={dbs[Object.keys(dbs)[13 + (this.props.modifier * 12)]]['genre']}
                    price={dbs[Object.keys(dbs)[13 + (this.props.modifier * 12)]]['price']}
                    oldPrice={dbs[Object.keys(dbs)[13 + (this.props.modifier * 12)]]['oldprice']}
                    discount={dbs[Object.keys(dbs)[13 + (this.props.modifier * 12)]]['discount']}
                    link={'/listing/' + Object.keys(dbs)[13 + (this.props.modifier * 12)]}
                    id={Object.keys(dbs)[13 + (this.props.modifier * 12)]}
                    cartAdder={this.props.cartAdder}
                    wishlistAdder={this.props.wishlistAdder}
                />
                <DropDown
                    img={dbs[Object.keys(dbs)[14 + (this.props.modifier * 12)]]['img']}
                    imgname={dbs[Object.keys(dbs)[14 + (this.props.modifier * 12)]]['imgname']}
                    title={dbs[Object.keys(dbs)[14 + (this.props.modifier * 12)]]['title']}
                    description={dbs[Object.keys(dbs)[14 + (this.props.modifier * 12)]]['description']}
                    tags={dbs[Object.keys(dbs)[14 + (this.props.modifier * 12)]]['genre']}
                    price={dbs[Object.keys(dbs)[14 + (this.props.modifier * 12)]]['price']}
                    oldPrice={dbs[Object.keys(dbs)[14 + (this.props.modifier * 12)]]['oldprice']}
                    discount={dbs[Object.keys(dbs)[14 + (this.props.modifier * 12)]]['discount']}
                    link={'/listing/' + Object.keys(dbs)[14 + (this.props.modifier * 12)]}
                    id={Object.keys(dbs)[14 + (this.props.modifier * 12)]}
                    cartAdder={this.props.cartAdder}
                    wishlistAdder={this.props.wishlistAdder}
                />
                <DropDown
                    img={dbs[Object.keys(dbs)[15 + (this.props.modifier * 12)]]['img']}
                    imgname={dbs[Object.keys(dbs)[15 + (this.props.modifier * 12)]]['imgname']}
                    title={dbs[Object.keys(dbs)[15 + (this.props.modifier * 12)]]['title']}
                    description={dbs[Object.keys(dbs)[15 + (this.props.modifier * 12)]]['description']}
                    tags={dbs[Object.keys(dbs)[15 + (this.props.modifier * 12)]]['genre']}
                    price={dbs[Object.keys(dbs)[15 + (this.props.modifier * 12)]]['price']}
                    oldPrice={dbs[Object.keys(dbs)[15 + (this.props.modifier * 12)]]['oldprice']}
                    discount={dbs[Object.keys(dbs)[15 + (this.props.modifier * 12)]]['discount']}
                    link={'/listing/' + Object.keys(dbs)[15 + (this.props.modifier * 12)]}
                    id={Object.keys(dbs)[15 + (this.props.modifier * 12)]}
                    cartAdder={this.props.cartAdder}
                    wishlistAdder={this.props.wishlistAdder}
                />
                <DropDown
                    img={dbs[Object.keys(dbs)[16 + (this.props.modifier * 12)]]['img']}
                    imgname={dbs[Object.keys(dbs)[16 + (this.props.modifier * 12)]]['imgname']}
                    title={dbs[Object.keys(dbs)[16 + (this.props.modifier * 12)]]['title']}
                    description={dbs[Object.keys(dbs)[16 + (this.props.modifier * 12)]]['description']}
                    tags={dbs[Object.keys(dbs)[16 + (this.props.modifier * 12)]]['genre']}
                    price={dbs[Object.keys(dbs)[16 + (this.props.modifier * 12)]]['price']}
                    oldPrice={dbs[Object.keys(dbs)[16 + (this.props.modifier * 12)]]['oldprice']}
                    discount={dbs[Object.keys(dbs)[16 + (this.props.modifier * 12)]]['discount']}
                    link={'/listing/' + Object.keys(dbs)[16 + (this.props.modifier * 12)]}
                    id={Object.keys(dbs)[16 + (this.props.modifier * 12)]}
                    cartAdder={this.props.cartAdder}
                    wishlistAdder={this.props.wishlistAdder}
                />
                <DropDown
                    img={dbs[Object.keys(dbs)[17 + (this.props.modifier * 12)]]['img']}
                    imgname={dbs[Object.keys(dbs)[17 + (this.props.modifier * 12)]]['imgname']}
                    title={dbs[Object.keys(dbs)[17 + (this.props.modifier * 12)]]['title']}
                    description={dbs[Object.keys(dbs)[17 + (this.props.modifier * 12)]]['description']}
                    tags={dbs[Object.keys(dbs)[17 + (this.props.modifier * 12)]]['genre']}
                    price={dbs[Object.keys(dbs)[17 + (this.props.modifier * 12)]]['price']}
                    oldPrice={dbs[Object.keys(dbs)[17 + (this.props.modifier * 12)]]['oldprice']}
                    discount={dbs[Object.keys(dbs)[17 + (this.props.modifier * 12)]]['discount']}
                    link={'/listing/' + Object.keys(dbs)[17 + (this.props.modifier * 12)]}
                    id={Object.keys(dbs)[17 + (this.props.modifier * 12)]}
                    cartAdder={this.props.cartAdder}
                    wishlistAdder={this.props.wishlistAdder}
                />
                <DropDown
                    img={dbs[Object.keys(dbs)[18 + (this.props.modifier * 12)]]['img']}
                    imgname={dbs[Object.keys(dbs)[18 + (this.props.modifier * 12)]]['imgname']}
                    title={dbs[Object.keys(dbs)[18 + (this.props.modifier * 12)]]['title']}
                    description={dbs[Object.keys(dbs)[18 + (this.props.modifier * 12)]]['description']}
                    tags={dbs[Object.keys(dbs)[18 + (this.props.modifier * 12)]]['genre']}
                    price={dbs[Object.keys(dbs)[18 + (this.props.modifier * 12)]]['price']}
                    oldPrice={dbs[Object.keys(dbs)[18 + (this.props.modifier * 12)]]['oldprice']}
                    discount={dbs[Object.keys(dbs)[18 + (this.props.modifier * 12)]]['discount']}
                    link={'/listing/' + Object.keys(dbs)[18 + (this.props.modifier * 12)]}
                    id={Object.keys(dbs)[18 + (this.props.modifier * 12)]}
                    cartAdder={this.props.cartAdder}
                    wishlistAdder={this.props.wishlistAdder}
                />
                <DropDown
                    img={dbs[Object.keys(dbs)[1 + (this.props.modifier * 12)]]['img']}
                    imgname={dbs[Object.keys(dbs)[1 + (this.props.modifier * 12)]]['imgname']}
                    title={dbs[Object.keys(dbs)[1 + (this.props.modifier * 12)]]['title']}
                    description={dbs[Object.keys(dbs)[1 + (this.props.modifier * 12)]]['description']}
                    tags={dbs[Object.keys(dbs)[1 + (this.props.modifier * 12)]]['genre']}
                    price={dbs[Object.keys(dbs)[1 + (this.props.modifier * 12)]]['price']}
                    oldPrice={dbs[Object.keys(dbs)[1 + (this.props.modifier * 12)]]['oldprice']}
                    discount={dbs[Object.keys(dbs)[1 + (this.props.modifier * 12)]]['discount']}
                    link={'/listing/' + Object.keys(dbs)[1 + (this.props.modifier * 12)]}
                    id={Object.keys(dbs)[19 + (this.props.modifier * 1)]}
                    cartAdder={this.props.cartAdder}
                    wishlistAdder={this.props.wishlistAdder}
                />
            </div>
        );
    }
}

export default Grid;
;