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
                <div className="grid_capsule">
                    <Link to={'/listing/' + Object.keys(dbs)[1]}>
                        <div className="capsule header"><img id="gridImage" src={dbs[Object.keys(dbs)[11]]["img"]} alt={dbs[Object.keys(dbs)[10]]["imgname"]} /></div>
                    </Link>
                </div>
                <div className="grid_capsule">
                    <Link to={'/listing/' + Object.keys(dbs)[2]}>
                        <div className="capsule header"><img id="gridImage" src={dbs[Object.keys(dbs)[12]]["img"]} alt={dbs[Object.keys(dbs)[2]]["imgname"]} /></div>
                    </Link>
                </div>
                <div className="grid_capsule">
                    <Link to={'/listing/' + Object.keys(dbs)[3]}>
                        <div className="capsule header"><img id="gridImage" src={dbs[Object.keys(dbs)[13]]["img"]} alt={dbs[Object.keys(dbs)[3]]["imgname"]} /></div>
                    </Link>
                </div>
                <div className="grid_capsule">
                    <Link to={'/listing/' + Object.keys(dbs)[4]}>
                        <div className="capsule header"><img id="gridImage" src={dbs[Object.keys(dbs)[14]]["img"]} alt={dbs[Object.keys(dbs)[4]]["imgname"]} /></div>
                    </Link>
                </div>
                <div className="grid_capsule" id="last">
                    <Link to={'/listing/' + Object.keys(dbs)[5]}>
                        <div className="capsule header"><img id="gridImage" src={dbs[Object.keys(dbs)[15]]["img"]} alt={dbs[Object.keys(dbs)[5]]["imgname"]} /></div>
                    </Link>
                </div>
                <div className="grid_capsule">
                    <Link to={'/listing/' + Object.keys(dbs)[16]}>
                        <div className="capsule header"><img id="gridImage" src={dbs[Object.keys(dbs)[16]]["img"]} alt={dbs[Object.keys(dbs)[16]]["imgname"]} /></div>
                    </Link>
                </div>
                <div className="grid_capsule">
                    <Link to={'/listing/' + Object.keys(dbs)[17]}>
                        <div className="capsule header"><img id="gridImage" src={dbs[Object.keys(dbs)[17]]["img"]} alt={dbs[Object.keys(dbs)[17]]["imgname"]} /></div>
                    </Link>
                </div>
                <div className="grid_capsule">
                    <Link to={'/listing/' + Object.keys(dbs)[18]}>
                        <div className="capsule header"><img id="gridImage" src={dbs[Object.keys(dbs)[18]]["img"]} alt={dbs[Object.keys(dbs)[18]]["imgname"]} /></div>
                    </Link>
                </div>
                <div className="grid_capsule">
                    <Link to={'/listing/' + Object.keys(dbs)[19]}>
                        <div className="capsule header"><img id="gridImage" src={dbs[Object.keys(dbs)[19]]["img"]} alt={dbs[Object.keys(dbs)[19]]["imgname"]} /></div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Grid;
;