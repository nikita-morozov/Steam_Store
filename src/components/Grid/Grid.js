import './Grid.css'
import React from 'react';
import { Link } from 'react-router-dom';
import dbs from '../../dbs.json';

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
                    <Link to={'/listing/' + this.state.co1}>
                        <div className="capsule header"><img id="gridImage" src={dbs['table']['games'][this.state.co1]["img"]} alt={dbs['table']['games'][this.state.co1]["imgname"]} /></div>
                    </Link>
                </div>
                <div className="grid_capsule">
                    <Link to={'/listing/' + this.state.co2}>
                        <div className="capsule header"><img id="gridImage" src={dbs['table']['games'][this.state.co2]["img"]} alt={dbs['table']['games'][this.state.co2]["imgname"]} /></div>
                    </Link>
                </div>
                <div className="grid_capsule">
                    <Link to={'/listing/' + this.state.co3}>
                        <div className="capsule header"><img id="gridImage" src={dbs['table']['games'][this.state.co3]["img"]} alt={dbs['table']['games'][this.state.co3]["imgname"]} /></div>
                    </Link>
                </div>
                <div className="grid_capsule">
                    <Link to={'/listing/' + this.state.co4}>
                        <div className="capsule header"><img id="gridImage" src={dbs['table']['games'][this.state.co4]["img"]} alt={dbs['table']['games'][this.state.co4]["imgname"]} /></div>
                    </Link>
                </div>
                <div className="grid_capsule" id="last">
                    <Link to={'/listing/' + this.state.co5}>
                        <div className="capsule header"><img id="gridImage" src={dbs['table']['games'][this.state.co5]["img"]} alt={dbs['table']['games'][this.state.co5]["imgname"]} /></div>
                    </Link>
                </div>
                <div className="grid_capsule">
                    <Link to={'/listing/' + this.state.co6}>
                        <div className="capsule header"><img id="gridImage" src={dbs['table']['games'][this.state.co6]["img"]} alt={dbs['table']['games'][this.state.co6]["imgname"]} /></div>
                    </Link>
                </div>
                <div className="grid_capsule">
                    <Link to={'/listing/' + this.state.co7}>
                        <div className="capsule header"><img id="gridImage" src={dbs['table']['games'][this.state.co7]["img"]} alt={dbs['table']['games'][this.state.co7]["imgname"]} /></div>
                    </Link>
                </div>
                <div className="grid_capsule">
                    <Link to={'/listing/' + this.state.co8}>
                        <div className="capsule header"><img id="gridImage" src={dbs['table']['games'][this.state.co8]["img"]} alt={dbs['table']['games'][this.state.co8]["imgname"]} /></div>
                    </Link>
                </div>
                <div className="grid_capsule">
                    <Link to={'/listing/' + this.state.co9}>
                        <div className="capsule header"><img id="gridImage" src={dbs['table']['games'][this.state.co9]["img"]} alt={dbs['table']['games'][this.state.co9]["imgname"]} /></div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Grid;
;