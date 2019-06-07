import React from 'react'
import './Cart.css'
import dbs from '../../dbs.json'
import QueueButton from '../QueueButton/QueueButton';

class Cart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ids: this.props.cartItems
        }
        this.create = this.create.bind(this)
    }

    create = () => {
        let table = []
        let total = 0.00

        // Outer loop to create parent
        for (let i = 0; i < this.state.ids.length; i++) {
            let children = []
            //Inner loop to create children
            children.push(<td key={i + '1'}><img src={dbs[this.state.ids[i]]['img']} width="300" alt={dbs[this.state.ids[i]]['title']} /></td>)
            children.push(<td key={i + '2'}>{dbs[this.state.ids[i]]['title']}</td>)
            children.push(<td key={i + '3'}>{dbs[this.state.ids[i]]['price']}</td>)
            total += parseFloat(dbs[this.state.ids[i]]['price'].substring(1))
            //Create the parent and add the children
            table.push(<tr key={i + '4'}>{children}</tr>)
        }
        let pChild = []
        pChild.push(<td key={total + '1'}></td>)
        pChild.push(<td key={total + '2'} className="totaldue" >Total Due:</td>)
        pChild.push(<td key={total + '3'} className="totalprice" >${total.toFixed(2)}</td>)
        table.push(<tbody key={total + '4'}><tr key={total + '5'} id='break'>{pChild}</tr></tbody>)
        return table
    }

    render() {
        return (
            <div className='popup' onClick={this.props.closePopup}>
                <div className='popupinner'>
                    <h1>Items</h1>
                    <table>
                        {this.create()}
                    </table>
                    <QueueButton id="cartut" onClick={this.props.closePopup} text="Close" />
                </div>
            </div>
        );
    }
}

export default Cart;