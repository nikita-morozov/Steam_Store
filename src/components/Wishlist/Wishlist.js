import React from 'react'
import './Wishlist.css'
import dbs from '../../dbs.json'
import QueueButton from '../QueueButton/QueueButton';

class Wishlist extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ids: this.props.wishlistItems
        }

        this.create = this.create.bind(this)
    }

    create = () => {
        let table = []

        // Outer loop to create parent
        for (let i = 0; i < this.state.ids.length; i++) {
            let children = []
            //Inner loop to create children
            children.push(<td key={i + '1'}><img src={dbs[this.state.ids[i]]['img']} width="300" alt='' /></td>)
            children.push(<td key={i + '2'}>{dbs[this.state.ids[i]]['title']}</td>)
            children.push(<td key={i + '3'}>{dbs[this.state.ids[i]]['price']}</td>)
            //Create the parent and add the children
            table.push(<tbody key={i + '4'}><tr key={i + '4'}>{children}</tr></tbody>)
        }
        return table
    }

    render() {
        return (
            <div className='popup' onClick={this.props.closeWishlist}>
                <div className='popupinner_wishlist'>
                    <h1>{this.props.text}</h1>
                    <table>
                        {this.create()}
                    </table>
                    <QueueButton id="wishut" onClick={this.props.closeWishlist} text="Close" />
                </div>
            </div>
        );
    }
}

export default Wishlist;