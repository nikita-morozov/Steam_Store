import './Grid.css'
import React from 'react';
import dbs from '../../dbs.json';
import DropDown from '../DropDown/DropDown.js'

class Grid extends React.Component {

    render() {
        return (
            <div className="grid_items">
                <DropDown
                    img={dbs[Object.keys(dbs)[11]]['img']}
                    imgname={dbs[Object.keys(dbs)[11]]['imgname']}
                    title={dbs[Object.keys(dbs)[11]]['title']}
                    description={dbs[Object.keys(dbs)[11]]['description']}
                    tags={dbs[Object.keys(dbs)[11]]['genre']}
                    price={dbs[Object.keys(dbs)[11]]['price']}
                    oldPrice={dbs[Object.keys(dbs)[11]]['oldprice']}
                    discount={dbs[Object.keys(dbs)[11]]['discount']}
                    link={'/listing/' + Object.keys(dbs)[11]}
                    id={Object.keys(dbs)[11]}
                    cartAdder={this.props.cartAdder}
                    wishlistAdder={this.props.wishlistAdder}
                />
                <DropDown
                    img={dbs[Object.keys(dbs)[12]]['img']}
                    imgname={dbs[Object.keys(dbs)[12]]['imgname']}
                    title={dbs[Object.keys(dbs)[12]]['title']}
                    description={dbs[Object.keys(dbs)[12]]['description']}
                    tags={dbs[Object.keys(dbs)[12]]['genre']}
                    price={dbs[Object.keys(dbs)[12]]['price']}
                    oldPrice={dbs[Object.keys(dbs)[12]]['oldprice']}
                    discount={dbs[Object.keys(dbs)[12]]['discount']}
                    link={'/listing/' + Object.keys(dbs)[12]}
                    id={Object.keys(dbs)[12]}
                    cartAdder={this.props.cartAdder}
                    wishlistAdder={this.props.wishlistAdder}
                />
                <DropDown
                    img={dbs[Object.keys(dbs)[13]]['img']}
                    imgname={dbs[Object.keys(dbs)[13]]['imgname']}
                    title={dbs[Object.keys(dbs)[13]]['title']}
                    description={dbs[Object.keys(dbs)[13]]['description']}
                    tags={dbs[Object.keys(dbs)[13]]['genre']}
                    price={dbs[Object.keys(dbs)[13]]['price']}
                    oldPrice={dbs[Object.keys(dbs)[13]]['oldprice']}
                    discount={dbs[Object.keys(dbs)[13]]['discount']}
                    link={'/listing/' + Object.keys(dbs)[13]}
                    id={Object.keys(dbs)[13]}
                    cartAdder={this.props.cartAdder}
                    wishlistAdder={this.props.wishlistAdder}
                />
                <DropDown
                    img={dbs[Object.keys(dbs)[14]]['img']}
                    imgname={dbs[Object.keys(dbs)[14]]['imgname']}
                    title={dbs[Object.keys(dbs)[14]]['title']}
                    description={dbs[Object.keys(dbs)[14]]['description']}
                    tags={dbs[Object.keys(dbs)[14]]['genre']}
                    price={dbs[Object.keys(dbs)[14]]['price']}
                    oldPrice={dbs[Object.keys(dbs)[14]]['oldprice']}
                    discount={dbs[Object.keys(dbs)[14]]['discount']}
                    link={'/listing/' + Object.keys(dbs)[14]}
                    id={Object.keys(dbs)[14]}
                    cartAdder={this.props.cartAdder}
                    wishlistAdder={this.props.wishlistAdder}
                />
                <DropDown
                    img={dbs[Object.keys(dbs)[15]]['img']}
                    imgname={dbs[Object.keys(dbs)[15]]['imgname']}
                    title={dbs[Object.keys(dbs)[15]]['title']}
                    description={dbs[Object.keys(dbs)[15]]['description']}
                    tags={dbs[Object.keys(dbs)[15]]['genre']}
                    price={dbs[Object.keys(dbs)[15]]['price']}
                    oldPrice={dbs[Object.keys(dbs)[15]]['oldprice']}
                    discount={dbs[Object.keys(dbs)[15]]['discount']}
                    link={'/listing/' + Object.keys(dbs)[15]}
                    id={Object.keys(dbs)[15]}
                    cartAdder={this.props.cartAdder}
                    wishlistAdder={this.props.wishlistAdder}
                />
                <DropDown
                    img={dbs[Object.keys(dbs)[16]]['img']}
                    imgname={dbs[Object.keys(dbs)[16]]['imgname']}
                    title={dbs[Object.keys(dbs)[16]]['title']}
                    description={dbs[Object.keys(dbs)[16]]['description']}
                    tags={dbs[Object.keys(dbs)[16]]['genre']}
                    price={dbs[Object.keys(dbs)[16]]['price']}
                    oldPrice={dbs[Object.keys(dbs)[16]]['oldprice']}
                    discount={dbs[Object.keys(dbs)[16]]['discount']}
                    link={'/listing/' + Object.keys(dbs)[16]}
                    id={Object.keys(dbs)[16]}
                    cartAdder={this.props.cartAdder}
                    wishlistAdder={this.props.wishlistAdder}
                />
                <DropDown
                    img={dbs[Object.keys(dbs)[17]]['img']}
                    imgname={dbs[Object.keys(dbs)[17]]['imgname']}
                    title={dbs[Object.keys(dbs)[17]]['title']}
                    description={dbs[Object.keys(dbs)[17]]['description']}
                    tags={dbs[Object.keys(dbs)[17]]['genre']}
                    price={dbs[Object.keys(dbs)[17]]['price']}
                    oldPrice={dbs[Object.keys(dbs)[17]]['oldprice']}
                    discount={dbs[Object.keys(dbs)[17]]['discount']}
                    link={'/listing/' + Object.keys(dbs)[17]}
                    id={Object.keys(dbs)[17]}
                    cartAdder={this.props.cartAdder}
                    wishlistAdder={this.props.wishlistAdder}
                />
                <DropDown
                    img={dbs[Object.keys(dbs)[18]]['img']}
                    imgname={dbs[Object.keys(dbs)[18]]['imgname']}
                    title={dbs[Object.keys(dbs)[18]]['title']}
                    description={dbs[Object.keys(dbs)[18]]['description']}
                    tags={dbs[Object.keys(dbs)[18]]['genre']}
                    price={dbs[Object.keys(dbs)[18]]['price']}
                    oldPrice={dbs[Object.keys(dbs)[18]]['oldprice']}
                    discount={dbs[Object.keys(dbs)[18]]['discount']}
                    link={'/listing/' + Object.keys(dbs)[18]}
                    id={Object.keys(dbs)[18]}
                    cartAdder={this.props.cartAdder}
                    wishlistAdder={this.props.wishlistAdder}
                />
                <DropDown
                    img={dbs[Object.keys(dbs)[19]]['img']}
                    imgname={dbs[Object.keys(dbs)[19]]['imgname']}
                    title={dbs[Object.keys(dbs)[19]]['title']}
                    description={dbs[Object.keys(dbs)[19]]['description']}
                    tags={dbs[Object.keys(dbs)[19]]['genre']}
                    price={dbs[Object.keys(dbs)[19]]['price']}
                    oldPrice={dbs[Object.keys(dbs)[19]]['oldprice']}
                    discount={dbs[Object.keys(dbs)[19]]['discount']}
                    link={'/listing/' + Object.keys(dbs)[19]}
                    id={Object.keys(dbs)[19]}
                    cartAdder={this.props.cartAdder}
                    wishlistAdder={this.props.wishlistAdder}
                />
            </div>
        );
    }
}

export default Grid;
;